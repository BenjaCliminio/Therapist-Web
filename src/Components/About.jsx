import React from 'react'
import TOIMAGE from '../assets/TOIMAGE.jpg'

function About() {
  return (
    <div id="about" className='w-full xl:mt-72 h-[630px] mt-28 rounded-3xl bg-[whitesmoke]'>
     <div className='flex justify-center'>
      <img className='xl:mr-96 xl:mt-28 xl:h-96 xl:w-96 xl:-ml-52 w-64 hover:scale-105 duration-300 rounded-full mt-5 mb-5 h-64' src={TOIMAGE} />
     </div>
     <div className='xl:ml-96 -mr-52 xl:-mt-[360px] flex justify-center'>
      <p className='w-96 mr-44 text-xl font-bold text-black'>Mi Nombre es Maria Catalina Climiño, Licenciada en Terapia Ocupacional egresada de la Universidad Nacional de San Martin en 2021.<br/>Trabajo acompañando a infancias y sus familiares, cuando hay alguna dificultad en el desempeño ocupacional que repecute en el desarrollo.<br/>En mi espacio, se prioriza el juego, el disfrute y la comunicacion, tanto con el niñx como con las familias</p>
     </div>
    </div>
  )
}

export default About