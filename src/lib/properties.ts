import type { Property } from '@/lib/types';

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Suburban Oasis",
    address: "123 Maple Street",
    city: "Springfield",
    price: 650000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    type: 'House',
    description: "A beautifully updated home in a quiet suburban neighborhood. Features a spacious open floor plan, a gourmet kitchen with stainless steel appliances, and a large backyard perfect for entertaining. The master suite includes a spa-like bathroom and a walk-in closet. Close to top-rated schools and parks.",
    features: ["SwimmingPool", "Garage", "Garden", "Fireplace", "HomeTheater"],
    images: [
      { id: "property-1-1", url: "https://picsum.photos/seed/p1-1/800/600", hint: "modern house" },
      { id: "property-1-2", url: "https://picsum.photos/seed/p1-2/800/600", hint: "modern livingroom" },
      { id: "property-1-3", url: "https://picsum.photos/seed/p1-3/800/600", hint: "modern kitchen" }
    ],
    agent: {
      name: "John Smith",
      avatar: "https://picsum.photos/seed/agent1/100/100",
      phone: "(123) 456-7890",
      email: "john.smith@sharif.com"
    },
    featured: true
  },
  {
    id: "2",
    title: "Chic Urban Loft",
    address: "456 Main Avenue, Apt 7B",
    city: "Metropolis",
    price: 850000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    type: 'Apartment',
    description: "Stunning loft apartment in the heart of the city. Boasting 15-foot ceilings, exposed brick walls, and floor-to-ceiling windows with incredible skyline views. The open-concept living space is perfect for modern city living. Building amenities include a rooftop terrace, gym, and 24-hour concierge.",
    features: ["Gym", "RooftopDeck", "Concierge", "CityView"],
    images: [
      { id: "property-2-1", url: "https://picsum.photos/seed/p2-1/800/600", hint: "apartment building" },
      { id: "property-2-2", url: "https://picsum.photos/seed/p2-2/800/600", hint: "loft apartment" },
      { id: "property-2-3", url: "https://picsum.photos/seed/p2-3/800/600", hint: "city skyline" }
    ],
    agent: {
      name: "Jane Doe",
      avatar: "https://picsum.photos/seed/agent2/100/100",
      phone: "(098) 765-4321",
      email: "jane.doe@sharif.com"
    },
    featured: true
  },
  {
    id: "3",
    title: "Luxury Downtown Condo",
    address: "789 Grand Boulevard, #2201",
    city: "Metropolis",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    type: 'Condo',
    description: "Experience luxury living at its finest in this high-floor condo. With panoramic city views, designer finishes, and state-of-the-art appliances, this residence offers unparalleled comfort and style. Exclusive access to a private resident's lounge, indoor pool, and valet parking.",
    features: ["IndoorPool", "ValetParking", "PrivateLounge", "CityView", "Gym"],
    images: [
      { id: "property-3-1", url: "https://picsum.photos/seed/p3-1/800/600", hint: "luxury condominium" },
      { id: "property-3-2", url: "https://picsum.photos/seed/p3-2/800/600", hint: "hotel lobby" }
    ],
    agent: {
      name: "John Smith",
      avatar: "https://picsum.photos/seed/agent1/100/100",
      phone: "(123) 456-7890",
      email: "john.smith@sharif.com"
    },
    featured: true
  },
  {
    id: "4",
    title: "Sprawling Country Estate",
    address: "1 Countryside Lane",
    city: "Green Valley",
    price: 2500000,
    bedrooms: 6,
    bathrooms: 7,
    area: 8000,
    type: 'House',
    description: "A magnificent estate set on 10 acres of pristine land. This custom-built home features a grand entrance, a two-story library, a wine cellar, and a guest house. The grounds include manicured gardens, a tennis court, and a large private lake. A true private retreat.",
    features: ["GuestHouse", "TennisCourt", "WineCellar", "Garden", "Garage"],
    images: [
      { id: "property-4-1", url: "https://picsum.photos/seed/p4-1/800/600", hint: "mansion garden" },
      { id: "property-4-2", url: "https://picsum.photos/seed/p4-2/800/600", hint: "luxury foyer" }
    ],
    agent: {
      name: "Jane Doe",
      avatar: "https://picsum.photos/seed/agent2/100/100",
      phone: "(098) 765-4321",
      email: "jane.doe@sharif.com"
    },
    featured: false
  },
  {
    id: "5",
    title: "Charming Family Home",
    address: "24 Oak Street",
    city: "Springfield",
    price: 450000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1900,
    type: 'House',
    description: "This delightful home is perfect for a growing family. It features a welcoming front porch, a cozy fireplace in the living room, and a large, fenced-in backyard. Located in a family-friendly community with excellent schools and amenities.",
    features: ["Fireplace", "Garage", "Garden"],
    images: [
      { id: "property-5-1", url: "https://picsum.photos/seed/p5-1/800/600", hint: "suburban home" }
    ],
    agent: {
      name: "John Smith",
      avatar: "https://picsum.photos/seed/agent1/100/100",
      phone: "(123) 456-7890",
      email: "john.smith@sharif.com"
    },
    featured: false
  },
  {
    id: "6",
    title: "The Penthouse",
    address: "1000 Skyline Drive, PH1",
    city: "Metropolis",
    price: 4800000,
    bedrooms: 4,
    bathrooms: 5,
    area: 5000,
    type: 'Penthouse',
    description: "The ultimate in urban luxury. This full-floor penthouse offers 360-degree views of the city. Features include a private elevator entrance, a rooftop pool and terrace, a chef's kitchen, and a home automation system. A truly one-of-a-kind property.",
    features: ["PrivateElevator", "RooftopPool", "CityView", "HomeAutomation"],
    images: [
      { id: "property-6-1", url: "https://picsum.photos/seed/p6-1/800/600", hint: "penthouse apartment" }
    ],
    agent: {
      name: "Jane Doe",
      avatar: "https://picsum.photos/seed/agent2/100/100",
      phone: "(098) 765-4321",
      email: "jane.doe@sharif.com"
    },
    featured: false
  },
    {
    id: "7",
    title: "Beachfront Bliss",
    address: "1 Oceanview Drive",
    city: "Malibu",
    price: 3200000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    type: 'House',
    description: "Wake up to the sound of waves in this stunning beachfront home. With direct beach access, expansive decks, and ocean views from every room, this is coastal living at its best. The interior is bright and airy, with a relaxed, sophisticated vibe.",
    features: ["Beachfront", "OceanView", "Deck", "Fireplace"],
    images: [
      { id: "property-7-1", url: "https://picsum.photos/seed/p7-1/800/600", hint: "beach house" }
    ],
    agent: {
      name: "John Smith",
      avatar: "https://picsum.photos/seed/agent1/100/100",
      phone: "(123) 456-7890",
      email: "john.smith@sharif.com"
    },
    featured: false
  },
  {
    id: "8",
    title: "Modern City Townhouse",
    address: "32 Urban Way",
    city: "Metropolis",
    price: 975000,
    bedrooms: 3,
    bathrooms: 4,
    area: 2300,
    type: 'Condo',
    description: "A sleek and modern townhouse offering the space of a house with the convenience of city living. Features four levels of living space, a private two-car garage, and a rooftop terrace with a hot tub. Located in a vibrant, walkable neighborhood.",
    features: ["RooftopDeck", "Garage", "HotTub", "CityView"],
    images: [
      { id: "property-8-1", url: "https://picsum.photos/seed/p8-1/800/600", hint: "modern townhouse" }
    ],
    agent: {
      name: "Jane Doe",
      avatar: "https://picsum.photos/seed/agent2/100/100",
      phone: "(098) 765-4321",
      email: "jane.doe@sharif.com"
    },
    featured: false
  }
];
