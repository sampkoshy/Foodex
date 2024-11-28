import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card1 from './components/Card1'
import Section from './components/Section'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FoodSection from './other/FoodSection'
import Midbanner from './other/Midbanner'
import Ban1 from './components/Ban1'
import Ban2 from './other/Ban2'


const App = () => {
  return (
    <>
    
      <Navbar/>

       <Card1/>
      <Ban2/>
      <Section/>
      <Ban1/>
      
      <Midbanner/>
      <FoodSection/>
      <Banner/>

      <Footer/>
     
      </>
  )
}

export default App