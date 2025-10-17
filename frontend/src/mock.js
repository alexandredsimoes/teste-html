export const mockProperties = [
  {
    id: '1',
    title: 'Modern Downtown Penthouse',
    type: 'residential',
    price: 1250000,
    location: 'Downtown, Manhattan',
    bedrooms: 3,
    bathrooms: 2,
    area: 2400,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
    ],
    description: 'Stunning penthouse with panoramic city views, modern finishes, and top-tier amenities. Features floor-to-ceiling windows, gourmet kitchen, and private terrace.',
    agentId: '1',
    featured: true,
    status: 'available'
  },
  {
    id: '2',
    title: 'Luxury Waterfront Villa',
    type: 'residential',
    price: 3500000,
    location: 'Hamptons, NY',
    bedrooms: 5,
    bathrooms: 4,
    area: 5200,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
    ],
    description: 'Breathtaking waterfront estate with private dock, infinity pool, and Mediterranean-inspired architecture. Perfect for luxury living and entertaining.',
    agentId: '2',
    featured: true,
    status: 'available'
  },
  {
    id: '3',
    title: 'Prime Office Space',
    type: 'commercial',
    price: 2800000,
    location: 'Financial District, NYC',
    bedrooms: null,
    bathrooms: 4,
    area: 4500,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    ],
    description: 'Premium office space in the heart of the Financial District. Modern infrastructure, high-speed connectivity, and prestigious business address.',
    agentId: '1',
    featured: true,
    status: 'available'
  },
  {
    id: '4',
    title: 'Cozy Suburban Home',
    type: 'residential',
    price: 650000,
    location: 'Brooklyn Heights, NY',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800'
    ],
    description: 'Charming family home in a quiet neighborhood. Features spacious backyard, updated kitchen, and close to top-rated schools.',
    agentId: '3',
    featured: false,
    status: 'available'
  },
  {
    id: '5',
    title: 'Retail Space Downtown',
    type: 'commercial',
    price: 950000,
    location: 'SoHo, Manhattan',
    bedrooms: null,
    bathrooms: 2,
    area: 1800,
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800'
    ],
    description: 'High-traffic retail location in trendy SoHo. Large storefront windows, excellent visibility, and prime shopping district.',
    agentId: '2',
    featured: false,
    status: 'available'
  },
  {
    id: '6',
    title: 'Contemporary Loft',
    type: 'residential',
    price: 890000,
    location: 'Williamsburg, Brooklyn',
    bedrooms: 2,
    bathrooms: 2,
    area: 1600,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    description: 'Industrial-chic loft with exposed brick, high ceilings, and modern amenities. Walking distance to trendy cafes and boutiques.',
    agentId: '3',
    featured: false,
    status: 'available'
  }
];

export const mockAgents = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Senior Real Estate Agent',
    email: 'sarah.mitchell@realestate.com',
    phone: '+1 (555) 123-4567',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    bio: 'With over 10 years of experience in luxury real estate, Sarah specializes in high-end residential and commercial properties.',
    propertiesSold: 127,
    rating: 4.9
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Luxury Property Specialist',
    email: 'michael.chen@realestate.com',
    phone: '+1 (555) 234-5678',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Michael brings expertise in waterfront and luxury estates, helping clients find their dream properties for over 8 years.',
    propertiesSold: 95,
    rating: 4.8
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Residential Property Expert',
    email: 'emily.rodriguez@realestate.com',
    phone: '+1 (555) 345-6789',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    bio: 'Emily focuses on family homes and residential properties, providing personalized service to help families find their perfect home.',
    propertiesSold: 143,
    rating: 5.0
  }
];
