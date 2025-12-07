import type { Property } from '@/lib/types';

export const properties: Property[] = [
  {
    id: "gulshan-101",
    title: "Non-Furnished 3BR Apartment in Gulshan",
    address: "Gulshan",
    city: "Dhaka",
    price: 12000000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1937,
    type: 'Apartment',
    description: "Beautiful 3 bedroom non-furnished apartment in the heart of Gulshan. Ideal for families looking for long-term rental. Close to schools, offices and supermarkets.",
    features: ["Garage", "Garden"],
    images: [
      { id: "property-1-1", url: "https://picsum.photos/seed/p1-1/800/600", hint: "modern house" },
      { id: "property-1-2", url: "https://picsum.photos/seed/p1-2/800/600", hint: "modern livingroom" }
    ],
    agent: {
      name: "Sharif Property Management",
      avatar: "https://picsum.photos/seed/agent1/100/100",
      phone: "+8801700XXXXXX",
      email: "info@sharif.com.bd"
    },
    featured: true
  },
  {
    id: "banani-201",
    title: "Luxury Furnished 2BR in Banani",
    address: "Banani",
    city: "Dhaka",
    price: 9500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1291,
    type: 'Apartment',
    description: "Fully furnished two bedroom apartment in Banani, ideal for expatriates and professionals. Includes a gym and rooftop garden.",
    features: ["Gym", "RooftopDeck"],
    images: [
      { id: "property-2-1", url: "https://picsum.photos/seed/p2-1/800/600", hint: "apartment building" }
    ],
    agent: {
      name: "Sharif Property Management",
      avatar: "https://picsum.photos/seed/agent2/100/100",
      phone: "+8801700XXXXXX",
      email: "info@sharif.com.bd"
    },
    featured: true
  },
  {
    id: "bashundhara-301",
    title: "Commercial Office Space - Bashundhara",
    address: "Bashundhara",
    city: "Dhaka",
    price: 25000000,
    bedrooms: 0,
    bathrooms: 2,
    area: 4843,
    type: 'Office',
    description: "Prime commercial office space in Bashundhara, perfect for businesses looking to grow in Dhaka's modern commercial district.",
    features: ["Parking"],
    images: [
      { id: "property-3-1", url: "https://picsum.photos/seed/p3-1/800/600", hint: "office space" }
    ],
    agent: {
      name: "Sharif PM - Commercial",
      avatar: "https://picsum.photos/seed/agent1/100/100",
      phone: "+8801700XXXXXX",
      email: "commercial@sharif.com.bd"
    },
    featured: true
  },
  {
    id: "uttara-401",
    title: "Non-Furnished 4BR Home in Uttara",
    address: "Uttara",
    city: "Dhaka",
    price: 8000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 2368,
    type: 'House',
    description: "Spacious 4 bedroom home in a quiet part of Uttara, close to schools and parks.",
    features: ["Garden", "Garage"],
    images: [
      { id: "property-4-1", url: "https://picsum.photos/seed/p4-1/800/600", hint: "family home" }
    ],
    agent: {
      name: "Sharif Property Management",
      avatar: "https://picsum.photos/seed/agent2/100/100",
      phone: "+8801700XXXXXX",
      email: "info@sharif.com.bd"
    },
    featured: false
  },
  {
    id: "dhanmondi-501",
    title: "Spacious Apartment in Dhanmondi",
    address: "Dhanmondi",
    city: "Dhaka",
    price: 15000000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    type: 'Apartment',
    description: "A large and well-lit apartment in the popular area of Dhanmondi, known for its lakes and residential calm.",
    features: ["LakeView", "Balcony"],
    images: [
        { "id": "property-5-1", "url": "https://picsum.photos/seed/p5-1/800/600", "hint": "spacious apartment" }
    ],
    agent: {
        name: "Sharif Property Management",
        avatar: "https://picsum.photos/seed/agent1/100/100",
        phone: "+8801700XXXXXX",
        email: "info@sharif.com.bd"
    },
    featured: false
  },
  {
    id: "mohammadpur-601",
    title: "Affordable Family Flat in Mohammadpur",
    address: "Mohammadpur",
    city: "Dhaka",
    price: 7500000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    type: 'Apartment',
    description: "A comfortable and affordable flat in Mohammadpur, offering great value and access to local markets and schools.",
    features: ["CommunityHall"],
    images: [
        { "id": "property-6-1", "url": "https://picsum.photos/seed/p6-1/800/600", "hint": "family flat" }
    ],
    agent: {
        name: "Sharif Property Management",
        avatar: "https://picsum.photos/seed/agent2/100/100",
        phone: "+8801700XXXXXX",
        email: "info@sharif.com.bd"
    },
    featured: false
  }
];
