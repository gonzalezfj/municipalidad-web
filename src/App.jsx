import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
// import Noticias from './pages/Noticias'
// import Tramites from './pages/Tramites'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <Router>
      <Navbar />
      <div className='container mx-auto py-8'>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path='/noticias' element={<Noticias />} /> */}
          {/* <Route path='/tramites' element={<Tramites />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
