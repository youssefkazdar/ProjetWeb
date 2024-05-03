import React from 'react';
import Image from 'next/image';
import shoe from'../../public/shoe.jpg';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <img src="/shoe_logo.svg" alt="Shoe Logo" className="h-8 mr-4" />
          <h1 className="text-white font-bold italic text-xl">Kazdar</h1>
        </div>
        <ul className="flex space-x-4 text-white">
          <li> <Link rel="stylesheet" className="hover:text-gray-300" href="/"> 🏠︎Home </Link> </li>
          <li> <Link rel="stylesheet" className="hover:text-gray-300" href="/articles"> 🛒 Articles </Link> </li>  
          <li> <Link rel="stylesheet" className="hover:text-gray-300" href="/about">ℹ About </Link> </li>
          <li> <Link rel="stylesheet" className="hover:text-gray-300" href="/login"> 🌐Login </Link> </li>


          
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;




