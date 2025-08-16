import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import Help from './pages/Help'

function App() {

  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/contact-me' element={<ContactPage />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
