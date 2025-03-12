import React from "react";
import { Login as LoginComponent } from "../components";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Login
        </h2>
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;
