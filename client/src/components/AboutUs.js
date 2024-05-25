import React from 'react'

export default function AboutUs() {
  return (
    <>
      <section className="  py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mt-10">
        <h1 className=" text-black font-semibold   text-2xl">About Us</h1>
        <p className="mt-4 text-xl leading-8 font-semibold   sm:text-2xl">
          Welcome to <span className='text-sky-500'>Paws Adoption Center!!!</span> 
        </p>
        <p className="mt-4 max-w-2xl text-md text-sky-600 lg:mx-auto">
          Your trusted partner in pet adoption and care.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              At Paws Adoption Center, our mission is to find loving homes for every pet. We believe every animal deserves a chance at a happy life. We work tirelessly to rescue, rehabilitate, and rehome pets in need.
            </p>
          </div>
          <div className="md:w-1/2">
            <img className="w-full rounded-lg shadow-lg" src="https://via.placeholder.com/600x400" alt="Pet Adoption"/>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-6 space-y-6 md:space-y-0">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">
              Why Adopt?
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Adopting a pet not only gives an animal a loving home but also frees up resources to help more animals in need. When you adopt, you're not just saving one life, but two: the pet you bring home and the one that takes its place.
            </p>
          </div>
          <div className="md:w-1/2">
            <img className="w-full rounded-lg shadow-lg" src="https://via.placeholder.com/600x400" alt="Happy Pet"/>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}
