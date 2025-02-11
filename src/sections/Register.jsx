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

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-10 ml-35 mr-35 mt-5'>

        <div className='flex flex-col '>
      <img src={registerArtisan} alt="" width={1000} height={1000}/>
        </div>
        <div className='flex flex-col '>
      <img src={verify} alt="" width={1000} height={1000}/>
        </div>
        <div className='flex flex-col '>
      <img src={deliver} alt="" width={1000} height={1000}/>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <button class="p-3 bg-sky-400 text-white py-3 rounded-lg hover:bg-blue-700 transition justify-center">Register as Artisan</button>
      </div>
      </div>
    </section>
  )
}

export default Register