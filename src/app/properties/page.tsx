'use client';

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Head from 'next/head';
import { PropertyCard } from "@/components/property-card";
import { properties as allProperties, Property } from "@/lib/properties";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

function PropertiesPageContent() {
    const searchParams = useSearchParams();

    // Initialize state from URL search params or defaults
    const [location, setLocation] = useState(searchParams.get('location') || "");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
    const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') || "any");
    const [propertyType, setPropertyType] = useState(searchParams.get('type') || "any");

    const propertyTypes = useMemo(() => ["any", ...Array.from(new Set(allProperties.map(p => p.type)))], []);
    const bedroomOptions = useMemo(() => ["any", "1", "2", "3", "4", "5+"], []);

    const [filteredProperties, setFilteredProperties] = useState<Property[]>(allProperties);

    // Effect to sync state with URL search params on mount and when they change
    useEffect(() => {
        setLocation(searchParams.get('location') || "");
        setPropertyType(searchParams.get('type') || "any");
        setBedrooms(searchParams.get('bedrooms') || 'any');
    }, [searchParams]);

    // Effect to perform filtering when filter states change
    useEffect(() => {
        let results = allProperties;

        // Location filter
        if (location) {
            results = results.filter(p =>
                p.city.toLowerCase().includes(location.toLowerCase()) ||
                p.address.toLowerCase().includes(location.toLowerCase())
            );
        }

        // Price range filter
        results = results.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Bedrooms filter
        if (bedrooms !== "any") {
            const minBeds = parseInt(bedrooms.replace('+', ''));
            if (bedrooms.includes('+')) {
                results = results.filter(p => p.bedrooms >= minBeds);
            } else {
                results = results.filter(p => p.bedrooms === minBeds);
            }
        }

        // Property type filter
        if (propertyType !== "any") {
            results = results.filter(p => p.type === propertyType);
        }

        setFilteredProperties(results);
    }, [location, priceRange, bedrooms, propertyType]);


    const handlePriceChange = (value: number[]) => {
        setPriceRange(value as [number, number]);
    };

    const resetFilters = () => {
        setLocation('');
        setPriceRange([0, 5000000]);
        setBedrooms('any');
        setPropertyType('any');
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
    };

  return (
    <>
      <Head>
        <title>All Properties for Sale in Dhaka - Sharif Properties</title>
        <meta name="description" content="Explore our exclusive collection of luxury apartments, houses, and commercial properties for sale in Dhaka, Bangladesh. Use our filters to find your perfect property." />
        <meta property="og:title" content="All Properties for Sale in Dhaka - Sharif Properties" />
        <meta property="og:description" content="Browse our comprehensive listings of luxury properties in Dhaka. Find apartments, houses, and commercial spaces in Gulshan, Banani, and more." />
        <meta property="og:url" content="https://www.sharifproperties.com/properties" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            All Properties
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our exclusive collection of luxury properties.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Filters</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                      id="location" 
                      placeholder="City or address..." 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label>Price Range</Label>
                  <p className="text-sm font-medium text-accent mt-2">{formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}</p>
                  <Slider
                    min={0}
                    max={5000000}
                    step={100000}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    className="mt-3"
                  />
                </div>

                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Select value={bedrooms} onValueChange={setBedrooms}>
                    <SelectTrigger id="bedrooms" className="mt-2">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      {bedroomOptions.map(option => (
                        <SelectItem key={option} value={option}>{option === 'any' ? 'Any' : `${option} bedrooms`}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger id="propertyType" className="mt-2">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={resetFilters} variant="outline" className="w-full">Reset Filters</Button>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
              {filteredProperties.length > 0 ? (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                      {filteredProperties.map((property) => (
                          <PropertyCard key={property.id} property={property} />
                      ))}
                  </div>
              ) : (
                  <div className="flex flex-col items-center justify-center text-center h-full rounded-lg border border-dashed p-8">
                      <h3 className="text-2xl font-semibold">No Properties Found</h3>
                      <p className="text-muted-foreground mt-2">Try adjusting your filters to find your perfect home.</p>
                  </div>
              )}
          </main>
        </div>
      </div>
    </>
  );
}

export default function PropertiesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PropertiesPageContent />
        </Suspense>
    );
}
