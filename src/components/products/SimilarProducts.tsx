import { useNavigate } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../hooks/useCart';
import toast from 'react-hot-toast';

interface SimilarProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  material: string;
  protection: string;
  style: string;
}

export function SimilarProducts() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const similarProducts: SimilarProduct[] = [
    {
      id: 2,
      name: "Ray-Ban Aviator Classic",
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=300&h=300&fit=crop",
      price: 149.99,
      rating: 4.8,
      reviews: 124,
      material: "Metal",
      protection: "100% UVA/UVB",
      style: "Clásico"
    },
    {
      id: 3,
      name: "Oakley Holbrook",
      image: "https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=300&h=300&fit=crop",
      price: 129.99,
      rating: 4.6,
      reviews: 98,
      material: "Plástico O Matter",
      protection: "100% UVA/UVB/UVC",
      style: "Deportivo"
    },
    {
      id: 4,
      name: "Gucci GG0396S",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
      price: 299.99,
      rating: 4.9,
      reviews: 56,
      material: "Acetato",
      protection: "100% UVA/UVB",
      style: "Premium"
    },
    {
      id: 5,
      name: "Prada Linea Rossa",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
      price: 279.99,
      rating: 4.7,
      reviews: 42,
      material: "Metal y Acetato",
      protection: "100% UVA/UVB",
      style: "Moderno"
    }
  ];

  const handleViewDetails = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const handleBuyProduct = async (product: SimilarProduct) => {
    try {
      await addToCart({
        productId: product.id.toString(),
        quantity: 1
      });
      toast.success(`${product.name} añadido al carrito`);
    } catch {
      toast.error('Error al añadir al carrito');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Productos similares</h2>
        <p className="text-gray-500">Comparativa de productos similares que podrían interesarte</p>
      </div>
      
      {/* Grid de productos similares */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {similarProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white/90 transition-colors">
                <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-500 text-xs mb-2">{product.style}</p>
              
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-blue-600">${product.price}</span>
                <span className="text-xs text-gray-500">{product.reviews} reseñas</span>
              </div>
              
              <Button
                onClick={() => handleViewDetails(product.id)}
                variant="outline"
                className="w-full text-sm py-2"
              >
                Ver detalles
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Tabla comparativa */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Comparativa detallada</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">PRODUCTO</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">PRECIO</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">CALIFICACIÓN</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">MATERIAL</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">PROTECCIÓN</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">ESTILO</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">ACCIÓN</th>
                </tr>
              </thead>
              <tbody>
                {similarProducts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-blue-600">${product.price}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-gray-500 text-sm">({product.reviews})</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{product.material}</td>
                    <td className="py-4 px-4 text-gray-700">{product.protection}</td>
                    <td className="py-4 px-4">
                      <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {product.style}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleViewDetails(product.id)}
                          variant="outline"
                          className="text-xs px-3 py-1"
                        >
                          Ver
                        </Button>
                        <Button
                          onClick={() => handleBuyProduct(product)}
                          className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700"
                        >
                          Comprar
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
