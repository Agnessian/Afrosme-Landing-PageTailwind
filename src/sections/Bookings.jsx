import calendar from '../assets/icons/calendar.svg'
import lines from '../assets/icons/lines.svg'
import tick from '../assets/icons/tick.svg'
const Bookings = () => {
  return (
    <section>
        <div class="text-center ">
          <h1 class="text-3xl md:text-3xl font-bold text-gray-800">Get the services you need in 3 steps</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 sm:gap-5 sm:m-10 lg:m-0 lg:gap-10 lg:p-10 lg:ml-35 lg:mr-35 mt-5'>
        
                <div className='flex flex-col mb-10 lg:mb-0 items-center'>
                  <img src={calendar} alt="" width={50} height={50}/>
                  <div className='text-center text-gray-800'>
                  <h1 className='font-bold text-xl m-4'>BOOK A SERVICE</h1>
                  <p className='sm:text-sm lg:text-lg'> 
                    Choose the service you need from our wide range of skilled artisans.
                  </p>
                  </div>
                </div>
                <div className='flex flex-col mb-10 lg:mb-0 items-center'>
              <img src={tick} alt="" width={50} height={50}/>
              <div className='text-center text-gray-800'>
                  <h1 className='font-bold text-xl m-4'>CONFIRM BOOKING</h1>
                  <p className='sm:text-sm lg:text-lg'> 
                    Confirm your booking and complete your registration on your platform.
                  </p>
                  </div>
                </div>
                <div className='flex flex-col mb-10 lg:mb-0 items-center'>
              <img src={lines} alt="" width={50} height={50}/>
              <div className='text-center text-gray-800'>
                  <h1 className='font-bold text-xl m-4'>GET MATCHED</h1>
                  <p className='sm:text-sm lg:text-lg'> 
                    We'll connect you with a verified artisan who meets your specific requirements.
                  </p>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default Bookings