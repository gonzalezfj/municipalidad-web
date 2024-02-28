// Dependencies
import { BrowserRouter as Router } from 'react-router-dom'

// Routes
import { ApplicationRoutes, TransitoRoutes, ObrasRoutes, RentasRoutes, AmbienteRoutes, GeneralRoutes, IntendenciaRoute, NewsRoutes } from '@routes'

// All page components
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

// Style
import '@/App.css'
import ComercioRoutes from './routes/ComercioRoutes/ComercioRoutes'

function App () {
  return (
    <Router>
      <Navbar />
      <ApplicationRoutes />
      <TransitoRoutes />
      <ObrasRoutes />
      <RentasRoutes />
      <AmbienteRoutes />
      <GeneralRoutes />
      <IntendenciaRoute />
      <ComercioRoutes />
      <NewsRoutes />
      <Footer />
    </Router>
  )
}

export default App
