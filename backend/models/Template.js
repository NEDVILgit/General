const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para un área personalizable del producto
const CustomizableAreaSchema = new Schema({
    name: { type: String, required: true }, // E.g., 'Front Panel', 'Straps'
    svgPath: { type: String, required: true }, // Path data for the SVG part
    defaultColor: { type: String, default: '#FFFFFF' }
});

// Esquema para una plantilla de producto
const TemplateSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Mochila', 'Bolso', 'Bolso Matero'] // Backpack, Bag, Maté Bag
    },
    baseImageUrl: { // URL to the base image of the product
        type: String,
        required: true
    },
    customizableAreas: [CustomizableAreaSchema],
    availableMaterials: {
        type: [String],
        default: ['Lona', 'Cuero', 'Eco-cuero', 'Neoprene']
    },
    availablePatterns: {
        type: [String],
        default: ['Floral', 'Geométrico', 'Deportivo', 'Vintage']
    }
}, { timestamps: true });

module.exports = mongoose.model('Template', TemplateSchema);
