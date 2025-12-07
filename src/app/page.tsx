
'use client';

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { properties } from '@/lib/properties';
import { PropertyCard } from '@/components/property-card';
import { SearchBar } from '@/components/search-bar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';


const testimonials = [
  {
    name: "Farida Ahmed",
    title: "New Homeowner",
    quote: "Sharif Properties made our dream a reality. Their professionalism and deep knowledge of the Dhaka market were invaluable. We found the perfect home for our family.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHx8fDE3NjUwNjA4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Rahim Khan",
    title: "Commercial Client",
    quote: "Finding the right office space was critical for our business expansion. The commercial team at Sharif Properties was exceptional, guiding us to a prime location in Bashundhara.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwZW9wbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjUxMjA2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
    {
    name: "Selina Rahman",
    title: "Expat Renter",
    quote: "As an expat moving to Dhaka, the process seemed daunting. Sharif's team provided a seamless experience, finding a beautiful furnished apartment for me in Banani. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwZW9wbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjUxMjA2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
];


export default function Home() {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 4);
  const areas = [...new Set(properties.map(p => p.city === "Dhaka" ? p.address : p.city))];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {isClient && (
             <ReactPlayer
                url="https://www.youtube.com/watch?v=x5Ja4hi3dTw"
                playing={true}
                loop={true}
                muted={true}
                controls={false}
                width="100%"
                height="100%"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
                config={{
                  youtube: {
                    playerVars: { 
                      showinfo: 0,
                      controls: 0,
                      modestbranding: 1,
                      iv_load_policy: 3
                    }
                  }
                }}
              />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 flex flex-col items-center gap-8 px-4">
          <div className="animate-fade-in-up space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Find Your Next Home In Dhaka
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90 md:text-xl">
              The #1 source for luxury apartments, commercial spaces, and unparalleled service in the heart of the city.
            </p>
          </div>
          <div className="w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
             <SearchBar />
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/properties">
                View All Properties <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 sm:text-4xl">Areas We Serve in Dhaka</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {areas.map(area => (
              <div key={area} className="p-6 border bg-background rounded-lg text-center font-semibold text-lg hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover why discerning clients choose Sharif Properties.
            </p>
          </div>
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4 h-full">
                       <div className="bg-muted/50 p-8 rounded-lg flex flex-col h-full">
                          <div className="flex items-center mb-4">
                            <div className="flex text-accent">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                          <div className="flex items-center">
                            <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4" />
                            <div>
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                          </div>
                       </div>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
          </Carousel>
        </div>
      </section>

    </div>
  );
}
