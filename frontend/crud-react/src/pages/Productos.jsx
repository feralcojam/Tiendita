import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Productos.css'

export const Productos = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8800/productos')
                setProductos(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8800/productos/' + id)
            window.location.reload()
        } catch (error) {
            console.error('Error deleting product:', error)
        }
    }

    return (
        <div>
            <h1>Tiendita</h1>
            <div className="productos">
                {productos.map((producto) => (
                    <div className="producto" key={producto.id_producto}>
                        <h2>{producto.nombre_producto}</h2>
                        <p>Precio: <span>${producto.precio_producto}</span></p>
                        <p>Cantidad: <span>{producto.cantidad}</span></p>
                        <button className='borrar' onClick={() => handleDelete(producto.id_producto)}>Borrar</button>
                        <button className='actualizar'><Link className='actualizarLink' to={`/actualizar/${producto.id_producto}`}>Actualizar</Link></button>
                    </div>
                ))}
                <button className='agregarBtn'><Link className='agregarLink' to='/agregar'>Agregar nuevo producto</Link></button>
            </div>
        </div>
    )
}
