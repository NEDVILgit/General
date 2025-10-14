const Template = require('../models/Template');

// Controlador para obtener todas las plantillas
const getTemplates = async (req, res) => {
    try {
        const templates = await Template.find();
        res.json(templates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching templates', error: error.message });
    }
};

// Controlador para obtener una plantilla por su ID
const getTemplateById = async (req, res) => {
    try {
        const template = await Template.findById(req.params.id);
        if (!template) {
            return res.status(404).json({ message: 'Template not found' });
        }
        res.json(template);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching template', error: error.message });
    }
};

// (Futuro) Controlador para crear una plantilla
// const createTemplate = async (req, res) => { ... };

module.exports = {
    getTemplates,
    getTemplateById
    // createTemplate
};
