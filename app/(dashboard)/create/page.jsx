import Title from '@/components/Title'
import React from 'react'
import { PlusCircle } from 'lucide-react'
import TodoForm from '@/components/TodoForm'

const Create = () => {
    return (
        <>
            <div className="flex justify-center my-8">
                <PlusCircle className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
            </div>
            <div className='flex items-center justify-center'>
                <Title heading={"Start planning now."} />
            </div>
            <TodoForm />
        </>
    )
}

export default Create