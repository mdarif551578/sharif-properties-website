
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
    description: `Discover the perfect canvas for your family's future in this spacious 1,937 sq. ft. non-furnished apartment, perfectly situated in the prestigious heart of Gulshan. This exceptional residence offers three generously sized bedrooms and three modern bathrooms, providing ample space and privacy for everyone. The open-plan living and dining areas are bathed in natural light, creating a warm and inviting atmosphere that you can customize to your exact tastes. Its prime location places you just moments away from Dhaka's finest international schools, corporate offices, and premium supermarkets, offering unparalleled convenience for a modern urban lifestyle. With the added peace of mind from 24/7 security, dedicated garage parking, and full power backup, this home is an ideal sanctuary for families seeking both comfort and accessibility.`,
    features: ["Garage", "Garden", "Security", "PowerBackup"],
    images: [
      { id: "property-1-1", url: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NjQ5ODMzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "modern house" },
      { id: "property-1-2", url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsaXZpbmdyb29tfGVufDB8fHx8MTc2NTAwMDgwNXww&ixlib=rb-4.1.0&q=80&w=1080", hint: "modern livingroom" },
      { id: "property-1-3", url: "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bW9kZXJuJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NjQ5OTk4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "modern kitchen" }
    ],
    agent: {
      name: "Sharif Property Management",
      avatar: "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzY1MDI5NDk2fDA&ixlib-rb-4.1.0&q=80&w=1080",
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
    description: `Experience turnkey luxury in this impeccably furnished two-bedroom apartment, located in the vibrant and sought-after neighborhood of Banani. Designed with the discerning professional and expatriate in mind, this 1,291 sq. ft. residence offers a seamless move-in experience. Every detail has been thoughtfully curated, from the high-end furniture to the modern appliances. The building boasts exclusive amenities including a state-of-the-art fitness center and a beautifully landscaped rooftop deck, perfect for unwinding with panoramic city views. Enjoy the convenience of living in a dynamic area, surrounded by trendy cafes, fine dining, and boutique shops, all while residing in a secure and sophisticated home.`,
    features: ["Gym", "RooftopDeck", "Furnished"],
    images: [
      { id: "property-2-1", url: "https://images.unsplash.com/photo-1595330449916-e7c3e1962bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwwfHx8fDE3NjUwOTUyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "apartment building" },
      { id: "property-2-2", url: "https://images.unsplash.com/photo-1560440021-33f9b867899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxsb2Z0JTIwYXBhcnRtZW50fGVufDB8fHx8MTc2NTA5NTI3N3ww&ixlib-rb-4.1.0&q=80&w=1080", hint: "loft apartment" }
    ],
    agent: {
      name: "Sharif Property Management",
      avatar: "https://images.unsplash.com/photo-1573496527892-904f897eb744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzY1MDU5MTcxfDA&ixlib-rb-4.1.0&q=80&w=1080",
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
    description: `Elevate your business presence with this prime commercial office space, spanning an impressive 4,843 sq. ft. in the heart of Bashundhara's booming commercial district. This expansive, open-concept unit is perfectly suited for growing enterprises, startups, or established corporations seeking a strategic foothold in one of Dhaka's most modern and well-connected areas. The space features two well-maintained bathrooms, ample parking for staff and clients, and a professional reception area to welcome your guests. Surrounded by key financial institutions and corporate headquarters, this location offers an unparalleled opportunity to position your business for success and growth.`,
    features: ["Parking", "Reception"],
    images: [
      { id: "property-3-1", url: "https://images.unsplash.com/photo-1632743441209-8a09b8a37e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBjb25kb21pbml1bXxlbnwwfHx8fDE3NjUwOTUyNzd8MA&ixlib-rb-4.1.0&q=80&w=1080", hint: "office space" },
      { id: "property-3-2", url: "https://images.unsplash.com/photo-1637730826933-54287f79e1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxob3RlbCUyMGxvYmJ5fGVufDB8fHx8MTc2NTAwMDUzNnww&ixlib-rb-4.1.0&q=80&w=1080", hint: "hotel lobby" }
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
    description: `Escape the city's hustle in this spacious 2,368 sq. ft. four-bedroom home, nestled in a tranquil, family-friendly sector of Uttara. This property offers a rare combination of space and serenity, featuring four bedrooms, four bathrooms, a private garden, and a secure garage. The expansive layout includes a large living area and a separate dining space, perfect for entertaining. Step out onto the private terrace to enjoy your morning coffee or evening relaxation. With its close proximity to excellent schools, lush parks, and convenient shopping, this non-furnished house provides the perfect foundation for you to create your dream family home in a peaceful and secure neighborhood.`,
    features: ["Garden", "Garage", "Terrace"],
    images: [
      { id: "property-4-1", url: "https://images.unsplash.com/photo-1640792834777-66cdfb41478c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtYW5zaW9uJTIwZ2FyZGVufGVufDB8fHx8MTc2NTA5NTI3N3ww&ixlib-rb-4.1.0&q=80&w=1080", hint: "family home" },
      { id: "property-4-2", url: "https://images.unsplash.com/photo-1727777765350-ddf5b06c6c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBmb3llcnxlbnwwfHx8fDE3NjUwOTUyNzd8MA&ixlib-rb-4.1.0&q=80&w=1080", hint: "luxury foyer" }
    ],
    agent: {
      name: "Sharif Property Management",
      avatar: "https://images.unsplash.com/photo-1573496527892-904f897eb744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8fHwxNzY1MDU5MTcxfDA&ixlib.rb-4.1.0&q=80&w=1080",
      phone: "+8801700XXXXXX",
      email: "info@sharif.com.bd"
    },
    featured: true
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
    description: `Embrace a life of comfort and elegance in this expansive 2,200 sq. ft. apartment in the heart of Dhanmondi. Known for its serene lakes and vibrant cultural scene, this location offers a unique blend of tranquility and urban convenience. This beautifully designed residence features three large bedrooms, three bathrooms, and a dedicated servant's room. The airy living space opens onto a private balcony with stunning lake views, providing a perfect retreat from city life. High ceilings and large windows flood the apartment with natural light, creating a bright and welcoming ambiance. This is a rare opportunity to live in one of Dhaka's most beloved residential areas.`,
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
    description: `Find exceptional value in this charming and comfortable 1,500 sq. ft. family flat located in the bustling neighborhood of Mohammadpur. This practical and well-maintained home offers three cozy bedrooms and two bathrooms, making it an ideal choice for families looking for affordability without compromising on comfort. The building provides reliable gas supply and access to a community hall for social gatherings and events. Its strategic location offers easy access to a variety of local markets, schools, and public transport, ensuring all your daily needs are just a short walk away. This is a fantastic opportunity to invest in a welcoming community and a home that promises a convenient lifestyle.`,
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
    description: `Discover modern living in this sleek 1,450 sq. ft. apartment, securely nestled within the exclusive gated community of Niketon. This stylish home is perfect for those who value privacy, security, and contemporary design. It features two bright bedrooms, two modern bathrooms, and a well-designed living area that maximizes space and comfort. Residents benefit from 24/7 security, dedicated parking, and the peace of mind that comes with living in a controlled and well-managed environment. Niketon's central location provides effortless access to Gulshan's business district and Banani's vibrant social scene, making it one of the most desirable and convenient addresses in Dhaka.`,
    features: ["Security", "GatedCommunity", "Parking"],
    images: [
      { id: "property-7-1", url: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxiZWFjaCUyMGhvdXNlfGVufDB8fHx8MTc2NTA0NjEzNXww&ixlib-rb-4.1.0&q=80&w=1080", hint: "beach house" }
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
