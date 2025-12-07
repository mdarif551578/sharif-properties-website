import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/lib/properties";
import { Bed, Bath, Ruler, MapPin } from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full">
            <Image
              src={property.images[0].url}
              alt={`Exterior view of ${property.title}, a ${property.type.toLowerCase()} in ${property.address}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={property.images[0].hint}
            />
            {property.featured && (
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">Featured</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          <p className="text-xl font-bold text-foreground">{formatPrice(property.price)}</p>
          <h3 className="text-lg font-semibold text-foreground truncate group-hover:text-accent transition-colors">{property.title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{property.address}, {property.city}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-muted/50 grid grid-cols-3 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Bed className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{property.bedrooms}</span>
            <span className="hidden sm:inline">Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{property.bathrooms}</span>
            <span className="hidden sm:inline">Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{property.area.toLocaleString()}</span>
            <span className="hidden sm:inline">sqft</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
