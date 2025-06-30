'use client';
import React from "react";
import Card from "./Card";

const Tours = ({ tour, removeTourHandler }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-8 max-w-[1650px] mx-auto">
      {tour.map((t) => (
        <Card key={t.id} {...t} removeTourHandler={removeTourHandler} />
      ))}
    </div>
  );
};

export default Tours;
