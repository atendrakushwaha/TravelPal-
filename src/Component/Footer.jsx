import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        
        {/* About TravelPal */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">About TravelPal</h2>
          <p className="text-gray-400 mt-2">
            TravelPal is your trusted companion for exploring destinations around the world. Discover, plan, and document your journeys with ease.
          </p>
        </div>
        
        {/* Contact Us */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="text-gray-400 mt-2">
            Have questions? Reach out to us at <a href="mailto:contact@travelpal.com" className="text-blue-400 hover:text-blue-500">contact@travelpal.com</a>
          </p>
        </div>
        
        {/* Social Media Links */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-white">Follow Us</h2>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://facebook.com" aria-label="Facebook" className="text-blue-500 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-blue-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-pink-500 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
