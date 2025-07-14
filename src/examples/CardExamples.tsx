import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardImage,
  Button 
} from '../components/ui';

export function CardExamples() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Ejemplos de Cards con Tailwind CSS</h1>
        
        {/* Card básico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card Default */}
          <Card hover>
            <CardHeader variant="default">
              <CardTitle size="md">Card Básico</CardTitle>
              <CardDescription>Este es un card con estilo por defecto</CardDescription>
            </CardHeader>
            <CardContent spacing="md">
              <p>Contenido del card con espaciado medio entre elementos.</p>
              <p>Usando Tailwind CSS para todos los estilos.</p>
            </CardContent>
            <CardFooter justify="end">
              <Button size="sm">Acción</Button>
            </CardFooter>
          </Card>

          {/* Card Elevated */}
          <Card variant="elevated" hover>
            <CardHeader variant="gradient">
              <CardTitle size="md">Card Elevado</CardTitle>
              <CardDescription>Card con sombra elevada y header degradado</CardDescription>
            </CardHeader>
            <CardContent spacing="md">
              <p>Este card tiene una sombra más pronunciada.</p>
              <p>El header tiene un fondo degradado azul.</p>
            </CardContent>
            <CardFooter variant="muted" justify="between">
              <span className="text-sm text-gray-500">Info adicional</span>
              <Button size="sm" variant="outline">Ver más</Button>
            </CardFooter>
          </Card>

          {/* Card con Imagen */}
          <Card variant="default" padding="none" hover>
            <CardImage 
              src="/api/placeholder/400/200" 
              alt="Ejemplo de imagen"
              aspectRatio="video"
            />
            <div className="p-6">
              <CardTitle size="lg">Card con Imagen</CardTitle>
              <CardDescription className="mt-2">
                Card que incluye una imagen en la parte superior
              </CardDescription>
              <CardContent spacing="sm" className="mt-4">
                <p>La imagen se adapta al ancho completo del card.</p>
                <p>Tiene efectos de hover suaves.</p>
              </CardContent>
            </div>
            <CardFooter justify="center" variant="accent">
              <Button className="w-full">Explorar</Button>
            </CardFooter>
          </Card>

        </div>

        {/* Cards de diferentes tamaños */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card XL */}
          <Card variant="elevated" padding="xl" hover>
            <CardTitle size="xl">Card Extra Grande</CardTitle>
            <CardDescription className="mt-3">
              Este card tiene padding extra grande y título grande
            </CardDescription>
            <CardContent spacing="lg" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Característica 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Característica 2</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Característica 3</span>
                </div>
              </div>
            </CardContent>
            <CardFooter justify="end" className="mt-8">
              <Button>Comenzar</Button>
            </CardFooter>
          </Card>

          {/* Card Outline */}
          <Card variant="outline" hover>
            <CardHeader variant="accent">
              <CardTitle size="lg">Card con Borde</CardTitle>
              <CardDescription>
                Variante outline con borde más grueso
              </CardDescription>
            </CardHeader>
            <CardContent spacing="md">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Código de ejemplo:</h4>
                <code className="text-sm text-gray-600 bg-white px-2 py-1 rounded">
                  {`<Card variant="outline" hover>`}
                </code>
              </div>
              <p className="mt-4">
                Perfect para destacar contenido importante sin sombras.
              </p>
            </CardContent>
            <CardFooter variant="default" justify="between">
              <Button variant="outline">Cancelar</Button>
              <Button>Guardar</Button>
            </CardFooter>
          </Card>

        </div>

        {/* Card Ghost */}
        <Card variant="ghost" className="border border-dashed border-gray-300">
          <div className="text-center py-12">
            <CardTitle size="lg" className="text-gray-600">Card Transparente</CardTitle>
            <CardDescription className="mt-2 max-w-md mx-auto">
              Este card no tiene fondo ni sombra, ideal para placeholders o contenido minimalista
            </CardDescription>
            <Button variant="outline" className="mt-6">
              Agregar Contenido
            </Button>
          </div>
        </Card>

      </div>
    </div>
  );
}
