import type { Property } from '@/lib/types';

export const properties: Property[] = [
  {
    id: "gulshan-101",
    title: "Non-Furnished 3BR Apartment",
    address: "Gulshan",
    city: "Dhaka",
    price: 12000000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1937,
    type: 'Apartment',
    description: "Beautiful 3 bedroom non-furnished apartment in the heart of Gulshan. Ideal for families looking for long-term rental. Close to schools, offices and supermarkets.",
    features: ["Garage", "Garden", "Security", "PowerBackup"],
    images: [
      { id: "property-1-1", url: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NjQ5ODMzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "modern house" },
      { id: "property-1-2", url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsaXZpbmdyb29tfGVufDB8fHx8MTc2NTAwMDgwNXww&ixlib=rb-4.1.0&q=80&w=1080", hint: "modern livingroom" },
      { id: "property-1-3", url: "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bW9kZXJuJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NjQ5OTk4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "modern kitchen" }
    ],
    agent: {
      name: "Sharif Property Management",
      avatar: "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzY1MDI5NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    features: ["Gym", "RooftopDeck", "Furnished"],
    images: [
      { id: "property-2-1", url: "https://images.unsplash.com/photo-1595330449916-e7c3e1962bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjUwOTUyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "apartment building" },
      { id: "property-2-2", url: "https://images.unsplash.com/photo-1560440021-33f9b867899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxsb2Z0JTIwYXBhcnRtZW50fGVufDB8fHx8MTc2NTA5NTI3N3ww&ixlib=rb-4.1.0&q=80&w=1080", hint: "loft apartment" }
    ],
    agent: {
      name: "Sharif Property Management",
      avatar: "https://images.unsplash.com/photo-1573496527892-904f897eb744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzY1MDU5MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      phone: "+8801700XXXXXX",
      email: "info@sharif.com.bd"
    },
    featured: true
  },
  {
    id: "bashundhara-301",
    title: "Commercial Office Space",
    address: "Bashundhara",
    city: "Dhaka",
    price: 25000000,
    bedrooms: 0,
    bathrooms: 2,
    area: 4843,
    type: 'Office',
    description: "Prime commercial office space in Bashundhara, perfect for businesses looking to grow in Dhaka's modern commercial district.",
    features: ["Parking", "Reception"],
    images: [
      { id: "property-3-1", url: "https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjb25kb21pbml1bXxlbnwwfHx8fDE3NjUwOTUyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "office space" },
      { id: "property-3-2", url: "https://images.unsplash.com/photo-1637730826933-54287f79e1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxob3RlbCUyMGxvYmJ5fGVufDB8fHx8MTc2NTAwMDUzNnww&ixlib=rb-4.1.0&q=80&w=1080", hint: "hotel lobby" }
    ],
    agent: {
      name: "Sharif PM - Commercial",
      avatar: "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzY1MDI5NDk2fDA&ixlibrb-4.1.0&q=80&w=1080",
      phone: "+8801700XXXXXX",
      email: "commercial@sharif.com.bd"
    },
    featured: true
  },
  {
    id: "uttara-401",
    title: "Non-Furnished 4BR Home",
    address: "Uttara",
    city: "Dhaka",
    price: 8000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 2368,
    type: 'House',
    description: "Spacious 4 bedroom home in a quiet part of Uttara, close to schools and parks.",
    features: ["Garden", "Garage", "Terrace"],
    images: [
      { id: "property-4-1", url: "https://images.unsplash.com/photo-1640792834777-66cdfb41478c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtYW5zaW9uJTIwZ2FyZGVufGVufDB8fHx8MTc2NTA5NTI3N3ww&ixlib=rb-4.1.0&q=80&w=1080", hint: "family home" },
      { id: "property-4-2", url: "https://images.unsplash.com/photo-1727777765350-ddf5b06c6c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBmb3llcnxlbnwwfHx8fDE3NjUwOTUyNzd8MA&ixlib-rb-4.1.0&q=80&w=1080", hint: "luxury foyer" }
    ],
    agent: {
      name: "Sharif Property Management",
      avatar: "https://images.unsplash.com/photo-1573496527892-904f897eb744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzY1MDU5MTcxfDA&ixlib.rb-4.1.0&q=80&w=1080",
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
    features: ["LakeView", "Balcony", "ServantRoom"],
    images: [
        { "id": "property-5-1", "url": "https://images.unsplash.com/photo-1623715056534-f8052f1dfd86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzdWJ1cmJhbiUyMGhvbWV8ZW58MHx8fHwxNzY0OTk4MDc1fDA&ixlib-rb-4.1.0&q=80&w=1080", "hint": "spacious apartment" }
    ],
    agent: {
        name: "Sharif Property Management",
        avatar: "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzY1MDI5NDk2fDA&ixlib-rb-4.1.0&q=80&w=1080",
        phone: "+8801700XXXXXX",
        email: "info@sharif.com.bd"
    },
    featured: false
  },
  {
    id: "mohammadpur-601",
    title: "Affordable Family Flat",
    address: "Mohammadpur",
    city: "Dhaka",
    price: 7500000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    type: 'Apartment',
    description: "A comfortable and affordable flat in Mohammadpur, offering great value and access to local markets and schools.",
    features: ["CommunityHall", "GasSupply"],
    images: [
        { "id": "property-6-1", "url": "https://images.unsplash.com/photo-1707484687082-9493754d389f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBhcGFydG1lbnR8ZW58MHx8fHwxNzY1MDIyMzYyfDA&ixlib-rb-4.1.0&q=80&w=1080", "hint": "family flat" }
    ],
    agent: {
        name: "Sharif Property Management",
        avatar: "https://images.unsplash.com/photo-1573496527892-904f897eb744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzY1MDU5MTcxfDA&ixlib-rb-4.1.0&q=80&w=1080",
        phone: "+8801700XXXXXX",
        email: "info@sharif.com.bd"
    },
    featured: false
  },
   {
    id: "niketon-701",
    title: "Modern Apartment in Niketon",
    address: "Niketon",
    city: "Dhaka",
    price: 11000000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1450,
    type: 'Apartment',
    description: "A sleek and modern apartment in the gated community of Niketon, offering security and convenience.",
    features: ["Security", "GatedCommunity", "Parking"],
    images: [
      { id: "property-7-1", url: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxiZWFjaCUyMGhvdXNlfGVufDB8fHx8MTc2NTA0NjEzNXww&ixlib=rb-4.1.0&q=80&w=1080", hint: "beach house" }
    ],
    agent: {
        name: "Sharif Property Management",
        avatar: "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzY1MDI5NDk2fDA&ixlib-rb-4.1.0&q=80&w=1080",
        phone: "+8801700XXXXXX",
        email: "info@sharif.com.bd"
    },
    featured: true
  }
];
