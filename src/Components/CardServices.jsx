import React from 'react'

function CardServices() {
  return (
    <div className='text-white xl:flex justify-between xl:mt-10'>
     <div className='bg-[#DA7C5C]  xl:ml-14 hover:scale-105 duration-300 p-3 w-52 h-[390px] shadow-2xl rounded-2xl ml-36 mt-10'>
      <h4 className='font-bold text-lg'>#1<br/>Desarrollo de habilidades básicas</h4>
      <p className='font-bold'>Trabajaré contigo para desarrollar y fortalecer tus habilidades básicas. Desde vestirse y comer hasta mantener una rutina diaria, juntos abordaremos cada desafío, adaptando las actividades a tus necesidades y capacidades individuales.</p>
     </div>

     <div className='bg-[#DA7C5C] xl:mr-5 hover:scale-105 duration-300 p-3 w-52 h-[390px] shadow-2xl rounded-2xl ml-36 mt-10'>
      <h4 className='font-bold text-lg'>#2<br/>Mejora del desempeño académico</h4>
      <p className='font-bold'>La Terapia Ocupacional puede marcar una gran diferencia en tu desempeño académico. Trabajando con técnicas de organización, planificación y manejo del tiempo para ayudarte a enfrentar eficazmente las demandas del estudio.</p>
     </div>

     <div className='bg-[#DA7C5C] xl:mr-14 hover:scale-105 duration-300 p-3 w-52 h-[390px] shadow-2xl rounded-2xl ml-36 mt-10'>
      <h4 className='font-bold text-lg'>#3<br/>Promoción del desarrollo infantil</h4>
      <p className='font-bold'>La Terapia Ocupacional puede ser de gran beneficio para el desarrollo integral del niñx. Trabajaremos juntos para fomentar habilidades motoras finas y gruesas, estimulando la coordinación y el equilibrio.</p>
     </div>
    </div>
  )
}

export default CardServices