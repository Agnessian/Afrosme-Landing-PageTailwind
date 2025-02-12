
import contact from "../assets/images/Contact.jpeg"
const Contact = () => {
  return (
    <section>      
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto m-10">

              <div class="flex justify-center">
                <img src={contact} alt="" className='w-full h-full object-cover'/>
              </div>
              <div clasName="">
                  <h1 className="text-3xl font-bold">
                    Relax!
                    <span className="text-teal-400"> Let your customers find you</span>
                  </h1>
                  <p className="mt-5 mb-5 lg:text-xl text-gray-700 ">Afrosme get you booked easily. We give you a list of customers that needs your service and you choose who to work with. We offer reliable support, and a seamless booking experience for a wide range of needs</p>
                    <button class="p-3 bg-gray-950 text-white py-3 rounded-lg hover:bg-gray-400 transition"><a href="/">Get Started</a>
              </button>
              </div>
            </div>
    </section>
  )
}

export default Contact