
"use client";

import Image from "next/image";
import Script from "next/script";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Ruler, MapPin, Mail, Phone, Building2, Car, ShieldCheck, Zap, Dumbbell, Sun, Sofa, ParkingCircle, HandPlatter, Flame, Building, Trees } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { Property } from "@/lib/types";

export function PropertyDetailClient({ property }: { property: Property }) {

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const iconMap: { [key: string]: React.ReactNode } = {
    'BedDouble': <BedDouble className="h-5 w-5 text-accent" />,
    'Bath': <Bath className="h-5 w-5 text-accent" />,
    'Ruler': <Ruler className="h-5 w-5 text-accent" />,
    'Building2': <Building2 className="h-5 w-5 text-accent" />,
    'Garage': <Car className="h-5 w-5 text-accent" />,
    'Garden': <Trees className="h-5 w-5 text-accent" />,
    'Security': <ShieldCheck className="h-5 w-5 text-accent" />,
    'PowerBackup': <Zap className="h-5 w-5 text-accent" />,
    'Gym': <Dumbbell className="h-5 w-5 text-accent" />,
    'RooftopDeck': <Sun className="h-5 w-5 text-accent" />,
    'Furnished': <Sofa className="h-5 w-5 text-accent" />,
    'Parking': <ParkingCircle className="h-5 w-5 text-accent" />,
    'Reception': <HandPlatter className="h-5 w-5 text-accent" />,
    'Terrace': <Sun className="h-5 w-5 text-accent" />,
    'LakeView': <Ruler className="h-5 w-5 text-accent" />,
    'Balcony': <Building2 className="h-5 w-5 text-accent" />,
    'ServantRoom': <HandPlatter className="h-5 w-5 text-accent" />,
    'CommunityHall': <Building className="h-5 w-5 text-accent" />,
    'GasSupply': <Flame className="h-5 w-5 text-accent" />,
    'GatedCommunity': <ShieldCheck className="h-5 w-5 text-accent" />,
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


  return (
    <>
      <Script
        id="property-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }}
      />
      <div className="bg-background">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {property.title}
            </h1>
            <div className="mt-2 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{property.address}, {property.city}</span>
            </div>
          </div>

          <Carousel className="w-full mb-12">
            <CarouselContent>
              {property.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                      src={image.url}
                      alt={`Image ${index + 1} of ${property.title}: ${image.hint}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.hint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-wrap gap-4 items-center">
                <h2 className="text-3xl font-semibold text-foreground">{formatPrice(property.price)}</h2>
                <Badge variant="secondary" className="text-base">{property.type}</Badge>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-muted flex flex-col items-center justify-center gap-2">
                      <BedDouble className="h-7 w-7 text-accent" />
                      <span className="font-medium text-foreground">{property.bedrooms}</span>
                      <span className="text-sm text-muted-foreground">Bedrooms</span>
                  </div>
                  <div className="p-4 rounded-lg bg-muted flex flex-col items-center justify-center gap-2">
                      <Bath className="h-7 w-7 text-accent" />
                      <span className="font-medium text-foreground">{property.bathrooms}</span>
                      <span className="text-sm text-muted-foreground">Bathrooms</span>
                  </div>
                   <div className="p-4 rounded-lg bg-muted flex flex-col items-center justify-center gap-2">
                      <Ruler className="h-7 w-7 text-accent" />
                      <span className="font-medium text-foreground">{property.area.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">sqft</span>
                  </div>
                   <div className="p-4 rounded-lg bg-muted flex flex-col items-center justify-center gap-2">
                      <Building2 className="h-7 w-7 text-accent" />
                      <span className="font-medium text-foreground">{property.type}</span>
                      <span className="text-sm text-muted-foreground">Type</span>
                  </div>
              </div>

              <Separator />
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Description</h3>
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              <Separator />
              
              <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {property.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                               <div className="flex-shrink-0">
                                  {iconMap[feature] || <Badge variant="outline" className="text-accent border-accent">{feature.charAt(0)}</Badge>}
                              </div>
                              <span className="text-foreground">{feature.replace(/([A-Z])/g, ' $1').trim()}</span>
                          </div>
                      ))}
                  </div>
              </div>

            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Agent</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={property.agent.avatar} alt={`Portrait of ${property.agent.name}, real estate agent for this property.`} />
                      <AvatarFallback>{property.agent.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold text-foreground">{property.agent.name}</p>
                      <p className="text-sm text-muted-foreground">Listing Agent</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                      <Button asChild className="w-full" size="lg" variant="outline">
                          <a href={`tel:${property.agent.phone}`}>
                              <Phone className="mr-2 h-5 w-5" /> {property.agent.phone}
                          </a>
                      </Button>
                      <Button asChild className="w-full" size="lg">
                          <a href={`mailto:${property.agent.email}`}>
                             <Mail className="mr-2 h-5 w-5" /> Email Agent
                          </a>
                      </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

    