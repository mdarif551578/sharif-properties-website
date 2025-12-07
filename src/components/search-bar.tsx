"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, DollarSign, Home, Search } from "lucide-react";

export function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("any");
  const [bedrooms, setBedrooms] = useState("any");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (type !== "any") params.set("type", type);
    if (bedrooms !== "any") params.set("bedrooms", bedrooms);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-4xl p-4 bg-background/90 backdrop-blur-sm rounded-lg shadow-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div className="relative md:col-span-2">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter a city or address..."
            className="w-full pl-10 text-base"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className="w-full text-base">
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-muted-foreground" />
              <SelectValue placeholder="Property Type" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Type</SelectItem>
            <SelectItem value="House">House</SelectItem>
            <SelectItem value="Apartment">Apartment</SelectItem>
            <SelectItem value="Condo">Condo</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base">
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
    </form>
  );
}
