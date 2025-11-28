import { create } from "zustand";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

export const useAuthStore = create((set) => ({
    user: null,
    loading: true,

    init: () => {
        onAuthStateChanged(auth, (currentUser) => {
            set({ user: currentUser, loading: false });
        });
    },
    
    setUser: (user) => set({ user }),

    logout: () => auth.signOut(),
}));