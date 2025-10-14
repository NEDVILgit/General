import React from 'react';

const Toolbar = ({ template, onColorChange }) => {
    if (!template) return null;

    const handleColorClick = (areaName, color) => {
        if (onColorChange) {
            onColorChange(areaName, color);
        }
    };

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Personaliza tu {template.type}</h2>

            {/* Opciones de color para cada zona */}
            {template.customizableAreas.map(area => (
                <div key={area.name} className="mb-3">
                    <h3 className="text-md font-semibold capitalize mb-2">{area.name}</h3>
                    <div className="flex space-x-2">
                        {/* Botones de colores de ejemplo */}
                        <button onClick={() => handleColorClick(area.name, '#ff0000')} className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-200 hover:border-gray-400"></button>
                        <button onClick={() => handleColorClick(area.name, '#00ff00')} className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-200 hover:border-gray-400"></button>
                        <button onClick={() => handleColorClick(area.name, '#0000ff')} className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-200 hover:border-gray-400"></button>
                    </div>
                </div>
            ))}

            {/* Selector de materiales (ejemplo) */}
            <div className="mt-4">
                <h3 className="text-md font-semibold mb-2">Material</h3>
                <select className="w-full p-2 border rounded">
                    {template.availableMaterials.map(material => (
                        <option key={material} value={material}>{material}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Toolbar;
