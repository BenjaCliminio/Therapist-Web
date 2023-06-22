import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.pageYOffset > 0) {
        navbar.classList.add('navbar-fixed');
      } else {
        navbar.classList.remove('navbar-fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="navbar" className={`flex justify-between items-center w-full shadow-xl h-24 mx-auto px-4 ${nav ? 'navbar-open' : ''}`}>
        <h1 className='w-full text-3xl font-bold text-[#DA7C5C]'>Catalina Climiño</h1>
        <ul className='hidden md:flex'>
          <li className='p-4 text-white font-bold text-lg hover:border-b-4 border-[#DA7C5C]'>
            <a href="#inicio" onClick={handleLinkClick}>Inicio</a>
          </li>
          <li className='p-4 text-white font-bold text-lg hover:border-b-4 border-[#DA7C5C]'>
            <a href="#about" onClick={handleLinkClick}>About</a>
          </li>
          <li className='p-4 text-white font-bold text-lg hover:border-b-4 border-[#DA7C5C]'>
            <a href="#services" onClick={handleLinkClick}>Servicios</a>
          </li>
          <li className='p-4 text-white font-bold text-lg hover:border-b-4 border-[#DA7C5C]'>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>

        <div className='text-black'>
          <div onClick={handleNav} className='block md:hidden text-white mt-3 mr-3'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>

          <ul className={nav ? 'fixed left-0 top-0 w-full h-full bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className='flex justify-center mt-5 text-3xl font-bold text-[#DA7C5C]'>Catalina Climiño</h1>
            <li className='flex justify-center ml-10 mr-10 border-b-2 border-[#202020]'>
              <a className='text-xl font-bold mt-3 text-white hover:text-[#DA7C5C]' href='#inicio' onClick={handleLinkClick}>Inicio</a>
            </li>
            <li className='flex justify-center ml-10 mr-10 border-b-2 border-[#202020]'>
              <a className='text-xl font-bold mt-3 text-white hover:text-[#DA7C5C]' href='#about' onClick={handleLinkClick}>Sobre Mi</a>
            </li>
            <li className='flex justify-center ml-10 mr-10 border-b-2 border-[#202020]'>
              <a className='text-xl font-bold mt-3 text-white hover:text-[#DA7C5C]' href='#services' onClick={handleLinkClick}>Servicios</a>
            </li>
            <li className='flex justify-center ml-10 mr-10 border-b-2 border-[#202020]'>
              <a className='text-xl font-bold mt-3 text-white hover:text-[#DA7C5C]' href='#contact' onClick={handleLinkClick}>Contacto</a>
            </li>
            <p className='flex justify-center mt-6 text-gray-300'>2023 &copy; TO | CATALINA CLIMIÑO</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;