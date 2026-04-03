export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  specs: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro 16" M3 Pro',
    brand: 'Apple',
    category: 'Professional',
    price: 2499.99,
    rating: 4.9,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
    description: 'The most powerful MacBook Pro ever. With M3 Pro chip, up to 36GB unified memory, and an incredible 22-hour battery life.',
    specs: ['Apple M3 Pro chip', '18GB Unified Memory', '512GB SSD', '16.2" Liquid Retina XDR Display', 'Up to 22-hour battery'],
    isNew: true,
    isFeatured: true,
    inStock: true
  },
  {
    id: 2,
    name: 'Dell XPS 15',
    brand: 'Dell',
    category: 'Professional',
    price: 1799.99,
    discount: 10,
    rating: 4.7,
    reviews: 218,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    description: 'Dell XPS 15 delivers exceptional performance with Intel Core i9, NVIDIA RTX graphics, and a stunning OLED display.',
    specs: ['Intel Core i9-13900H', '32GB DDR5 RAM', '1TB NVMe SSD', '15.6" OLED Touch Display', 'NVIDIA RTX 4070'],
    isFeatured: true,
    inStock: true
  },
  {
    id: 3,
    name: 'ASUS ROG Zephyrus G16',
    brand: 'ASUS',
    category: 'Gaming',
    price: 1999.99,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80',
    description: 'The ultimate gaming laptop with AMD Ryzen 9, RTX 4090, and a 240Hz QHD display for the most immersive gaming experience.',
    specs: ['AMD Ryzen 9 7945HX', '32GB DDR5 RAM', '2TB NVMe SSD', '16" QHD 240Hz Display', 'NVIDIA RTX 4090'],
    isNew: true,
    isFeatured: true,
    inStock: true
  },
  {
    id: 4,
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'Lenovo',
    category: 'Business',
    price: 1499.99,
    discount: 15,
    rating: 4.6,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80',
    description: 'The legendary ThinkPad business laptop, now lighter and more powerful than ever with Intel Core Ultra processors.',
    specs: ['Intel Core Ultra 7', '16GB LPDDR5 RAM', '512GB SSD', '14" IPS Anti-glare Display', 'MIL-SPEC Durability'],
    isFeatured: true,
    inStock: true
  },
  {
    id: 5,
    name: 'HP Spectre x360 14',
    brand: 'HP',
    category: 'Ultrabook',
    price: 1399.99,
    rating: 4.5,
    reviews: 174,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    description: 'A stunning 2-in-1 convertible with OLED touch display, Intel Evo platform, and all-day battery life.',
    specs: ['Intel Core i7-1355U', '16GB LPDDR4 RAM', '512GB SSD', '13.5" OLED Touch Display', '2-in-1 Convertible'],
    inStock: true
  },
  {
    id: 6,
    name: 'Acer Swift 3',
    brand: 'Acer',
    category: 'Student',
    price: 699.99,
    discount: 20,
    rating: 4.3,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80',
    description: 'Perfect student laptop with AMD Ryzen 5, long battery life, and lightweight design at an affordable price.',
    specs: ['AMD Ryzen 5 7530U', '8GB DDR4 RAM', '256GB SSD', '14" Full HD IPS Display', 'Up to 10-hour battery'],
    inStock: true
  },
  {
    id: 7,
    name: 'MSI Raider GE78 HX',
    brand: 'MSI',
    category: 'Gaming',
    price: 2799.99,
    rating: 4.7,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80',
    description: 'Top-tier gaming performance with Intel Core i9 HX, RTX 4090, and a blazing fast 240Hz QHD+ display.',
    specs: ['Intel Core i9-13980HX', '64GB DDR5 RAM', '4TB NVMe SSD', '17" QHD+ 240Hz Display', 'NVIDIA RTX 4090'],
    isNew: true,
    inStock: true
  },
  {
    id: 8,
    name: 'MacBook Air 15" M2',
    brand: 'Apple',
    category: 'Ultrabook',
    price: 1299.99,
    discount: 5,
    rating: 4.8,
    reviews: 521,
    image: 'https://images.unsplash.com/photo-1611186871525-7b7f3f5b7b0d?w=600&q=80',
    description: 'The thin and light MacBook Air with M2 chip, 15" Liquid Retina display, and fanless design.',
    specs: ['Apple M2 chip', '8GB Unified Memory', '256GB SSD', '15.3" Liquid Retina Display', 'Up to 18-hour battery'],
    inStock: true
  },
  {
    id: 9,
    name: 'Lenovo IdeaPad Flex 5',
    brand: 'Lenovo',
    category: 'Student',
    price: 549.99,
    rating: 4.2,
    reviews: 367,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80',
    description: 'Versatile 2-in-1 student laptop with AMD Ryzen 5, touch display, and great value for money.',
    specs: ['AMD Ryzen 5 5500U', '8GB DDR4 RAM', '256GB SSD', '14" FHD Touch Display', '2-in-1 Convertible'],
    inStock: true
  },
  {
    id: 10,
    name: 'Razer Blade 16',
    brand: 'Razer',
    category: 'Gaming',
    price: 3499.99,
    rating: 4.9,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    description: 'The pinnacle of gaming laptops with dual-mode display, Intel Core i9, and RTX 4090 in a sleek aluminum chassis.',
    specs: ['Intel Core i9-13950HX', '32GB DDR5 RAM', '1TB NVMe SSD', '16" Dual-Mode 240Hz Display', 'NVIDIA RTX 4090'],
    isNew: true,
    inStock: false
  },
  {
    id: 11,
    name: 'HP Pavilion 15',
    brand: 'HP',
    category: 'Student',
    price: 649.99,
    discount: 12,
    rating: 4.1,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    description: 'Reliable everyday laptop for students and home users with Intel Core i5 and Full HD display.',
    specs: ['Intel Core i5-1235U', '8GB DDR4 RAM', '512GB SSD', '15.6" Full HD Display', 'Intel Iris Xe Graphics'],
    inStock: true
  },
  {
    id: 12,
    name: 'Dell Inspiron 16 Plus',
    brand: 'Dell',
    category: 'Professional',
    price: 1099.99,
    rating: 4.4,
    reviews: 143,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    description: 'Powerful creator laptop with Intel Core i7, dedicated NVIDIA graphics, and a large 16" display.',
    specs: ['Intel Core i7-13700H', '16GB DDR5 RAM', '512GB SSD', '16" QHD+ Display', 'NVIDIA RTX 3060'],
    inStock: true
  }
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(currentId: number, category: string): Product[] {
  return products.filter((p) => p.id !== currentId && p.category === category).slice(0, 4);
}

export const categories = [
  { name: 'Gaming', icon: '🎮', description: 'High-performance gaming laptops' },
  { name: 'Professional', icon: '💼', description: 'Powerful workstations for pros' },
  { name: 'Business', icon: '🏢', description: 'Reliable business laptops' },
  { name: 'Student', icon: '🎓', description: 'Affordable student laptops' },
  { name: 'Ultrabook', icon: '✈️', description: 'Thin and light ultrabooks' }
];
