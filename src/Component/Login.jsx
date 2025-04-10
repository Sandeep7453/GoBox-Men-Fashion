import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./FireBase";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const Login = ({ onClose }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  function loginWithGoogle() {
    signInWithPopup(auth, provider);
  }

  function logout() {
    signOut(auth);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white w-80 rounded-xl p-6 text-center relative"
      >
        <button onClick={onClose} className="absolute top-2 right-3 text-lg text-gray-500">✖</button>
        <h2 className="text-2xl font-bold text-yellow-500">GoBoX</h2>
        <p className="text-sm text-gray-600 mb-4">Premium Streetwear for Men</p>

        {user ? (
          <div>
            <img
              src={user.photoURL}
              alt="User"
              className="w-14 h-14 rounded-full mx-auto border-2 border-yellow-500"
            />
            <p className="mt-2 font-medium text-gray-700">{user.displayName}</p>
            <button
              onClick={logout}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loginWithGoogle}
            className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full"
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
