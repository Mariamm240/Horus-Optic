import { useState, useEffect, useCallback } from 'react';
import { instagramService } from '../lib/instagram';
import type { InstagramPost, InstagramStory } from '../lib/instagram';

export function useInstagramPosts(limit: number = 10) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newPosts = await instagramService.getRecentPosts(limit);
      setPosts(newPosts);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar posts de Instagram');
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchPosts();
    
    // Actualizar cada 5 minutos
    const interval = setInterval(fetchPosts, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [fetchPosts]);

  return { posts, loading, error, lastUpdated, refetch: fetchPosts };
}

export function useInstagramStories() {
  const [stories, setStories] = useState<InstagramStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchStories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newStories = await instagramService.getStories();
      
      // Filtrar historias que no sean muy antiguas (24 horas)
      const validStories = newStories.filter(story => {
        const storyTime = new Date(story.timestamp);
        const now = new Date();
        const diffHours = (now.getTime() - storyTime.getTime()) / (1000 * 60 * 60);
        return diffHours <= 24;
      });
      
      setStories(validStories);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar historias de Instagram');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStories();
    
    // Actualizar cada 10 minutos (las historias cambian menos frecuentemente)
    const interval = setInterval(fetchStories, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [fetchStories]);

  return { stories, loading, error, lastUpdated, refetch: fetchStories };
}

export function useInstagramConnection() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        setChecking(true);
        const connected = await instagramService.validateAccessToken();
        setIsConnected(connected);
      } catch (error) {
        console.error('Error checking Instagram connection:', error);
        setIsConnected(false);
      } finally {
        setChecking(false);
      }
    };

    checkConnection();
  }, []);

  return { isConnected, checking };
}
