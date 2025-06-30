'use client';
import Image from "next/image";
import React, { useState } from "react";

const Card = ({ id, name, info, price, image, removeTourHandler }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}...`;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-90 flex flex-col border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={image}
        alt={name}
        width={400}
        height={250}
        className="object-cover w-full h-64"
      />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <span className="text-green-600 font-bold text-lg">${price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3">
          {description}
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-blue-500 ml-1 hover:underline"
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>

        <button
          onClick={() => removeTourHandler(id)}
          className="mt-auto bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition duration-200"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Card;
