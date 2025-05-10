import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Productos } from './pages/Productos'
import { Agregar } from './pages/Agregar'
import { Actualizar } from './pages/Actualizar'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Productos />} />
					<Route path='/agregar' element={<Agregar />} />
					<Route path='/actualizar/:id_producto' element={<Actualizar />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
