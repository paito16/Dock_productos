const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());  // Habilita CORS

const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number
});

const Producto = mongoose.model('Producto', productoSchema);

mongoose.connect('mongodb+srv://admin:admin@data3apps.owzveqi.mongodb.net/Data3apps?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/productos', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

app.listen(3002, () => {
    console.log('App de Productos escuchando en el puerto 3002');
});
