import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-left py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between px-6">
        <div className="flex-auto mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/our-products" className="hover:underline">Our Products</a></li>
            <li><a href="/how-it-works" className="hover:underline">How It Works</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li> 
          </ul>
        </div>

        <div className="flex-auto mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <ul className="space-y-3">
            <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
            <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
          </ul>
        </div>

        <div className="flex-auto mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Shop all</h3>
          <ul className="space-y-3">
            <li><a href="/shop" className="hover:underline">View All Products</a></li>
            <li><a href="/screen-protectors" className="hover:underline">Screen Protectors</a></li>
            <li><a href="/phone-cases" className="hover:underline">Phone Cases</a></li>
          </ul>
        </div>
      </div>

      <div className="py-6 w-full mt-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <ul className="flex justify-center space-x-6 mb-4">
            <li><a href="/cookies" className="hover:underline">Cookies</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          </ul>
          <p className="text-center text-sm">© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
