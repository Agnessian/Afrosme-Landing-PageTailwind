import React from 'react'
import {services} from "../Constants"
import service from "../assets/images/service.jpeg"
const Services = () => {
  return (
    <section>
      <div className="flex flex-wrap lg:gap-5 sm:gap-1  justify-between lg:pr-60 lg:pl-60 mb-10 ">
        {services.map((item) => (
          <span className="service-item service-item:hover">
          {item.label}
        </span>
          ))}
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div className=' bg-white p-'>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Find the best artisan that speaks your language</h2>
        <p className='text-gray-700 font-medium'>Let us know how we can help</p>
        <div>
          <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
            <input type="text" name="" id="" placeholder='Post code*' className='form'/>
            <input type="text" name="" id="" placeholder='Phone number*' className='form'/>
            <input type="text" name="" id="" placeholder='Service' className='form'/>
            <input type="text" name="" id="" placeholder='style' className='form'/>
            <textarea type="text" name="" id="" placeholder='Description' className='form md:col-span-2'/>
            <button class="w-full bg-teal-400 text-white py-3 rounded-lg hover:bg-blue-700 transition md:col-span-2">
          Find Service
        </button>
          </form>

        </div>
        </div>
        <div class="flex justify-center">
          <img src={service} alt="" className='w-full h-full object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default Services