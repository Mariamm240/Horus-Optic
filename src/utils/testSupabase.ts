import { supabase } from '../lib/supabase';

export async function testSupabaseConnection() {
  console.log('🔍 Probando conexión a Supabase...');
  
  try {
    // Test connection
    const { data, error } = await supabase.from('profiles').select('count', { count: 'exact' });
    
    if (error) {
      console.error('❌ Error conectando a Supabase:', error);
      return false;
    }
    
    console.log('✅ Conexión a Supabase exitosa');
    console.log(`📊 Tabla profiles encontrada con ${data?.length || 0} registros`);
    
    // Test products table
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('count', { count: 'exact' });
    
    if (productsError) {
      console.warn('⚠️ Tabla products no encontrada:', productsError);
    } else {
      console.log(`📦 Tabla products encontrada con ${products?.length || 0} registros`);
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error general:', error);
    return false;
  }
}

export async function createSampleProducts() {
  console.log('🏗️ Creando productos de ejemplo...');
  
  const sampleProducts = [
    {
      name: 'Lentes de Contacto Acuvue Oasys',
      description: 'Hidrogel de silicona para máxima comodidad durante todo el día',
      price: 149900,
      image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop',
      category: 'lentes-contacto',
      brand: 'Acuvue',
      in_stock: true,
      stock_quantity: 50,
      rating: 4.8,
      review_count: 324,
    },
    {
      name: 'Gafas Ray-Ban Aviator',
      description: 'El clásico atemporal que nunca pasa de moda',
      price: 299900,
      image_url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      category: 'gafas-sol',
      brand: 'Ray-Ban',
      in_stock: true,
      stock_quantity: 15,
      rating: 4.9,
      review_count: 445,
    },
    {
      name: 'Gafas Graduadas Gucci',
      description: 'Elegancia premium para el uso diario',
      price: 899900,
      image_url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
      category: 'gafas-graduadas',
      brand: 'Gucci',
      in_stock: true,
      stock_quantity: 8,
      rating: 4.8,
      review_count: 127,
    }
  ];

  try {
    const { data, error } = await supabase
      .from('products')
      .insert(sampleProducts)
      .select();

    if (error) {
      console.error('❌ Error creando productos:', error);
      return false;
    }

    console.log('✅ Productos creados exitosamente:', data);
    return true;
  } catch (error) {
    console.error('❌ Error general creando productos:', error);
    return false;
  }
}

// Run tests if this file is imported
if (typeof window !== 'undefined') {
  testSupabaseConnection();
}
