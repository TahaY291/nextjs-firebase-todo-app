  'use client'
  import React, { useState } from 'react'
  import { updateTodo, deleteTodo } from '@/firebase/firebaseTodos'
  import { useAuthStore } from '@/store/authStore'
  import completeIcon from '@/public/complete.svg'
  import editIcon from '@/public/edit.svg'
  import deleteIcon from '@/public/delete.svg'
  import undoIcon from '@/public/undo.svg'
  import saveIcon from '@/public/save.svg'
  import Image from 'next/image'
  import { useTodoStore } from '@/store/todoStore'

  function Todo({ id, title: initialTitle, description: initialDescription, completed: initialCompleted }) {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(initialTitle)
    const [description, setDescription] = useState(initialDescription)
    const [completed, setCompleted] = useState(initialCompleted)
    const user = useAuthStore((state) => state.user)
    const deleteTodoLocal = useTodoStore(state => state.deleteTodoLocal)
    const updateTodoToLocal = useTodoStore(state => state.updateTodoToLocal)

    const handleEdit = async () => {
      if (editing) {
        await updateTodo(id, { title, description }, user.uid)
        updateTodoToLocal(id, { title, description })
      }
      setEditing(!editing)
    }

    const handleDelete = async (id) => {
      try {
        await deleteTodo(id, user.uid)
        deleteTodoLocal(id)
      } catch (error) {
        console.log("Error in deleting ", error)
      }
    }

    const toggleCompleted = async () => {
      const newStatus = !completed
      setCompleted(newStatus)

      await updateTodo(id, { isCompleted: newStatus }, user.uid)
      updateTodoToLocal(id, { isCompleted: newStatus })
    }

    return (
      <div className={`px-4 py-3 w-fit rounded-sm text-white break-inside-avoid transition-all mb-10 duration-200
          ${completed ? 'bg-blue-700/40 border border-blue-600' : 'bg-[#323232]'}`}>

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
              className={`border-2 rounded-full flex items-center justify-center font-semibold h-10 w-10
              ${completed ? 'border-yellow-500 text-yellow-500' : 'border-blue-300 text-blue-300'}`}
              onClick={toggleCompleted}
            >
              {completed ? <Image src={undoIcon} alt='undo' className='' /> : <Image src={completeIcon} className='fill-blue-500' alt='complete' />}
            </button>
          </div>

          <div className='flex gap-2'>

            <button
              className="border-2 border-green-600 rounded-full text-green-600  flex items-center justify-center h-10 w-10 font-semibold"
              onClick={handleEdit}
            >
              {editing ? <Image src={saveIcon} alt='save' /> : <Image src={editIcon} alt='Edit' />}
            </button>

            <button
              className="border-2 cursor-pointer border-red-600 rounded-full text-red-600 flex items-center justify-center h-10 w-10 font-semibold"
              onClick={() => handleDelete(id)}
            >
              <Image src={deleteIcon} alt='delete' />
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default Todo
