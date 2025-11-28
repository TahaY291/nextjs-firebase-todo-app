"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/navigation";

export default function AuthWrapper({ children }) {
    const init = useAuthStore((state) => state.init);
    const user = useAuthStore((state) => state.user);
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.push('/login')
        }
        init();
    }, []);
    return (
        <div className="flex flex-col min-h-screen">
            {user && <Navbar />}
            <div className="flex-1 bg-[#181818]">{children}</div>
            {user && <Footer />}
        </div>
    );
}
