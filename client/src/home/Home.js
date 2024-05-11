import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import TopSellingBooks from '../components/TopSellingBooks'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
<Navbar></Navbar>
<HeroSection></HeroSection>
<TopSellingBooks></TopSellingBooks>
<Footer></Footer>
    </>
  )
}
