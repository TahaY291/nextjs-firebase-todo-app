"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { usePathname, useRouter } from "next/navigation";

export default function AuthWrapper({ children }) {
    const init = useAuthStore((state) => state.init);
    const user = useAuthStore((state) => state.user);
    const loading = useAuthStore((state) => state.loading);
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {

        if (!loading && !user) {
            router.push("/login");
        }
    }, [loading, user]);

    const hideLayout = pathname === "/login" || pathname === "/signup";

    if (loading) return <div>Loading...</div>;

    return (
        <div className="flex flex-col min-h-screen">
            {!hideLayout && user && <Navbar />}
            <div className="flex-1 bg-[#181818]">{children}</div>
            {!hideLayout && user && <Footer />}
        </div>
    );
}
