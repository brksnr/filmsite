import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/actions/userAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  console.log("User:", user);


  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: data.email,
        password: data.password,
      });
      const { token, username, email } = response.data;
      dispatch(loginUser({ token, username, email }));
      if (rememberMe) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
      }
      alert("Login successful!");
      history.push("/films");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed!");
      console.log("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your details to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onClick={handleCheckboxChange}
                />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
