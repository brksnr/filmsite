import { Header } from "@/layout/Header";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Footer } from "@/layout/Footer";

export function SignUpPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        username: data.Username,
        email: data.email,
        password: data.password,
      });

      alert("Sign up successful!");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "An error occurred");
      } else {
        setErrorMessage("Something went wrong, please try again.");
      }
    }
  };

  return (
    <>
      <Header></Header>
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-12">
        <div className="mx-auto w-full max-w-lg border rounded-xl p-4">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <p className="mb-6">Create your account</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="Username" className="block">Username</label>
              <input
                id="Username"
                {...register("Username", { required: "Username is required" })}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.Username && <p className="text-sm text-red-500">{errors.Username.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format"
                  }
                })}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block">Password</label>
              <input
                id="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) => value === watch("password") || "Passwords do not match"
                })}
                className="w-full px-3 py-2 border rounded"
              />
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
            </div>

            <button type="submit" className="w-full bg-black text-white px-4 py-2 rounded" disabled={isLoading}>
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
