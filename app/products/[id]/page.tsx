import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductById, getAllProducts } from '@/lib/products';
import AddToCartButton from '@/components/AddToCartButton';
import ProductBadge from '@/components/ProductBadge';
import RelatedProducts from '@/components/RelatedProducts';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ id: p.id.toString() }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(Number(params.id));
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} - LaptopHub`,
    description: product.description
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(Number(params.id));
  if (!product) notFound();

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative bg-gray-100 flex items-center justify-center p-10 min-h-[400px]">
            {product.discount && (
              <div className="absolute top-4 left-4 z-10">
                <ProductBadge type="discount" value={product.discount} />
              </div>
            )}
            {product.isNew && (
              <div className="absolute top-4 right-4 z-10">
                <ProductBadge type="new" />
              </div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="object-contain max-h-80 w-auto"
              priority
            />
          </div>
          {/* Details */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
              {product.brand}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
              {product.discount && (
                <span className="text-xl text-gray-400 line-through">${product.price.toFixed(2)}</span>
              )}
            </div>
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Key Specifications</h3>
              <ul className="space-y-2">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="text-blue-500">✓</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4">
              <AddToCartButton product={product} />
              <button className="btn-secondary flex-1">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts currentProductId={product.id} category={product.category} />
    </div>
  );
}
