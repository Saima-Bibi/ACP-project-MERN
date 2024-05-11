import React from 'react'
import list from '../list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';

export default function Course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    <div className="  items-center justify-center text-center">

      <h1 className=" mt-24 text-2xl md:text-4xl">
        We're delighted to have you{" "}
        <span className="text-blue-500">Here :) </span>
        </h1>
    <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim pellentesque pretium. Etiam posuere ullamcorper sapien id lobortis. Fusce blandit mi sed dui blandit, et sodales velit elementum. Suspendisse finibus, nulla quis posuere tempus, nisl urna efficitur purus, in luctus sapien neque ac odio. Nulla dapibus purus diam, bibendum convallis risus efficitur eu. Mauris aliquam nisi non luctus sodales. Phasellus scelerisque dapibus</p>

    <Link to="/">
    <button className=" mt-6 bg-blue-500 border-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-400 duration-300">Back</button>
    </Link>

    </div>
    <div className=" mt-12 grid grid-cols-1 md:grid-cols-4">
      {

      list.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))

    }
    </div>
      </div>
    </>
  );
}
