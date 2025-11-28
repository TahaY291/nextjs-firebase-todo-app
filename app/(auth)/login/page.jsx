"use client";
import React, { useState } from "react";
import { loginUser } from "@/firebase/firabaseAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import Button from "@/components/Button";
import Input from "@/components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) return setMessage("Fill all fields");
    if (password.length <= 5) return setMessage("Password must be 6+ characters");

    try {
      const res = await loginUser(email, password);
      if (res.user) {
        setUser(res.user);
        router.push("/");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#181818] h-[90vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-[#323232] p-8 rounded-lg w-[320px] text-white"
      >
        <h1 className="text-xl font-semibold text-center">Login</h1>

        {message && <p className="text-red-500 text-sm text-center">{message}</p>}

        <div className="flex flex-col w-full">
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value )}
            type="email"
          />
        </div>

        <div className="flex flex-col w-full">
           <Input
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value )}
            type="password"
          />
        </div>

        <Button text={'login'} type={"submit"} />

        <Link href="/signup" className="self-end text-blue-400 text-sm">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Login;
