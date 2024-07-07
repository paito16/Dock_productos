const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://admin:admin@data3apps.owzveqi.mongodb.net/elysium?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const ProductoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number
});

const Producto = mongoose.model('Producto', ProductoSchema);

app.post('/productos', (req, res) => {
    const producto = new Producto(req.body);
    producto.save().then(() => res.status(201).send(producto));
});

app.get('/productos', (req, res) => {
    Producto.find().then(productos => res.send(productos));
});

app.listen(3002, () => console.log('App2 listening on port 3002'));
