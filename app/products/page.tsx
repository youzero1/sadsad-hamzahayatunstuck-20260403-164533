import ProductGrid from '@/components/ProductGrid';
import ProductFilters from '@/components/ProductFilters';
import { getAllProducts } from '@/lib/products';

export const metadata = {
  title: 'All Laptops - LaptopHub',
  description: 'Browse our complete collection of laptops'
};

export default function ProductsPage() {
  const products = getAllProducts();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">All Laptops</h1>
      <p className="text-gray-500 mb-8">Showing {products.length} products</p>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <ProductFilters />
        </aside>
        <div className="flex-1">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
