import { useState } from 'react'
import './App.css'
import{
  Hero, Services, Bookings, Contact, Register, Reviews, Footer
} from './sections'
import Nav from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <Services />
      </section>
      <section className='padding-x sm:py-15 mt-10 bg-gray-100'>
        <Bookings />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Register />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App
