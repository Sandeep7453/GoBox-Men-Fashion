import React, { useState } from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [toast, setToast] = useState(null);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleAdd = (item) => {
    addToCart(item);
    setToast(`${item.title} added!`);
    setTimeout(() => setToast(null), 1500);
  };

  const handleRemove = (item) => {
    removeFromCart(item.id);
    setToast(`${item.title} removed!`);
    setTimeout(() => setToast(null), 1500);
  };

  return (
    <div className="pt-24 px-4 md:px-16 pb-40 min-h-screen bg-gray-900 text-white relative">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400 mt-20 text-lg">Your cart is empty.</p>
      ) : (
        <>
          {/* Product List */}
          <div className="flex flex-col gap-4 mb-48">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center bg-gray-850 p-3 rounded-2xl shadow-neumorph hover:shadow-neumorph-hover transition transform hover:scale-[1.02]"
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-24 h-24 object-cover rounded-xl mr-4 border border-gray-700"
                />

                {/* Title & Price */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-semibold text-base md:text-lg">{item.title}</h3>
                  <p className="text-yellow-400 font-bold text-sm md:text-base">₹{item.price * item.quantity}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-gray-800 rounded-full px-2 py-1">
                  <button
                    onClick={() => {
                      if(item.quantity === 1) handleRemove(item);
                      else {
                        removeFromCart(item.id);
                        addToCart({ ...item, quantity: item.quantity - 1 });
                      }
                    }}
                    className="w-8 h-8 flex justify-center items-center bg-red-600 hover:bg-red-700 rounded-full transition font-bold text-white"
                  >-</button>

                  <span className="text-sm md:text-base">{item.quantity}</span>

                  <button
                    onClick={() => handleAdd(item)}
                    className="w-8 h-8 flex justify-center items-center bg-green-600 hover:bg-green-700 rounded-full transition font-bold text-white"
                  >+</button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item)}
                  className="ml-3 text-red-500 hover:text-red-700 text-lg font-semibold"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Panel - Column Layout */}
       <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-96 bg-gray-800/95 backdrop-blur-md p-5 rounded-3xl shadow-2xl flex flex-col gap-5">
  
  {/* Total */}
  <div className="flex justify-between items-center border-b border-gray-700 pb-2">
    <h3 className="text-xl font-bold">Total:</h3>
    <span className="text-yellow-400 font-semibold text-lg md:text-xl">₹{totalPrice}</span>
  </div>

  {/* Order Summary */}
  <div className="bg-gray-700/70 p-3 rounded-2xl text-gray-300 text-sm flex flex-col gap-1">
    <p>Items: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
    <p>Shipping: ₹0 (Free)</p>
    <p>Tax: ₹{Math.round(totalPrice * 0.05)}</p>
  </div>

  {/* Checkout Button */}
  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 rounded-2xl shadow-lg transition transform hover:scale-105">
    Proceed to Checkout
  </button>

  {/* Payment Options */}
  <div className="flex flex-col gap-3 mt-2">
    <h4 className="font-semibold text-gray-300 text-sm">Payment Options</h4>
    <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-2xl text-white text-sm shadow flex justify-center items-center gap-2">
      💳 Pay with Card
    </button>
    <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-2xl text-white text-sm shadow flex justify-center items-center gap-2">
      📲 Pay with UPI
    </button>
    <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-2xl text-white text-sm shadow flex justify-center items-center gap-2">
      👛 Pay with Wallet
    </button>
  </div>
</div>

          {/* Toast */}
          {toast && (
            <div className="fixed top-24 right-4 bg-green-600 text-white px-4 py-2 rounded-2xl shadow-lg animate-bounce">
              {toast}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
