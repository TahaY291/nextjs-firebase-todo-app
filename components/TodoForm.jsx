'use client'
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { addTodo } from '@/firebase/firebaseTodos'
import { useAuthStore } from '@/store/authStore'
import { useTodoStore } from '@/store/todoStore'


const TodoForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const user = useAuthStore(state => state.user)
  const [loading , setLoading] = useState(false)

const handleSubmit = async () => {
  if (!title.trim()) return;

  setLoading(true);

  try {
    await addTodo(title, description, user.uid);
    setTitle('');
    setDescription('');
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false); 
  }
};

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#323232] rounded-xl p-8  shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Add New Todo
          </h2>
          <div>
            <Input
              label="Title"
              placeholder="Write title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <Input
              label="Description"
              placeholder="Write description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyDown={handleKeyPress}
              textarea={true}
            />

            <div className='flex justify-center'>
              <Button text={loading ?  "Loading..." :'Add'} onClick={handleSubmit} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoForm