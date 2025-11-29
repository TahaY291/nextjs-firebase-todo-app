'use client'
import Title from '@/components/Title'
import React from 'react'
import { FileEdit } from 'lucide-react'
import TodoItem from '@/components/TodoItem'
import { useTodoStore } from '@/store/todoStore'

const Todos = () => {
  const todos = useTodoStore((state) => state.todos)

  return (
    <>
      <div className="flex justify-center my-8">
        <FileEdit className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
      </div>

      <div className='flex items-center justify-center'>
        <Title heading={"Let's Get Things Done"} />
      </div>

      <div className='columns-4 mx-[10%] mb-10'>
      {todos.map((todo) => (
        <TodoItem 
        key={todo.id}
        id={todo.id}
        title={todo.title}
        description={todo.description}
        completed={todo.isComplete}
        />
      ))}
      </div>
    </>
  )
}

export default Todos
