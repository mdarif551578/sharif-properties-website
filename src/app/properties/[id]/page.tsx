import { properties } from "@/lib/properties";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import { PropertyDetailClient } from "@/components/property-detail-client";

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    return {
      title: 'Property Not Found | Sharif Properties',
      description: 'The property you are looking for could not be found.',
    };
  }

  const propertyJsonLd = {
    "@context": "https://schema.org",
    "@type": property.type === 'Office' ? 'OfficeBuilding' : 'Apartment',
    "name": property.title,
    "description": property.description,
    "image": property.images.map(img => img.url),
    "url": `https://www.sharifproperties.com/properties/${property.id}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": property.address,
      "addressLocality": property.city,
      "addressRegion": "Dhaka Division",
      "addressCountry": "BD"
    },
    ...(property.type !== 'Office' && {
        "numberOfBedrooms": property.bedrooms,
        "numberOfBathroomsTotal": property.bathrooms,
        "floorSize": {
            "@type": "QuantitativeValue",
            "value": property.area,
            "unitText": "sqft"
        }
    }),
    "offers": {
        "@type": "Offer",
        "price": property.price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.7854", 
      "longitude": "90.3980"
    }
  };

  return {
    title: `${property.title} | Sharif Properties`,
    description: `Details for ${property.title}, a premium ${property.type.toLowerCase()} in ${property.address}, ${property.city}. View images, features, and contact the agent.`,
    openGraph: {
      title: `${property.title} | Sharif Properties`,
      description: property.description.substring(0, 160),
      images: [property.images[0].url],
      url: `https://www.sharifproperties.com/properties/${property.id}`,
      type: 'article',
      publishedTime: new Date().toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${property.title} | Sharif Properties`,
      description: `View details for ${property.title}, located in ${property.address}. A premier ${property.type.toLowerCase()} offered by Sharif Properties.`,
      images: [property.images[0].url],
    },
    other: {
      'application/ld+json': JSON.stringify(propertyJsonLd),
    },
  };
}


export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  return <PropertyDetailClient property={property} />;
}
