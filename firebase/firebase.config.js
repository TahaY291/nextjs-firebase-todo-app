import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAfDYPCT3TXCDtk5I_uFfx7ChEMz4ekU5k",
    authDomain: "nextjs-todo-app-22040.firebaseapp.com",
    projectId: "nextjs-todo-app-22040",
    storageBucket: "nextjs-todo-app-22040.firebasestorage.app",
    messagingSenderId: "999770713630",
    appId: "1:999770713630:web:51bada176668ea732a880f",
    measurementId: "G-879GJK0SR9"
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const initAnalytics = async () => {
    if (typeof window !== "undefined") {
        try {
            const supported = await isSupported();
            if (supported) {
                return getAnalytics(app);
            } else {
                console.warn("Analytics not supported");
                return null;
            }
        } catch (err) {
            console.error("Analytics init error:", err);
            return null;
        }
    }
};
