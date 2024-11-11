import React from 'react';

const TripPlan = () => {
  return (
    <main>
      {/* Plan Header */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-12 text-center">
        <h1 className="text-4xl font-semibold">Plan Your Trip</h1>
        <p className="mt-4 text-lg">Use our itinerary builder to create your perfect trip</p>
      </section>

      {/* Itinerary Builder */}
      <section className="flex flex-col items-center py-5">
        <div className="grid grid-cols-3 gap-5 w-full max-w-6xl">
          <div className="bg-white border border-gray-300 p-4 mb-4">
            <h3 className="text-xl font-semibold">Flight to Paris</h3>
            <p>June 12th, 2024</p>
          </div>
          <div className="bg-white border border-gray-300 p-4 mb-4">
            <h3 className="text-xl font-semibold">Hotel in Rome</h3>
            <p>June 15th, 2024</p>
          </div>
          <div className="bg-white border border-gray-300 p-4 mb-4">
            <h3 className="text-xl font-semibold">Tour of Tokyo</h3>
            <p>June 20th, 2024</p>
          </div>
        </div>
        <button className="bg-gray-800 text-white py-2 px-6 text-lg rounded">Add Activity</button>
      </section>

      {/* Booking Integrations */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Book Your Trip</h2>
        <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
          {/* Flights */}
          <div className="bg-white border border-gray-300 p-4 text-center">
            <h3 className="text-xl font-semibold">Flights</h3>
            <img
              className="mx-auto my-4"
              src="https://th.bing.com/th/id/OIP.8LP36rWzcM3dP_iNtSq3egHaEm?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Flight Icon"
            />
            <button className="bg-gray-800 text-white py-2 px-6 rounded">Book Now</button>
          </div>
          {/* Hotels */}
          <div className="bg-white border border-gray-300 p-4 text-center">
            <h3 className="text-xl font-semibold">Hotels</h3>
            <img
              className="mx-auto my-4"
              src="https://th.bing.com/th/id/OIP.tYtHyRydNDZzIrLu1Wv1mQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Hotel Icon"
            />
            <button className="bg-gray-800 text-white py-2 px-6 rounded">Book Now</button>
          </div>
          {/* Activities */}
          <div className="bg-white border border-gray-300 p-4 text-center">
            <h3 className="text-xl font-semibold">Activities</h3>
            <img className="mx-auto my-4"
            src='data:image/jpeg;base64,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'
            alt="Activity Icon" />
            <button className="bg-gray-800 text-white py-2 px-6 rounded">Book Now</button>
          </div>
        </div>
      </section>

      {/* Trip Summary */}
      <section className="bg-white p-6 border border-gray-300">
        <h2 className="text-3xl font-semibold">Trip Summary</h2>
        <p className="mt-4 text-xl">Total Cost: $5000</p>
        <p className="mt-2 text-xl">Duration: 14 days</p>
        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-gray-800 text-white py-2 px-6 rounded">Save Trip</button>
          <button className="bg-gray-800 text-white py-2 px-6 rounded">Share Trip</button>
        </div>
      </section>
    </main>
  );
};

export default TripPlan;
