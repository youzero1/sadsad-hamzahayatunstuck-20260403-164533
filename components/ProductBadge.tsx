interface Props {
  type: 'discount' | 'new' | 'outofstock';
  value?: number;
}

export default function ProductBadge({ type, value }: Props) {
  if (type === 'discount') {
    return (
      <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
        -{value}%
      </span>
    );
  }
  if (type === 'new') {
    return (
      <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
        NEW
      </span>
    );
  }
  if (type === 'outofstock') {
    return (
      <span className="bg-gray-500 text-white text-sm font-bold px-3 py-1 rounded-full">
        Out of Stock
      </span>
    );
  }
  return null;
}
