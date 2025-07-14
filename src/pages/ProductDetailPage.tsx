import { ProductDetail } from '../components/products/ProductDetail';

export function ProductDetailPage() {
  // En un caso real, aquí harías una llamada a la API para obtener el producto por ID
  // const { product, loading, error } = useProduct(id);
  
  // Por ahora, pasamos undefined para que use el producto de ejemplo
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductDetail />
    </div>
  );
}
