// import { useState } from 'react'
import './App.css'
import './index.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

function App() {
  return (
    <>
     <div className="bg-[url('/assets/bg.png')]">

      <Navigation/>
      <Hero/>

     </div>
    </>
  )
}

export default App
