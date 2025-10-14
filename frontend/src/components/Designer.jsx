import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const Designer = ({ template }) => {
    const canvasRef = useRef(null);
    const fabricCanvas = useRef(null);

    // Estado para guardar las referencias a las zonas clickables
    const [canvasObjects, setCanvasObjects] = useState({});

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current, {
            width: 600,
            height: 600,
            backgroundColor: '#f0f0f0',
        });
        fabricCanvas.current = canvas;

        // Limpiar el lienzo al desmontar
        return () => {
            canvas.dispose();
        };
    }, []);

    // Efecto para cargar la imagen base y las zonas personalizables
    useEffect(() => {
        if (template && fabricCanvas.current) {
            const canvas = fabricCanvas.current;
            canvas.clear(); // Limpiar lienzo anterior

            // 1. Cargar imagen base del producto
            fabric.Image.fromURL(template.baseImageUrl, (img) => {
                img.scaleToWidth(canvas.width);
                img.set({ selectable: false, evented: false }); // Hacerla no interactiva
                canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
            });

            // 2. Cargar las zonas personalizables (SVG paths)
            const newObjects = {};
            template.customizableAreas.forEach(area => {
                const path = new fabric.Path(area.svgPath, {
                    left: 150, // Posición de ejemplo
                    top: 150,
                    fill: area.defaultColor,
                    stroke: 'black',
                    strokeWidth: 1,
                    data: { name: area.name } // Guardar nombre en los datos del objeto
                });

                path.on('mousedown', () => {
                    console.log(`Clicked on: ${area.name}`);
                    // Aquí se podría abrir un selector de color
                });

                newObjects[area.name] = path;
                canvas.add(path);
            });
            setCanvasObjects(newObjects);
            canvas.renderAll();
        }
    }, [template]);

    // Función para cambiar el color de una zona
    const changeObjectColor = (areaName, color) => {
        if (canvasObjects[areaName]) {
            canvasObjects[areaName].set('fill', color);
            fabricCanvas.current.renderAll();
        }
    };

    // Pasar esta función al componente padre o a la Toolbar
    // Ejemplo de cómo se podría usar desde fuera:
    // window.changeColor = changeObjectColor;

    return (
        <div className="w-full h-full flex justify-center items-center">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Designer;
