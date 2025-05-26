import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Bg_img from './Components/Bg_img/Bg_img'
import Team from './Components/Team/Team'
import Our_work from './Components/Our_work/Our_work'
import Pricing from './Components/Pricing/Pricing'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <Bg_img/>
   <Team/>
   <Our_work/>
   <Pricing/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
