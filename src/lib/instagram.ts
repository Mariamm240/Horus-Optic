// Instagram API Service para Horus Optic
export interface InstagramStory {
  id: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO';
  caption?: string;
  timestamp: string;
  permalink: string;
  thumbnail_url?: string;
}

export interface InstagramPost {
  id: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  caption?: string;
  timestamp: string;
  permalink: string;
  like_count?: number;
  comments_count?: number;
  thumbnail_url?: string;
}

export interface InstagramApiResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

class InstagramService {
  private accessToken: string;
  private userId: string;
  private baseUrl = 'https://graph.instagram.com';

  constructor() {
    // Configurar con tus credenciales de Instagram
    this.accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || '';
    this.userId = import.meta.env.VITE_INSTAGRAM_USER_ID || '';
  }

  // Obtener posts recientes de Instagram
  async getRecentPosts(limit: number = 10): Promise<InstagramPost[]> {
    try {
      const fields = 'id,media_url,media_type,caption,timestamp,permalink,like_count,comments_count,thumbnail_url';
      const url = `${this.baseUrl}/${this.userId}/media?fields=${fields}&limit=${limit}&access_token=${this.accessToken}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`);
      }
      
      const data: InstagramApiResponse = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      // Devolver datos de respaldo si la API falla
      return this.getFallbackPosts();
    }
  }

  // Obtener historias de Instagram (requiere permisos especiales)
  async getStories(): Promise<InstagramStory[]> {
    try {
      const fields = 'id,media_url,media_type,caption,timestamp,permalink,thumbnail_url';
      const url = `${this.baseUrl}/${this.userId}/stories?fields=${fields}&access_token=${this.accessToken}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Instagram Stories API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching Instagram stories:', error);
      // Devolver datos de respaldo si la API falla
      return this.getFallbackStories();
    }
  }

  // Verificar si el token de acceso es válido
  async validateAccessToken(): Promise<boolean> {
    try {
      const url = `${this.baseUrl}/me?fields=id,username&access_token=${this.accessToken}`;
      const response = await fetch(url);
      return response.ok;
    } catch (error) {
      console.error('Error validating access token:', error);
      return false;
    }
  }

  // Datos de respaldo en caso de que la API falle
  private getFallbackPosts(): InstagramPost[] {
    return [
      {
        id: '1',
        media_url: '/Media/CATALOGO WEB 600 x400/_MG_2505.jpg',
        media_type: 'IMAGE',
        caption: '¡Me encantan mis nuevas gafas de sol de @horus_optic_! La calidad es increíble y el servicio fue excelente. #gafasdesol #horusoptic',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        permalink: 'https://www.instagram.com/p/example1/',
        like_count: 23442,
        comments_count: 156
      },
      {
        id: '2',
        media_url: '/Media/CATALOGO WEB 600 x400/_MG_2507.jpg',
        media_type: 'IMAGE',
        caption: 'Gracias a @horus_optic_ por estas gafas graduadas tan cómodas. La atención personalizada marca la diferencia. #visiónperfecta',
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        permalink: 'https://www.instagram.com/p/example2/',
        like_count: 18723,
        comments_count: 89
      },
      {
        id: '3',
        media_url: '/Media/CATALOGO WEB 600 x400/_MG_2508.jpg',
        media_type: 'IMAGE',
        caption: 'Mis nuevas gafas deportivas de @horus_optic_ son perfectas para mis entrenamientos. ¡Súper recomendadas! #deportes #gafas',
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        permalink: 'https://www.instagram.com/p/example3/',
        like_count: 31256,
        comments_count: 203
      }
    ];
  }

  private getFallbackStories(): InstagramStory[] {
    return [
      {
        id: 'story1',
        media_url: '/Media/CATALOGO WEB 600 x400/_MG_2509.jpg',
        media_type: 'IMAGE',
        caption: '¡Nuevos modelos disponibles!',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 horas atrás
        permalink: 'https://www.instagram.com/stories/horus_optic_/'
      },
      {
        id: 'story2',
        media_url: '/Media/CATALOGO WEB 600 x400/_MG_2510.jpg',
        media_type: 'IMAGE',
        caption: 'Promoción especial este fin de semana',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 horas atrás
        permalink: 'https://www.instagram.com/stories/horus_optic_/'
      }
    ];
  }
}

export const instagramService = new InstagramService();
