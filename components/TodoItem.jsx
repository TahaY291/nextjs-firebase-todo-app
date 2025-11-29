'use client'
import React, { useState } from 'react'

function Todo() {
  const [editing, setEditing] = useState(false)

  const handleEdit = () => {
    setEditing(!editing) // toggle editing state
  }

  const handleDelete = (id) => {
    // delete logic here
  }

  return (
    <div className="px-4 w-fit py-3 bg-[#323232] rounded-sm">
      <textarea
        className="p-2 outline-none border border-gray-500"
        placeholder="Title"
        cols="23"
        rows="4"
        disabled={!editing} // disabled when not editing
      />
      <p>Taha Yasin</p>
      <hr className="h-2" />
      <textarea
        className="p-2 outline-none border border-gray-500"
        placeholder="Add note"
        cols="23"
        rows="6"
        disabled={!editing} // disabled when not editing
      />
      <div className="flex items-center justify-center gap-1 mt-2">
        <button
          className="border-2 border-green-600 rounded-full text-green-600 px-2"
          onClick={handleEdit}
        >
          {editing ? 'Save' : 'Edit'}
        </button>
        <button
          className="border-2 border-red-600 rounded-full text-red-600 px-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
