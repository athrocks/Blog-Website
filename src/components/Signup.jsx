import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Logo width="80px" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Create an Account
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Already have an account?&nbsp;
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>

        {/* Error Message */}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit(create)} className="mt-6">
          <div className="space-y-5">
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />
            <Input
              label="Email:"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
