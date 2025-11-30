'use client'
import Title from '@/components/Title'
import React, { useEffect, useState } from 'react'
import { FileEdit } from 'lucide-react'
import TodoItem from '@/components/TodoItem'
import { useTodoStore } from '@/store/todoStore'
import { useAuthStore } from '@/store/authStore'

const Todos = () => {
  const todos = useTodoStore((state) => state.todos)
  const getTodo = useTodoStore((state) => state.getTodo)
  const user = useAuthStore((state) => state.user)
  const [filter, setFilter] = useState("all")

  const filterTodo = () => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.isCompleted === true)
    }
    if (filter === "pending") {
      return todos.filter((todo) => todo.isCompleted === false)
    }
    return todos
  }

  useEffect(() => {
    if (user?.uid) getTodo(user.uid)
  }, [user])

  return (
    <>
      <div className="flex justify-center my-8">
        <FileEdit className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
      </div>

      <div className='flex items-center justify-center'>
        <Title heading={"Let's Get Things Done"} />
      </div>

      <div className="mx-[10%] mb-6 relative">
        <div className="relative inline-block">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="
              bg-[#323232]
              text-white
              border border-gray-600
              px-4 py-2
              rounded-md
              outline-none
              focus:border-blue-400
              transition
              w-40
              cursor-pointer
              hover:bg-[#3a3a3a]
              relative
              z-10
              shadow-lg
            "
          >
            <option className="bg-[#323232]" value="all">All</option>
            <option className="bg-[#323232]" value="completed">Completed</option>
            <option className="bg-[#323232]" value="pending">Pending</option>
          </select>

          <div className="absolute top-1/2 -translate-y-1/2 -right-[160%] w-60 h-[2px] bg-gradient-to-r from-white via-white to-transparent"></div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mx-[10%] mb-10">
        {filterTodo().map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.isCompleted}
          />
        ))}
      </div>
    </>
  )
}

export default Todos
