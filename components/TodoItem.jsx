'use client'
import React, { useState } from 'react'
import { updateTodo, deleteTodo } from '@/firebase/firebaseTodos'
import { useAuthStore } from '@/store/authStore'

function Todo({ id, title: initialTitle, description: initialDescription, completed: initialCompleted }) {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)
  const [completed, setCompleted] = useState(initialCompleted)
  const user = useAuthStore((state) => state.user)

  const handleEdit = async () => {
    if (editing) {
      await updateTodo(id, { title, description }, user.uid)
    }
    setEditing(!editing)
  }

  const handleDelete = () => {
    deleteTodo(id, user.uid)
  }

  const toggleCompleted = async () => {
    const newStatus = !completed
    setCompleted(newStatus)

    await updateTodo(id, { completed: newStatus }, user.uid)
  }

  return (
    <div className={`px-4 py-3 w-fit rounded-sm text-white break-inside-avoid transition-all mb-10 duration-200
        ${completed ? 'bg-green-700/40 border border-green-600' : 'bg-[#323232]'}`}>

      <textarea
        className={`p-2 w-full outline-none border border-gray-500 rounded-sm resize-none
          ${!editing ? 'bg-[#454545] cursor-not-allowed' : 'bg-white text-black'}
          ${completed ? 'line-through opacity-70' : ''}`}
        placeholder="Title"
        cols="23"
        rows="2"
        disabled={!editing}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <hr className="my-2" />

      <textarea
        className={`p-2 w-full outline-none border border-gray-500 rounded-sm resize-none
          ${!editing ? 'bg-[#454545] cursor-not-allowed' : 'bg-white text-black'}
          ${completed ? 'line-through opacity-70' : ''}`}
        placeholder="Add note"
        cols="23"
        rows="6"
        disabled={!editing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex items-center justify-between gap-2 mt-3">

        <div>
          <button
            className={`border-2 rounded-full px-3 py-1 font-semibold
            ${completed ? 'border-yellow-500 text-yellow-500' : 'border-blue-500 text-blue-500'}`}
            onClick={toggleCompleted}
          >
            {completed ? 'U' : 'C'}
          </button>
        </div>

        <div className='flex gap-4'>

          <button
            className="border-2 border-green-600 rounded-full text-green-600 px-3 py-1 font-semibold"
            onClick={handleEdit}
          >
            {editing ? 'S' : 'E'}
          </button>

          <button
            className="border-2 border-red-600 rounded-full text-red-600 px-3 py-1 font-semibold"
            onClick={handleDelete}
          >
            D
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo
