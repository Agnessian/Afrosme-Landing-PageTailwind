import calendar from '../assets/icons/calendar.svg'
import lines from '../assets/icons/lines.svg'
import tick from '../assets/icons/tick.svg'
const Bookings = () => {
  return (
    <section>
        <div class="text-center ">
          <h1 class="text-3xl md:text-3xl font-bold text-gray-800">Get the services you need in 3 steps</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-10 ml-35 mr-35 mt-5'>

          <div className='flex flex-col '>
        <img src={calendar} alt="" width={1000} height={1000}/>
          </div>
          <div className='flex flex-col '>
        <img src={tick} alt="" width={1000} height={1000}/>
          </div>
          <div className='flex flex-col '>
        <img src={lines} alt="" width={1000} height={1000}/>
          </div>

        </div>
    </section>
  )
}

export default Bookings