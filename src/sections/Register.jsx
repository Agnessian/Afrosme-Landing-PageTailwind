import registerArtisan from '../assets/images/registerArtisan.svg'
import deliver from '../assets/images/deliver.svg'
import verify from '../assets/images/verify.svg'
const Register = () => {
  return (
    <section>
      <div>
        <div class="text-center ">
        <h1 class="text-3xl md:text-3xl font-bold text-gray-800">How it works</h1>
        <p className="mt-5 mb-5 lg:text-xl text-gray-700">Let's help you find your next paying customers privatively</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 sm:gap-5 sm:m-10 lg:m-0 lg:gap-10 lg:p-10 lg:ml-35 lg:mr-35 mt-5'>

        <div className='flex flex-col mb-10 lg:mb-0'>
          <img src={registerArtisan} alt="" width={1000} height={1000}/>
          <div className='text-center text-gray-800'>
          <h1 className='font-bold text-xl m-4'>Register</h1>
          <p className='sm:text-sm lg:text-lg'> 
            Create your profile and list your skills. It's free and only takes a few minutes.
          </p>
          </div>
        </div>
        <div className='flex flex-col mb-10 lg:mb-0'>
      <img src={verify} alt="" width={1000} height={1000}/>
      <div className='text-center text-gray-800'>
          <h1 className='font-bold text-xl m-4'>Get Verified</h1>
          <p className='sm:text-sm lg:text-lg'> 
            Our team will review your profile to ensure you meet our standards of quality and reliability.
          </p>
          </div>
        </div>
        <div className='flex flex-col mb-10 lg:mb-0'>
      <img src={deliver} alt="" width={1000} height={1000}/>
      <div className='text-center text-gray-800'>
          <h1 className='font-bold text-xl m-4'>Get Matched and Deliver Service</h1>
          <p className='sm:text-sm lg:text-lg'> 
            Get matched and receive bookings from customers who are looking for specific expertise.
          </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <button class="p-4 bg-teal-400 text-white rounded-lg hover:bg-blue-700 transition text-lg justify-center">Register as Artisan</button>
      </div>
      </div>
    </section>
  )
}

export default Register