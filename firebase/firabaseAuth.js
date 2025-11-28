"use client";

import { auth } from "./firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const signupUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async () => {
    return await signOut(auth);
};

export const listenToAuthChanges = (callback) => {
    return onAuthStateChanged(auth, callback);
};
