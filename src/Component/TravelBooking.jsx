import React from 'react';

function TravelBooking() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="flex flex-col items-center py-8">
        <div className="bg-white border-2 border-blue-500 rounded-lg flex justify-between items-center p-4 mx-auto w-4/5 max-w-xl">
          <input 
            type="text" 
            placeholder="Where are you going?" 
            className="border border-gray-300 rounded-md p-2 mr-2 flex-1"
          />
          <input 
            type="date" 
            placeholder="Check-in Date" 
            className="border border-gray-300 rounded-md p-2 mr-2 flex-1"
          />
         
          <select className="border border-gray-300 rounded-md p-2 mr-2 flex-1">
            <option>2 adults · 0 children · 1 room</option>
            {/* Add more options as needed */}
          </select>
          <button className="bg-blue-500 text-white rounded-md p-2 px-4 hover:bg-blue-700">
            Search
          </button>
        </div>
        <div className="flex items-center mx-auto w-4/5 max-w-xl mt-4">
          <input type="checkbox" id="flights" className="mr-2" />
          <label htmlFor="flights">I'm looking for flights</label>
        </div>
      </main>
    </div>
  );
}

export default TravelBooking;


