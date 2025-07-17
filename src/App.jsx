import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage/LandingPage'
import AboutHer from './pages/About/AboutHer'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/about' element={<AboutHer />}/>
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
