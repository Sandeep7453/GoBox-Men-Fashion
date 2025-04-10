import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./FireBase"; // make sure FireBase.js exports both

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      alert("Logged out!");
    });
  };

  return (
    <div className="p-4 flex flex-col items-center gap-4 bg-gray-900 text-white rounded-lg max-w-sm mx-auto mt-10 shadow-lg">
      {user ? (
  <>
    <img
      src={user.photoURL}
      alt={user.displayName}
      className="w-14 h-14 rounded-full border-2 border-yellow-400"
    />
    <p className="text-lg">Welcome, <span className="text-yellow-400 font-medium">{user.displayName}</span></p>
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white"
    >
      Logout
    </button>
  </>
) : (
  <button
    onClick={handleLogin}
    className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded"
  >
    Sign in with Google
  </button>
)}

    </div>
  );
};

export default Login;
