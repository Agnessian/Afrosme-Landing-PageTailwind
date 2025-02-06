import React from 'react'
import hero from '../assets/images/hero.jpeg'
const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="flex justify-start items-start flex-wrap w-full mt-22 gap-16">
         <img src={hero} alt="" className='w-full object-cover absolute'/>
        </div>
        <div className="relative mr-90 flex flex-col justify-center">
        <h5 className="text-2xl body font-extrabold text-white">African in the UK?</h5>
        <h1 className=" text-white mt-10 font-palanquin text-6xl max-sm:text-[48px] max-sm:leading-[58px] font-bold">
          <span className=" pr-140">Connect privately with vetted</span><span className="text-black flex ">artisan</span> in your city  
        </h1>
        <p className="font-montserrat  text-white text-lg mt-6 mb-14 ">Join Afrosme and get matched with customers ready to book your services</p>
        <div className=' flex gap-4 text-md leading-normal font-medium font-montserrat max-lg:text-sm wide:mr-24'>
          <a href='/' className="border bg-white border-white px-7 py-3 rounded-lg hover:bg-gray-200 hover:text-black">Find a service</a>
          
          <a href='/' className="border border-white text-white px-2 py-3 rounded-lg hover:bg-gray-700 hover:text-white">Register as artisan or creative</a>
        </div>
      </div>
      
        
    </section>
  )
}

export default Hero