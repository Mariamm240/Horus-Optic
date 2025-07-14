import { useState } from 'react';
import { Star, Instagram, Heart, MessageCircle, Share, ThumbsUp } from 'lucide-react';
import { Button } from '../components/ui';

export function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState('instagram');

  const instagramReels = [
    {
      id: 1,
      username: 'maria_garcia',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&h=800&fit=crop',
      caption: '¡Me encantan mis nuevas gafas de sol de @horusoptic! La calidad es increíble y el servicio fue excelente. #gafasdesol #horusoptic',
      likes: 23442,
      comments: 156,
      time: '2 días'
    },
    {
      id: 2,
      username: 'carlos_rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=800&fit=crop',
      caption: 'Gracias a @horusoptic por estas gafas graduadas tan cómodas. La atención personalizada marca la diferencia. #visiónperfecta',
      likes: 18723,
      comments: 89,
      time: '4 días'
    },
    {
      id: 3,
      username: 'laura_martinez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1556306303-76ce7ce1ec0d?w=600&h=800&fit=crop',
      caption: 'Mis nuevas gafas deportivas de @horusoptic son perfectas para mis entrenamientos. ¡Súper recomendadas! #deportes #gafas',
      likes: 31256,
      comments: 203,
      time: '1 semana'
    },
    {
      id: 4,
      username: 'javier_lopez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=800&fit=crop',
      caption: 'Primera vez comprando en @horusoptic y no será la última. Excelente asesoramiento y productos de primera calidad. #clientesatisfecho',
      likes: 27638,
      comments: 134,
      time: '1 semana'
    },
    {
      id: 5,
      username: 'ana_fernandez',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=800&fit=crop',
      caption: 'Mis lentes de contacto de @horusoptic son tan cómodos que ni siquiera noto que los llevo puestos. ¡Gracias por el gran servicio! #lentesdecontacto',
      likes: 19827,
      comments: 98,
      time: '2 semanas'
    }
  ];

  const googleReviews = [
    {
      id: 1,
      name: 'María García',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      time: 'hace 2 semanas',
      review: 'Excelente atención al cliente. Me ayudaron a encontrar las gafas perfectas para mi rostro y necesidades visuales. El personal es muy profesional y conocedor. Definitivamente volveré para mi próxima compra.'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      time: 'hace 1 mes',
      review: 'Las mejores gafas que he tenido. La calidad es excepcional y el servicio fue personalizado. Me explicaron todas las opciones disponibles y me ayudaron a tomar la mejor decisión. Muy recomendable.'
    },
    {
      id: 3,
      name: 'Laura Martínez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 4,
      time: 'hace 2 meses',
      review: 'Buena experiencia en general. El personal es amable y las gafas son de buena calidad. El único inconveniente fue que tuve que esperar un poco más de lo esperado para recibir mis lentes graduados.'
    },
    {
      id: 4,
      name: 'Javier López',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      time: 'hace 3 meses',
      review: 'Increíble servicio y productos de primera calidad. Me encantaron las opciones disponibles y la asesoría profesional. Las gafas me quedaron perfectas y la graduación es exacta. Totalmente recomendado.'
    },
    {
      id: 5,
      name: 'Ana Fernández',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      time: 'hace 3 meses',
      review: 'Excelente experiencia desde el momento en que entré a la tienda. El personal es muy atento y profesional. Me ayudaron a encontrar unas gafas que se adaptan perfectamente a mi estilo y necesidades. Muy satisfecha con mi compra.'
    },
    {
      id: 6,
      name: 'Pedro Sánchez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 4,
      time: 'hace 4 meses',
      review: 'Buen servicio y variedad de productos. Las gafas son de buena calidad y el precio es justo. El personal es amable y conocedor. Recomendaría esta óptica a mis amigos y familiares.'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    experience: '',
    acceptPublish: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando testimonio:', formData);
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por compartir tu experiencia!');
    setFormData({
      name: '',
      email: '',
      rating: 5,
      experience: '',
      acceptPublish: false
    });
  };

  const averageRating = 4.8;
  const totalReviews = 128;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Lo que nuestros clientes
                <span className="block text-yellow-400">dicen sobre nosotros</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Descubre por qué nuestros clientes confían en Horus Optic para el cuidado de su visión. 
                Experiencias reales que reflejan nuestro compromiso con la calidad y el servicio personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg"
                  onClick={() => document.getElementById('testimonials-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver testimonios
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 text-lg"
                  onClick={() => document.getElementById('share-experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Dejar mi opinión
                </Button>
              </div>
            </div>
            <div className="flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop" 
                alt="Cliente satisfecho con gafas de sol" 
                className="rounded-2xl shadow-2xl w-1/2 transform rotate-3"
              />
              <img 
                src="https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&h=400&fit=crop" 
                alt="Cliente satisfecho con gafas graduadas" 
                className="rounded-2xl shadow-2xl w-1/2 transform -rotate-3 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Navigation */}
      <section id="testimonials-form" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('instagram')}
                className={`px-8 py-4 rounded-xl font-medium transition-all ${
                  activeTab === 'instagram'
                    ? 'bg-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                <Instagram className="inline-block w-5 h-5 mr-2" />
                Reels de Instagram
              </button>
              <button
                onClick={() => setActiveTab('google')}
                className={`px-8 py-4 rounded-xl font-medium transition-all ${
                  activeTab === 'google'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <Star className="inline-block w-5 h-5 mr-2" />
                Reseñas de Google
              </button>
            </div>
          </div>

          {/* Instagram Reels Section */}
          {activeTab === 'instagram' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Reels de Instagram</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Descubre lo que nuestros clientes comparten sobre sus experiencias
                </p>
                <Button className="mt-6 bg-pink-500 hover:bg-pink-600">
                  <Instagram className="mr-2 h-5 w-5" />
                  Seguirnos
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {instagramReels.map((reel) => (
                  <div key={reel.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative">
                      <img 
                        src={reel.image} 
                        alt={`Instagram Reel de ${reel.username}`}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-pink-500 text-white p-2 rounded-full">
                        <Instagram className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <img 
                          src={reel.avatar} 
                          alt={reel.username}
                          className="w-12 h-12 rounded-full mr-3 border-2 border-pink-200"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">{reel.username}</h4>
                          <span className="text-sm text-gray-500">{reel.time}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">{reel.caption}</p>
                      
                      <div className="flex items-center justify-between text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Heart className="w-5 h-5 mr-1 text-red-500" />
                            <span className="font-medium">{reel.likes.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-5 h-5 mr-1" />
                            <span>{reel.comments}</span>
                          </div>
                        </div>
                        <Share className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Ver más reels
                </Button>
              </div>
            </div>
          )}

          {/* Google Reviews Section */}
          {activeTab === 'google' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Reseñas de Google</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                  Lo que nuestros clientes opinan sobre nuestros servicios
                </p>
                
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-4xl font-bold text-yellow-500 mr-2">{averageRating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-6 w-6 ${
                              i < Math.floor(averageRating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">({totalReviews} reseñas)</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {googleReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{review.time}</p>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <ThumbsUp className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{review.review}"</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg"
                  onClick={() => window.open('https://www.google.com/search?q=horus+optic+reviews', '_blank')}
                >
                  Ver todas las reseñas en Google
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Share Experience Section */}
      <section id="share-experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comparte tu experiencia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos encantaría conocer tu opinión sobre nuestros productos y servicios
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">¿Por qué compartir tu experiencia?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <ThumbsUp className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Ayuda a otros clientes</h4>
                    <p className="text-gray-600">Tu opinión puede ayudar a otros a tomar mejores decisiones sobre sus necesidades visuales.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Mejoramos con tu feedback</h4>
                    <p className="text-gray-600">Tus comentarios nos ayudan a mejorar constantemente nuestros productos y servicios.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Obtén beneficios exclusivos</h4>
                    <p className="text-gray-600">Al compartir tu experiencia, podrías recibir descuentos especiales en tu próxima compra.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Deja tu testimonio</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tu calificación</label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            star <= formData.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 hover:text-yellow-400'
                          } transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Tu experiencia*</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Cuéntanos sobre tu experiencia con Horus Optic..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptPublish"
                    name="acceptPublish"
                    checked={formData.acceptPublish}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="acceptPublish" className="ml-3 text-sm text-gray-600">
                    Acepto que mi testimonio sea publicado en el sitio web y redes sociales de Horus Optic
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary-600 hover:bg-primary-700 py-3 text-lg"
                  disabled={!formData.acceptPublish}
                >
                  Enviar testimonio
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
