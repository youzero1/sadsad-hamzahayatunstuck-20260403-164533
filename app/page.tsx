import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <Newsletter />
    </div>
  );
}
