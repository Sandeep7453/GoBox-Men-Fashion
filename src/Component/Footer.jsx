import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-10 pb-5 px-6 w-full">
      {/* Newsletter Section */}
      <div className="md:flex  justify-between items-center py-10 border border-gray-800 rounded-2xl md:my-5 md:w-[90%] mx-auto bg-gradient-to-r from-slate-900 to-slate-700 px-10">
        <h1 className="text-3xl font-bold w-[30%] leading-snug hidden md:block">
          Keep Up To Date with GoBoX News
        </h1>

        <div className="flex flex-col mx-6 ">
          <div className="flex gap-4 flex-wrap mb-4 text-gray-300">
            <input
              type="text"
              placeholder="First Name*"
              className="border-b-2 w-40 outline-none focus:outline-none focus:ring-0"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="border-b-2 w-40 outline-none focus:outline-none focus:ring-0"
            />
            <input
              type="email"
              placeholder="E-Mail*"
              className="border-b-2 w-60 outline-none focus:outline-none focus:ring-0"
            />
          </div>
          <p className="text-sm text-gray-500">
            Subscribe to the GoBoX newsletter for updates, articles, and offers. You can unsubscribe at any time.
          </p>
        </div>

        <button className="px-5 py-2 bg-blue-700 hover:bg-blue-500 transition rounded-3xl mt-2">
          Subscribe
        </button>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500">GoBoX</h2>
          <p className="mt-3 text-sm text-gray-300">
            Your destination for premium men’s fashion at unbeatable prices.
            Where style meets comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">🏠 Home</a></li>
            <li><a href="#">🛍️ Shop</a></li>
            <li><a href="#">👕 Categories</a></li>
            <li><a href="#">📞 Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">❓ FAQs</a></li>
            <li><a href="#">🚚 Shipping Info</a></li>
            <li><a href="#">↩️ Return Policy</a></li>
            <li><a href="#">📃 Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">📸 Instagram</a></li>
            <li><a href="#">📘 Facebook</a></li>
            <li><a href="#">🐦 Twitter</a></li>
            <li><a href="#">🎵 TikTok</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2025 GoBoX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
