import { getTodos } from "@/firebase/firebaseTodos";
import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],

  getTodo: async (userId) => {
    const data = await getTodos(userId)
    set({ todos: data })
  }
}));
