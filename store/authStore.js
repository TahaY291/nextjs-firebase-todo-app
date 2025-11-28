import { create } from "zustand";
import { listenToAuthChanges } from "@/firebase/firabaseAuth";

export const useAuthStore = create((set) => ({
    user: null,
    loading: true,

    init: () => {
        listenToAuthChanges((currentUser) => {
            set({ user: currentUser, loading: false });
        });
    },
    
    setUser: (user) => set({ user }),
}));