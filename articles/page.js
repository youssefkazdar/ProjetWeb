"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Articles = () => {
  const [option, setOption] = useState('homme'); 

  const toggleOption = () => {
    setOption(option === 'homme' ? 'femme' : 'homme'); 
  };

  return (
    <div className="flex flex-col items-center">
      <div style={{ display: 'flex', gap: '10px' }}>
  <button className="mt-4 mb-4 bg-gray-500 text-white py-2 px-4 rounded-lg" onClick={toggleOption}>
    Show {option === 'homme' ? 'femme' : 'homme'}
  </button>
  <button className="mt-4 mb-4 bg-gray-500 text-white py-2 px-4 rounded-lg">
    <Link href="/ajouter-article" className="text-white">Ajouter Article</Link>
  </button>
  <button className="mt-4 mb-4 bg-gray-500 text-white py-2 px-4 rounded-lg">
    <Link href="/ajouter-article" className="text-white">Supprimer Article</Link>
  </button>
</div>

      
      
      <div className="grid lg:grid-cols-3 gap-4 justify-center">
        {[...Array(1)].map((_, index) => (
          <div key={index} className="ml-4 mb-2 border rounded-2xl w-full max-w-64 shadow-lg bg-[#b0b9c5] text-black text-center">
            <h2 className="font-bold font-sans">Nike Air Force</h2>
            <div className="px-4 py-1">
              <img src="/air.jpg" alt="Nike Air Force" className="rounded-lg object-cover h-64 w-full" />
              
            </div>
            <span>PRICE = 100DT</span>
            <button className="rounded-2xl py-1 px-6 bg-[#31353a] text-white mt-4 mb-4 mx-auto block">Buy</button>
          </div>
        ))}
         {[...Array(1)].map((_, index) => (
          <div key={index} className="ml-4 mb-2 border rounded-2xl w-full max-w-64 shadow-lg bg-[#b0b9c5] text-black text-center">
            <h2 className="font-bold font-sans">air max</h2>
            <div className="px-4 py-1">
              <img src="/max.jpg" alt="Nike Air Force" className="rounded-lg object-cover h-64 w-full" />
            </div>
            <span>PRICE = 100DT</span>
            <button className="rounded-2xl py-1 px-6 bg-[#31353a] text-white mt-4 mb-4 mx-auto block">Buy</button>
          </div>
        ))}
         {[...Array(1)].map((_, index) => (
          <div key={index} className="ml-4 mb-2 border rounded-2xl w-full max-w-64 shadow-lg bg-[#b0b9c5] text-black text-center">
            <h2 className="font-bold font-sans">Nike Panda</h2>
            <div className="px-4 py-1">
              <img src="/panda.jpg" alt="Nike Air Force" className="rounded-lg object-cover h-64 w-full" />
            </div>
            <span>PRICE = 100DT</span>
            <button className="rounded-2xl py-1 px-6 bg-[#31353a] text-white mt-4 mb-4 mx-auto block">Buy</button>
          </div>
        ))}
         {[...Array(1)].map((_, index) => (
          <div key={index} className="ml-4 mb-2 border rounded-2xl w-full max-w-64 shadow-lg bg-[#b0b9c5] text-black text-center">
            <h2 className="font-bold font-sans">T-shirt</h2>
            <div className="px-4 py-1">
              <img src="/shirt.jpg" alt="Nike Air Force" className="rounded-lg object-cover h-64 w-full" />
            </div>
            <span>PRICE = 40DT</span>
            <button className="rounded-2xl py-1 px-6 bg-[#31353a] text-white mt-4 mb-4 mx-auto block">Buy</button>
          </div>
        ))}
        {[...Array(1)].map((_, index) => (
          <div key={index} className="ml-4 mb-2 border rounded-2xl w-full max-w-64 shadow-lg bg-[#b0b9c5] text-black text-center">
            <h2 className="font-bold font-sans">T-shirt</h2>
            <div className="px-4 py-1">
              <img src="/aa.jpg" alt="Nike Air Force" className="rounded-lg object-cover h-64 w-full" />
            </div>
            <span>PRICE = 40DT</span>
            <button className="rounded-2xl py-1 px-6 bg-[#31353a] text-white mt-4 mb-4 mx-auto block">Buy</button>
          </div>
        ))}
         {[...Array(1)].map((_, index) => (
          <div key={index} className="ml-4 mb-2 border rounded-2xl w-full max-w-64 shadow-lg bg-[#b0b9c5] text-black text-center">
            <h2 className="font-bold font-sans">Nike TN</h2>
            <div className="px-4 py-1">
              <img src="/tt.jpg" alt="Nike Air Force" className="rounded-lg object-cover h-64 w-full" />
            </div>
            <span>PRICE = 40DT</span>
            <button className="rounded-2xl py-1 px-6 bg-[#31353a] text-white mt-4 mb-4 mx-auto block">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;

