"use client";
import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

export default function Home() {
  const [tour, setTour] = useState(data);

  function removeTourHandler(id) {
    const newTour = tour.filter((t) => t.id !== id);
    setTour(newTour);
  }

  if (tour.length === 0) {
    return (
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">No Tours Left</h2>
        <button
          onClick={() => setTour(data)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
        >
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-4xl font-bold text-center mb-4 group relative">
        Planning Project
        <span className="block h-1 w-16 bg-blue-500 mx-auto mt-2 transition-all group-hover:w-24"></span>
      </h2>

      <p className="text-center text-gray-500 text-lg mb-10">
        Discover the best tours and adventures around the world.
      </p>
      <>
      <Tours tour={tour} removeTourHandler={removeTourHandler} />
      </>
      
    </main>
  );
}
