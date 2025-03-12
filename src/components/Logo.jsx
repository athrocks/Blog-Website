import React from "react";
import { Link } from "react-router-dom";

function Logo({ width = "100px" }) {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 text-gray-800 font-bold text-xl"
    >
      <div className="bg-blue-600 text-white w-10 h-10 flex justify-center items-center rounded-full text-lg">
        B
      </div>
      <span className="text-gray-700">Blogify</span>
    </Link>
  );
}

export default Logo;
