export type Property = {
  id: string;
  title: string;
  address: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  type: string;
  description: string;
  features: string[];
  images: { id: string; url: string; hint: string }[];
  agent: {
    name: string;
    avatar: string;
    phone: string;
    email: string;
  };
  featured: boolean;
};
