import { useState } from 'react';
import { useInstagramStories, useInstagramPosts } from '../hooks/useInstagram';
import { Instagram, Heart, MessageCircle, Share, RefreshCw, Clock, Wifi, WifiOff } from 'lucide-react';
import { Button } from './ui';

interface InstagramFeedProps {
  showStories?: boolean;
  showPosts?: boolean;
  maxPosts?: number;
}

export function InstagramFeed({ showStories = true, showPosts = true, maxPosts = 6 }: InstagramFeedProps) {
  const { stories, loading: storiesLoading, error: storiesError, lastUpdated: storiesUpdated, refetch: refetchStories } = useInstagramStories();
  const { posts, loading: postsLoading, error: postsError, lastUpdated: postsUpdated, refetch: refetchPosts } = useInstagramPosts(maxPosts);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      if (showStories) await refetchStories();
      if (showPosts) await refetchPosts();
    } finally {
      setRefreshing(false);
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffMs = now.getTime() - time.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return 'hace unos minutos';
    if (diffHours < 24) return `hace ${diffHours}h`;
    if (diffDays < 7) return `hace ${diffDays}d`;
    return time.toLocaleDateString();
  };

  const hasContent = (showStories && stories.length > 0) || (showPosts && posts.length > 0);
  const isLoading = storiesLoading || postsLoading;
  const hasError = storiesError || postsError;

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Instagram className="h-6 w-6 text-pink-500" />
          <h2 className="text-2xl font-bold text-gray-900">Instagram @horus_optic_</h2>
          {hasError ? (
            <div title="Error de conexión">
              <WifiOff className="h-5 w-5 text-red-500" />
            </div>
          ) : (
            <div title="Conectado">
              <Wifi className="h-5 w-5 text-green-500" />
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          {(storiesUpdated || postsUpdated) && (
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>
                Actualizado: {formatTimeAgo((storiesUpdated || postsUpdated)!.toISOString())}
              </span>
            </div>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center space-x-1"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
            <span>Actualizar</span>
          </Button>
        </div>
      </div>

      {/* Error State */}
      {hasError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <WifiOff className="h-5 w-5 text-red-500 mr-2" />
            <div>
              <h3 className="text-sm font-medium text-red-800">Error de conexión con Instagram</h3>
              <p className="text-sm text-red-600 mt-1">
                {storiesError || postsError || 'No se pudieron cargar los datos de Instagram. Mostrando contenido de respaldo.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <RefreshCw className="h-8 w-8 text-pink-500 animate-spin mx-auto mb-2" />
            <p className="text-gray-600">Cargando contenido de Instagram...</p>
          </div>
        </div>
      )}

      {/* Stories Section */}
      {showStories && stories.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <div className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></div>
            Historias Recientes
          </h3>
          
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {stories.map((story) => (
              <div key={story.id} className="flex-shrink-0">
                <a
                  href={story.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-white p-0.5">
                      <img
                        src={story.media_url}
                        alt="Historia de Instagram"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </a>
                <p className="text-xs text-center mt-1 text-gray-600 truncate w-20">
                  {formatTimeAgo(story.timestamp)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Posts Section */}
      {showPosts && posts.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Posts Recientes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={post.media_url}
                    alt="Post de Instagram"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-pink-500 text-white p-2 rounded-full">
                    <Instagram className="w-4 h-4" />
                  </div>
                  {post.media_type === 'VIDEO' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 rounded-full p-3">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img
                      src="/Logo.png?v=2"
                      alt="Horus Optic"
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">@horus_optic_</h4>
                      <span className="text-sm text-gray-500">{formatTimeAgo(post.timestamp)}</span>
                    </div>
                  </div>
                  
                  {post.caption && (
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="w-5 h-5 mr-1 text-red-500" />
                        <span className="font-medium">{post.like_count?.toLocaleString() || '0'}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-5 h-5 mr-1" />
                        <span>{post.comments_count || 0}</span>
                      </div>
                    </div>
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-500 transition-colors"
                    >
                      <Share className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !hasContent && (
        <div className="text-center py-12">
          <Instagram className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No hay contenido disponible</h3>
          <p className="text-gray-600 mb-4">
            No se encontraron publicaciones o historias recientes.
          </p>
          <Button onClick={handleRefresh} variant="outline">
            Intentar nuevamente
          </Button>
        </div>
      )}

      {/* Follow Button */}
      <div className="text-center">
        <a
          href="https://www.instagram.com/horus_optic_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3">
            <Instagram className="mr-2 h-5 w-5" />
            Seguir @horus_optic_
          </Button>
        </a>
      </div>
    </div>
  );
}
