import { getRelatedProducts } from '@/lib/products';
import ProductCard from './ProductCard';

interface Props {
  currentProductId: number;
  category: string;
}

export default function RelatedProducts({ currentProductId, category }: Props) {
  const related = getRelatedProducts(currentProductId, category);
  if (related.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
