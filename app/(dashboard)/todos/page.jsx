import Title from '@/components/Title'
import React from 'react'
import { FileEdit } from 'lucide-react'
import TodoItem from '@/components/TodoItem.jsx'
const Todos = () => {
  return (
    <>
     <div className="flex justify-center my-8">
                <FileEdit className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
            </div>
      <div className='flex items-center justify-center'>
        <Title heading={"Let's Get Things Done"} />
      </div>
      <TodoItem/>
    </>
  )
}

export default Todos