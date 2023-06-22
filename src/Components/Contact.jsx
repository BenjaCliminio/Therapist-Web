import React from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('tocatalinacliminio', 'template_smxvtzk', e.target, 'X_zlVUwRvgn3XDyu6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div id="contact">
      <div  className='flex justify-center mt-10 mb-5'>
        <h4 className='text-4xl xl:mt-10 text-white font-bold'>Contacto</h4>
      </div>
      <div className='w-full h-[430px] rounded-3xl bg-[whitesmoke]'>
        <div className='mb-14'>
          <p className='xl:flex justify-center  p-3 font-bold text-black text-lg'>Si te interesaría que tu hijx concurra a una sesión de Terapia Ocupacional no dudes en contactarme!!</p>
          <AiOutlinePhone size={30} className='ml-2 text-black xl:ml-[535px]' /><p className='text-black xl:mr-16 xl:flex justify-center font-bold text-xl ml-12 -mt-7'> +54 9 2325 41-7229</p>
          <AiOutlineMail size={30} className='mt-4 ml-2 text-black xl:ml-[535px]'/><p className='text-black xl:mr-16 xl:ml-40 xl:flex justify-center font-bold text-xl ml-12 -mt-8'>to.catalinacliminio@gmail.com</p>
        </div>
        <div>
          <form className="flex flex-col gap-5 w-[85%] ml-[4.5vw]  xl:-mt-10 xl:ml-24 items-center" onSubmit={handleSubmit}>
            <input type="text" name="user_email" placeholder="Tu email" className="bg-[#DA7C5C] hover:scale-105 duration-300 xl:ml-10 xl:w-80 text-white placeholder-white px-3 py-2 rounded-[50px] w-full" />
            <textarea name="message" placeholder="Tu mensaje" className="bg-[#DA7C5C] hover:scale-105 duration-300 xl:ml-10 xl:w-80 text-white placeholder-white px-3 py-2 rounded-[10px] h-[10vw] w-full"></textarea>
            <input type="submit" className="bg-[#DA7C5C] hover:scale-105 duration-300 xl:ml-10 xl:w-28 w-[40%] px-3 py-2 rounded-[50px] text-white font-bold text-xl hover:bg-black hover:text-white transition-all cursor-pointer" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;