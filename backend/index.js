import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'marvel123',
    database: 'tiendita'
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello from backend")
})

app.get("/productos", (req, res) => {
    const q = "select * from producto"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/productos", (req, res) => {
    const q = "insert into producto (`nombre_producto`, `precio_producto`, `cantidad`) values (?)"
    const values = [
        req.body.nombre_producto,
        req.body.precio_producto,
        req.body.cantidad,
    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Producto creado")
    })
})

app.delete("/productos/:id_producto", (req, res) => {
    const productoId = req.params.id_producto;
    const q = "delete from producto where id_producto = ?";
    db.query(q, [productoId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Producto eliminado");
    });
});

app.put("/productos/:id_producto", (req, res) => {
    const productoId = req.params.id_producto;
    const q = "update producto set `nombre_producto` = ?, `precio_producto` = ?, `cantidad` = ? where id_producto = ?";
    const values = [
        req.body.nombre_producto,
        req.body.precio_producto,
        req.body.cantidad,
    ]
    db.query(q, [...values, productoId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Producto actualizado");
    });
});

app.listen(8800, () => {
    console.log('Server is running on port 8800');
})