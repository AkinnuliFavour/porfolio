import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Projects from './views/Projects'
import Contact from './views/Contact'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
