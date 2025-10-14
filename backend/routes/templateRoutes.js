const express = require('express');
const router = express.Router();

// Importar el controlador (se creará a continuación)
const templateController = require('../controllers/templateController');

// Definir las rutas
// @route   GET api/templates
// @desc    Obtener todas las plantillas de productos
// @access  Public
router.get('/', templateController.getTemplates);

// @route   GET api/templates/:id
// @desc    Obtener una plantilla por ID
// @access  Public
router.get('/:id', templateController.getTemplateById);

// @route   POST api/templates
// @desc    Crear una nueva plantilla (para el admin)
// @access  Private
// router.post('/', template-controller.createTemplate); // Ejemplo para futuro

module.exports = router;
