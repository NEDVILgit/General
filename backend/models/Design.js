const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para almacenar la personalización de una zona específica
const CustomizationSchema = new Schema({
    areaName: { type: String, required: true },
    color: { type: String },
    pattern: { type: String }, // URL or name of the pattern
    texture: { type: String }  // E.g., 'Cuero', 'Lona'
});

// Esquema para un grabado de texto
const EngravingSchema = new Schema({
    text: { type: String, required: true },
    font: { type: String, default: 'Arial' },
    size: { type: Number, default: 24 },
    color: { type: String, default: '#000000' },
    position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true }
    }
});

// Esquema para un diseño guardado por un usuario
const DesignSchema = new Schema({
    user: { // Could be linked to a User model via ObjectId
        type: String, // For simplicity, using a session ID or a guest ID
        required: true,
        index: true
    },
    template: {
        type: Schema.Types.ObjectId,
        ref: 'Template',
        required: true
    },
    customizations: [CustomizationSchema],
    engravings: [EngravingSchema],
    customImageUrl: { // For user-uploaded logos
        type: String
    },
    finalPrice: { // Price might be calculated based on customizations
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Design', DesignSchema);
