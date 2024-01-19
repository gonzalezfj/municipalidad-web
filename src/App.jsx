import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
// import Noticias from './pages/Noticias'
// import Tramites from './pages/Tramites'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Boletas from './pages/Boletas'
import { Empleo } from './components/Empleo/Empleo'
import { DetalleNoticia } from './components/DetalleNoticias/DetalleNoticia'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/boletas' element={<Boletas />} />
        <Route path='/empleo' element={<Empleo />} />
        <Route path='/detalle' element={<DetalleNoticia />} />
        {/* <Route path='/tramites' element={<Tramites />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
