import { db } from "./firebase.config";
import {collection,addDoc,updateDoc,deleteDoc,doc,getDocs,query,where,serverTimestamp,getDoc,} from "firebase/firestore";

export const addTodo = async (title, description, userId) => {
    return await addDoc(collection(db, "todos"), {
        title,
        description,
        isCompleted: false,
        userId: userId,
        createdAt: serverTimestamp(),
    });
};


export const getTodos = async (userId) => {
    const q = query(
        collection(db, "todos"),
        where("userId", "==", userId)
    );

    const snap = await getDocs(q);
    return snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};



export const updateTodo = async (id, updates, userId) => {
    const todoRef = doc(db, "todos", id);

    const snap = await getDoc(todoRef);
    if (!snap.exists()) throw new Error("Todo not found");

    if (snap.data().userId !== userId)
        throw new Error("Unauthorized: Not your todo");

    return await updateDoc(todoRef, updates);
};



export const deleteTodo = async (id, userId) => {
    const todoRef = doc(db, "todos", id);
    const snap = await getDoc(todoRef);
    if (!snap.exists()) throw new Error("Todo not found");
    if (snap.data().userId !== userId)
        throw new Error("Unauthorized: Not your todo");
    return await deleteDoc(todoRef);
};
