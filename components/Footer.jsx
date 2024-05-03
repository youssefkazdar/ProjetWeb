import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
         <a href='/contact'>
         <h2 className="text-white">Contact Information</h2>
          
          </a> 
          <p className="text-gray-300">Email: youssefkazdar51@gmail.com</p>
          <p className="text-gray-300">Phone: 95560058</p>
        </div>
        <div>
          <h2 className="text-white">Social Media</h2>
          <ul>
            <li className="text-gray-300">Facebook</li>
            <li className="text-gray-300">Twitter</li>
            <li className="text-gray-300">Instagram</li>
          </ul>
        </div>
      </div>
      <div className="text-white flex justify-center items-center">
        © Copyright 2024 Kazdar
      </div>
    </footer>
  );
}

export default Footer;

