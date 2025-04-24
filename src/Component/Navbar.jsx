import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NotifyModal from "./NotifyModal";
import { motion } from "framer-motion";
import Login from "./Login.jsx";
import { auth } from "./FireBase.js"; // make sure path is correct
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [showNotification, setShowNotification] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return (
    <motion.nav className="bg-gray-800 text-gray-400 px-6 py-3 fixed top-0 left-0 z-50 w-full">
      <motion.div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-yellow-200 to-yellow-700 text-transparent bg-clip-text">
          GoBoX
        </Link>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-lg">
          <li><Link to="/">Home</Link></li>
          <li className="relative group">
            <span className="cursor-pointer">Category</span>
            <ul className="absolute left-1/2 transform mt-2 -translate-x-1/2 bg-gray-700 text-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm md:text-base min-w-[150px]">
              {[
                 "oversized-tshirt", "printed-tshirt", "hoodie", "denim-jeans",
                "techwear-jackets", "cargo-pants", "casual-wear",
                "sneakers", "accessories"
              ].map((category, index) => (
                <li key={index} className="px-6 py-2 hover:bg-gray-600 whitespace-nowrap">
                  <Link to={`/category/${category}`}>
                    {category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/customerSupport">☎️ Customer Support</Link></li>
          <li><button onClick={() => setShowNotification(true)}>🔔</button></li>
          <li><Link to="/cart" className="flex items-center space-x-2"><ShoppingCartIcon className="h-10 w-10" /></Link></li>
        </ul>

        {/* Right Side (User Info or Login Button) */}
        {user ? (
          <div className="hidden md:block relative group text-white">
            {/* Profile Icon */}
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-yellow-400"
            />

            {/* Dropdown on Hover */}
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="px-4 py-2 border-b text-sm font-semibold">
                {user.displayName}
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex items-center px-4 py-1 border border-gray-500 rounded-lg hover:bg-gray-600 hover:text-gray-200 transition"
            onClick={() => setShowLogin(true)}
          >
            <span>Login</span>
          </motion.button>
        )}

        {/* Hamburger (Mobile) */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <XMarkIcon className="h-8 w-8 text-white" /> : <Bars3Icon className="h-8 w-8 text-white" />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 p-5 mt-3 rounded-lg">
          <ul className="space-y-4 text-center text-lg text-white">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart</Link></li>
            <li><Link to="/support" onClick={() => setMobileMenuOpen(false)}>☎️ Customer Support</Link></li>
            <li><button onClick={() => setShowNotification(true)}>🔔 Notifications</button></li>

            {/* Categories in Mobile Menu */}
            <li className="text-lg font-semibold text-white py-2 hidden">Categories</li>

            {/* Category Toggle */}
            <div className="flex flex-col space-y-3">
              <button className="category-toggle text-white py-2" onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}>
                <span>Browse Categories</span>
              </button>

              {categoryMenuOpen && (
                <div className="space-y-2 bg-gray-800 p-4 rounded-md">
                  {[
                    "casual-wear", "printed-tshirt", "hoodie", "denim-jeans",
                    "techwear-jackets", "oversized-tshirt", "cargo-pants", "sneakers", "accessories"
                  ].map((category, index) => (
                    <Link
                      key={index}
                      to={`/category/${category}`}
                      className="block text-gray-300 hover:text-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* User Profile Section */}
            {user ? (
              <li className="flex flex-col items-center space-y-2">
                <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" />
                <span>{user.displayName}</span>
                <button onClick={handleLogout} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-full px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-700 transition"
                  onClick={() => setShowLogin(true)}
                >
                  Login / Signup
                </motion.button>
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Modals */}
      {showNotification && <NotifyModal onClose={() => setShowNotification(false)} />}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </motion.nav>
  );
}

export default Navbar;
