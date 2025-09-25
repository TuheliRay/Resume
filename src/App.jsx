import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <About />
    <Education />
    <Skills/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
