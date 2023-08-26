import React, { useState } from 'react';

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-40 bg-gray-300 hover:bg-gray-400 transition duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button className="bg-blue-500 text-white p-2 mx-2 rounded-md">Botão 1</button>
        <button className="bg-red-500 text-white p-2 mx-2 rounded-md">Botão 2</button>
      </div>
    </div>
  );
};

export default Card;