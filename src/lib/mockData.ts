export const mockProducts = [
  {
    id: 1,
    name: "Ray-Ban Wayfarer Classic",
    description: "Las gafas de sol más icónicas del mundo. Un diseño clásico que nunca pasa de moda, con cristales de alta calidad que proporcionan una protección UV del 100%.",
    price: 189.99,
    originalPrice: 239.99,
    rating: 4.8,
    reviewCount: 324,
    image: "/Media/CATALOGO WEB 600 x400/_MG_2505.jpg",
    images: [
      "/Media/CATALOGO WEB 600 x400/_MG_2505.jpg",
      "/Media/CATALOGO WEB 600 x400/_MG_2507.jpg",
      "/Media/CATALOGO WEB 600 x400/_MG_2508.jpg"
    ],
    category: "Gafas de Sol",
    brand: "Ray-Ban",
    stockQuantity: 50,
    specifications: {
      "Material": "Acetato",
      "Protección UV": "100%",
      "Género": "Unisex"
    }
  },
  {
    id: 2,
    name: "Oakley Holbrook Metal",
    description: "Gafas de sol deportivas con diseño moderno y tecnología avanzada. Perfectas para actividades al aire libre y uso diario.",
    price: 245.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviewCount: 156,
    image: "/Media/CATALOGO WEB 600 x400/_MG_2508.jpg",
    images: [
      "/Media/CATALOGO WEB 600 x400/_MG_2508.jpg",
      "/Media/CATALOGO WEB 600 x400/_MG_2509.jpg"
    ],
    category: "Gafas de Sol",
    brand: "Oakley",
    stockQuantity: 30,
    specifications: {
      "Material": "Metal",
      "Protección UV": "100%",
      "Género": "Unisex"
    }
  },
  {
    id: 3,
    name: "Monturas Elegantes Premium",
    description: "Monturas de alta calidad con diseño elegante y sofisticado. Ideales para uso profesional y ocasiones especiales.",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviewCount: 89,
    image: "/Media/CATALOGO WEB 600 x400/_MG_2510.jpg",
    images: [
      "/Media/CATALOGO WEB 600 x400/_MG_2510.jpg",
      "/Media/CATALOGO WEB 600 x400/_MG_2511.jpg"
    ],
    category: "Monturas",
    brand: "Horus Premium",
    stockQuantity: 25,
    specifications: {
      "Material": "Titanio",
      "Peso": "18g",
      "Género": "Unisex"
    }
  }
];

export const getProductById = (id: string) => {
  return mockProducts.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category: string) => {
  if (category === "all") return mockProducts;
  return mockProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFeaturedProducts = () => {
  return mockProducts.slice(0, 4);
};
