import React from 'react'
import Buyers from './Components/Buyers/Buyers'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Properties from './Components/Properties/Properties'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Properties/>
      <Buyers/>
      <Footer/>
    </div>
  )
}

export default App
