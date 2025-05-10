import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Agregar.css'

export const Agregar = () => {
    const [producto, setProducto] = useState({
        nombre_producto: '',
        precio_producto: '',
        cantidad: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8800/productos', producto)
            navigate('/')
        } catch (error) {
            console.error('Error:', error)
        }
    }

    console.log(producto)

    return (
        <div>
            <h1>Agrega un nuevo producto a tu tiendita</h1>
            <div className="agregarCtn">
                <input type="text" placeholder='Nombre del producto' onChange={handleChange} name='nombre_producto' />
                <input type="number" step="0.01" placeholder='Precio del producto' onChange={handleChange} name='precio_producto' />
                <input type="number" placeholder='Cantidad del producto' onChange={handleChange} name='cantidad' />
                <button className='agregarBtn' onClick={handleClick}>Agregar producto</button>
            </div>
        </div>
    )
}