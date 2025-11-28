"use client";
import React, { useState } from "react";
import { auth } from "@/firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

const Signup = () => {
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
            const res = await createUserWithEmailAndPassword(auth, email, password);
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
                className='flex flex-col gap-5 bg-[#323232] p-8 rounded-lg w-[320px] text-white'
            >
                <h1 className="text-xl font-semibold text-center">Create Account</h1>

                {message && (
                    <p className="text-red-500 text-sm text-center">{message}</p>
                )}
                <div className='flex flex-col w-full'>
                    <label htmlFor="email" className='mb-1'>Email</label>
                    <input
                        type="email"
                        id='email'
                        className='w-full bg-white text-black px-3 py-2 rounded'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input
                        type="password"
                        className="bg-white text-black px-3 py-2 rounded w-full"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'
                    className='bg-blue-600 hover:bg-blue-700 px-3 cursor-pointer py-2 rounded font-semibold' onClick={handleSubmit}>
                    sign up
                </button>
                <Link href={'/login'} className="self-end text-blue-400 text-sm">
                    <span>login</span>
                </Link>
            </form>
        </div>
    );
};

export default Signup;
