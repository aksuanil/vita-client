import React from 'react'
import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Footer from '../components/sections/Footer'
import Faq from '../components/sections/Faq'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Faq />
    </>
  )
}
