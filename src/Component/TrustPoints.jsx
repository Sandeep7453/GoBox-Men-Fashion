import React from "react";
import { CheckCircle, Truck, BadgeDollarSign } from "lucide-react";

const TrustPoints = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-12 px-4 md:px-10 h-fit w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Premium Quality */}
        <div className="flex flex-col items-center">
          <CheckCircle className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-300">
            Only handpicked fashion essentials with high-grade materials.
          </p>
        </div>

        {/* Fast Delivery */}
        <div className="flex flex-col items-center">
          <Truck className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast & Free Delivery</h3>
          <p className="text-gray-300">
            Get your products delivered quickly at no extra cost.
          </p>
        </div>

        {/* Affordable Prices */}
        <div className="flex flex-col items-center">
          <BadgeDollarSign className="w-12 h-12 text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
          <p className="text-gray-300">
            Stylish fashion that fits your budget perfectly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustPoints;
