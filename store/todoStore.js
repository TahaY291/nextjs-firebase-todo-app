import { getTodos } from "@/firebase/firebaseTodos";
import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],

  getTodo: async (userId) => {
    const data = await getTodos(userId)
    set({ todos: data })
  },

  deleteTodoLocal: (id) =>
  set((state) => ({
    todos: state.todos.filter((t) => t.id !== id),
  })),

updateTodoToLocal: (id, updatedData) =>
  set((state) => ({
    todos: state.todos.map((t) =>
      t.id === id ? { ...t, ...updatedData } : t
    ),
  })),


}));
