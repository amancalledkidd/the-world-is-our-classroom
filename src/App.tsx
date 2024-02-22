import './styles/main.scss'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/blog" element={<Home />} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
