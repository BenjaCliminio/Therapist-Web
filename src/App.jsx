import React from 'react'
import NavBar from './Layouts/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import CardServices from './Components/CardServices'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
     <NavBar />
     <Hero />
     <About />
     <Services />
     <CardServices />
     <Contact />
     <Footer />
    </div>
  )
}

export default App