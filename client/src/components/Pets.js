import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AllPets from './AllPets';
export default function Pets() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <AllPets />
      </div>
      <Footer />
    </>
  )
}
