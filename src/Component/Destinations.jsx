import React from 'react'
const FeaturedDestinations = () => {
    const destinations = [
      {
        imgSrc: 'https://th.bing.com/th/id/OIP.01hEWCGFU5ah1ujAUoSQzAHaDU?w=313&h=156&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        title: 'Paris, France',
        description: 'Experience the city of lights and love.',
      },
      {
        imgSrc: 'https://th.bing.com/th?id=OIP.3v98bEy9RDkXBNbVIvOUvgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        title: 'Bali, Indonesia',
        description: 'Relax and rejuvenate on serene beaches.',
      },
      {
        imgSrc: 'https://th.bing.com/th?id=OIP.CRLR4dzDQ7W9vDNZmqWEzgHaEm&w=317&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        title: 'New York, USA',
        description: 'The city that never sleeps awaits you.',
      },
      
    ];
  
    return (
      <section className="py-20 bg-gray-50 text-center" id="destinations">
        <h2 className="text-3xl font-semibold mb-12">Featured Destinations</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg max-w-xs">
              <img src={destination.imgSrc} alt={destination.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2">Explore</button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">Plan Trip</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };


  const Testimonials = () => {
    const testimonials = [
      {
        imgSrc: 'https://th.bing.com/th/id/OIP.pqALRjk_n2GexkEjq_smmgHaD4?w=345&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        quote: "TravelPal made planning my trip so easy and enjoyable!",
        name: 'Emma J.',
      },
      {
        imgSrc: 'https://th.bing.com/th/id/OIP.PCRpdYuzjS52MLaDAJYUaQHaFT?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        quote: "I love being able to document my adventures!",
        name: 'Liam S.',
      },
      {
        imgSrc: 'https://th.bing.com/th/id/OIP._v-eiGR1tj8EM-LWVS85sgHaE7?w=275&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        quote: "A wonderful tool to keep memories alive!",
        name: 'Sophia R.',
      },
    ];
  
    return (
      <section className="bg-gray-100 py-20 text-center" id="testimonials">
        <h2 className="text-3xl font-semibold mb-12">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg max-w-xs p-6">
              <img src={testimonial.imgSrc} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <blockquote className="italic text-gray-700 mb-2">"{testimonial.quote}"</blockquote>
              <p className="font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default function Destinations() {
    return (
      <>
      <FeaturedDestinations/>
      <Testimonials/>
      </>
    )
  }
