import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./FireBase";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";

const Login = ({ onClose }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  function loginWithGoogle() {
    signInWithPopup(auth, provider).catch((err) => console.error(err));
  }

  function logout() {
    signOut(auth);
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-slate-900 to-slate-700 w-80 rounded-xl p-6 text-center relative shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-white text-xl hover:text-red-500"
          >
            ✖
          </button>
          <h2 className="text-2xl font-bold text-yellow-400">GoBoX</h2>
          <p className="text-sm text-gray-300 mb-4">Premium Streetwear for Men</p>

          {user ? (
            <div>
              <img
                src={user.photoURL}
                alt="User"
                className="w-14 h-14 rounded-full mx-auto border-2 border-yellow-500"
              />
              <p className="mt-2 font-medium text-white">{user.displayName}</p>
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
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full mt-4"
            >
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
