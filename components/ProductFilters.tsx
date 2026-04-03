export default function ProductFilters() {
  const brands = ['Apple', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'MSI', 'Razer'];
  const categories = ['Gaming', 'Professional', 'Business', 'Student', 'Ultrabook'];
  const priceRanges = ['Under $500', '$500 - $1000', '$1000 - $2000', 'Over $2000'];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
              <span className="text-gray-600 text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="border-t pt-6">
        <h3 className="font-bold text-gray-900 mb-3">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
              <span className="text-gray-600 text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="border-t pt-6">
        <h3 className="font-bold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="price" className="border-gray-300 text-blue-600" />
              <span className="text-gray-600 text-sm">{range}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="border-t pt-6">
        <h3 className="font-bold text-gray-900 mb-3">Availability</h3>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
          <span className="text-gray-600 text-sm">In Stock Only</span>
        </label>
      </div>
      <button className="btn-primary w-full">Apply Filters</button>
      <button className="btn-secondary w-full">Reset</button>
    </div>
  );
}
