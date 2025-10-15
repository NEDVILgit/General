import React, { useState, useEffect, useRef } from 'react';
import Designer from '../components/Designer';
import Toolbar from '../components/Toolbar';

// Datos de ejemplo de una plantilla de mochila
const mockTemplate = {
    _id: "1",
    name: "Mochila Clásica",
    type: "Mochila",
    baseImageUrl: '', // Se deshabilita la imagen externa para depurar el problema de carga.
    customizableAreas: [
        {
            name: 'Front Panel',
            svgPath: 'M 100 100 L 300 100 L 200 300 z', // Un triángulo de ejemplo
            defaultColor: '#e0e0e0'
        },
        {
            name: 'Side Pocket',
            svgPath: 'M 350 150 L 450 150 L 450 250 L 350 250 z', // Un cuadrado de ejemplo
            defaultColor: '#c0c0c0'
        }
    ],
    availableMaterials: ['Lona', 'Cuero', 'Neoprene'],
    availablePatterns: ['Floral', 'Geométrico']
};


const DesignerPage = () => {
    const [template, setTemplate] = useState(null);
    const designerRef = useRef(null);

    // Simular la carga de datos de la plantilla desde una API
    useEffect(() => {
        // En una aplicación real, harías una llamada a tu backend:
        // fetch('/api/templates/1')
        //   .then(res => res.json())
        //   .then(data => setTemplate(data));
        setTemplate(mockTemplate);
    }, []);

    // Función que la Toolbar llamará para cambiar el color en el Designer
    const handleColorChange = (areaName, color) => {
        // Esta es una limitación del ejemplo actual. La comunicación entre componentes
        // es compleja. La forma correcta de hacer esto sería usando `forwardRef`
        // o un gestor de estado como Redux o Zustand para pasar la función
        // `changeObjectColor` desde el componente Designer a esta página y luego a la Toolbar.
        // Por ahora, simplemente mostraremos un log para demostrar la conexión.
        console.log(`Página: Cambiar color de ${areaName} a ${color}`);
        // En una implementación completa, aquí llamarías a la función del Designer:
        // designerRef.current.changeObjectColor(areaName, color);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow p-4">
                <h1 className="text-3xl font-bold text-center">CustomBag Designer</h1>
            </header>
            <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Columna de la Toolbar (izquierda) */}
                <div className="md:col-span-1">
                    <Toolbar template={template} onColorChange={handleColorChange} />
                </div>

                {/* Columna del Diseñador (derecha) */}
                <div className="md:col-span-2 h-[600px]">
                    {/* Nota: Para que ref funcione, Designer debería estar envuelto en forwardRef */}
                    <Designer ref={designerRef} template={template} />
                </div>
            </main>
        </div>
    );
};

export default DesignerPage;
