import axios from 'axios'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Actualizar.css'

export const Actualizar = () => {
    const [producto, setProducto] = useState({
        nombre_producto: '',
        precio_producto: '',
        cantidad: ''
    })

    const navigate = useNavigate()
    const location = useLocation()

    const productoId = location.pathname.split('/')[2]

    console.log(location.pathname.split('/')[2])

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put('http://localhost:8800/productos/' + productoId, producto)
            navigate('/')
        } catch (error) {
            console.error('Error:', error)
        }
    }

    console.log(producto)

    return (
        <div className='actualizarCtn'>
            <h1>Actualiza un producto de tu tiendita</h1>
            <input type="text" placeholder='Nombre del producto' onChange={handleChange} name='nombre_producto' />
            <input type="number" step="0.01" placeholder='Precio del producto' onChange={handleChange} name='precio_producto' />
            <input type="number" placeholder='Cantidad del producto' onChange={handleChange} name='cantidad' />
            <button className='actualizarBtn' onClick={handleClick}>Actualizar producto</button>
        </div>
    )
}