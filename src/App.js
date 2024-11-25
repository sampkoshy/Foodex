import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card1 from './components/Card1'
import Section from './components/Section'
import Banner from './components/Banner'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div>
      <Navbar/></div>

      <div className='mn-sec'> <Card1/></div>
      <Section/>
      <Banner/>
      <Footer/>
      
      </>
  )
}

export default App