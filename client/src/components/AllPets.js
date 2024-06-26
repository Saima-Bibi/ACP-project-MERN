import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function AllPets() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getPet = async ()=>{
      try {
       const res = await axios.get('http://localhost:4001/Pet/getPets');
       console.log(res.data);
       setData(res.data);

      } catch (error) {
        console.log(error);
      }
    
    }
    getPet();
  }, [data])
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
  <div className="  items-center justify-center text-center">
  <br></br>
  <br></br>
    <h1 className=" mt-16 text-2xl md:text-4xl">
      We're delighted to have you{" "}
      <span className="text-sky-500">Here :) </span>
      </h1>
  <p className='mt-12'>At Paws, we believe every pet deserves a loving home. Whether you're looking for a playful puppy, a cuddly kitten, or a loyal senior companion, we connect you with animals in need of a second chance. Explore our wide range of adoptable pets and discover how you can make a difference in their lives—and yours. Join our community of pet lovers and start your adoption journey today!</p>

  <Link to="/">
  <button className=" mt-6 bg-sky-500 border-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 duration-300">Back</button>
  </Link>

  </div>
  <div className=" mt-12 grid grid-cols-1 md:grid-cols-3">
    {

    data.pet?.map((item)=>(
      <Cards key={item._id} item={item}/>
    ))

  }
  </div>
    </div>
  </>
  )
}
