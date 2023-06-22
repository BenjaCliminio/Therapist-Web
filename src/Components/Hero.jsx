import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div id="inicio">
     <div className='flex justify-center text-4xl font-bold font-mono mt-5'>
      <h1 className='xl:text-5xl mt-10 text-white'>TO Catalina Climiño</h1>
     </div>
     <div className='flex justify-center mt-5'>
     <Typed
          className='xl:text-3xl mb-2 mt-2 text-xl text-white font-bold'
            strings={['Mi objetivo es que mi espacio sea un lugar al cual los niñxs lleguen con una sonrisa, y se vayan de la misma forma.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
     </div>
     <div className='flex justify-center mt-10 '>
      <a href='#contact' className='bg-[#DA7C5C] hover:scale-105 duration-300 hover:bg-[#c46f52] rounded-xl text-xl font-bold text-white p-3'>Contacto</a>
     </div>
    </div>
  )
}

export default Hero