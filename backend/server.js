const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos (MongoDB)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/custombag';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('Welcome to the CustomBag Designer API');
});

// Importar rutas
const templateRoutes = require('./routes/templateRoutes');
app.use('/api/templates', templateRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
