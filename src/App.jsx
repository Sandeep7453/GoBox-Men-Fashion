import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Category from "./Component/Category";

const router = createBrowserRouter([
  { path: "/", element: <> <Navbar /> <Home /> </> },
  { path: "/cart", element: <> <Navbar /> <Cart /> </> },
  { path: "/category/:categoryName", element: <> <Navbar /> <Category /> </> }, // ✅
]);

function App() {
  return (
    <div className="h-screen bg-gray-900 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
