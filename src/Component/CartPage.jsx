  import React from 'react';
  import { FaTrash } from 'react-icons/fa';

  const CartPage = () => {
    const [cartItems, setCartItems] = React.useState([]);

    const removeItem = (id) => {
      setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <div className="mt-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h2 className="text-lg">{item.name}</h2>
                  <p>${item.price}</p>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-red-500">
                  {/* <FaTrash /> */}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  export default CartPage;
  