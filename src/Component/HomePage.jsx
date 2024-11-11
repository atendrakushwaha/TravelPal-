import React, { useState } from 'react';

const Hero = ({ onStartPlanning }) => {
  return (
    <section
      className="hero bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.Yanct69KS9jyJdSm9Hu_nwHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')` }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore, Plan, Remember</h1>
        <button
          onClick={onStartPlanning}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg mt-6"
        >
          Start Planning
        </button>
      </div>
    </section>
  );
};

const TravelBooking = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.Yanct69KS9jyJdSm9Hu_nwHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')` }}
    >
      <main className="Main flex flex-col items-center py-8 w-full max-w-[900px]">
        <div className="bg-white border-2 border-blue-500 rounded-lg flex justify-between items-center p-4 w-full">
          <input 
            type="text" 
            placeholder="Where are you going?" 
            className="Search-input border border-gray-300 rounded-md p-2 mr-2 flex-1"
          />
          <input 
            type="date" 
            placeholder="Check-in Date" 
            className="border border-gray-300 rounded-md p-2 mr-2 flex-1"
          />
          <input 
            type="date" 
            placeholder="Check-out Date" 
            className="border border-gray-300 rounded-md p-2 mr-2 flex-1"
          />
          <select className="border border-gray-300 rounded-md p-2 mr-2 flex-1">
            <option>2 adults · 0 children · 1 room</option>
          </select>
          <button className="bg-blue-500 text-white rounded-md p-2 px-4 hover:bg-blue-700">
            Search
          </button>
        </div>
        <div className="flex items-center mt-4">
          <input type="checkbox" id="flights" className="mr-2" />
          <label className="text-white" htmlFor="flights">I'm looking for flights</label>
        </div>
      </main>
    </div>
  );
}

const HomePage = () => {
  const [showTravelBooking, setShowTravelBooking] = useState(false);

  const handleStartPlanning = () => {
    setShowTravelBooking(true);
  };

  return (
    <div>
      {showTravelBooking ? <TravelBooking /> : <Hero onStartPlanning={handleStartPlanning} />}
    </div>
  );
};

export default HomePage;
