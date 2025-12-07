import Image from 'next/image';
import { properties } from '@/lib/properties';
import placeholderImages from '@/lib/placeholder-images.json';
import { PropertyCard } from '@/components/property-card';
import { SearchBar } from '@/components/search-bar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);
  const heroImage = placeholderImages.placeholderImages.find(img => img.id === 'hero-image');

  return (
    <div>
      <section className="relative h-[calc(100vh-5rem)] w-full flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Find Your Dream Property
          </h1>
          <p className="max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Luxury homes, exclusive estates, and unparalleled service.
          </p>
          <SearchBar />
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A selection of our finest properties, curated for you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/properties">
                View All Properties <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
