import { Contacto } from './components/Contacto/Contacto'
import { Error404 } from './components/Error404/Error404'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/redes' element={<h1>Instagram @coder</h1>} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App