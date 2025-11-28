'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { logoutUser } from '@/firebase/firabaseAuth'
import { useAuthStore } from '@/store/authStore'
import Button from './Button'

export const Navbar = () => {
    const setUser = useAuthStore(state => state.setUser)
    const router = useRouter()
    const handleLogOutUser =async () => {
        await logoutUser()
        setUser("")
        router.push('/login')
    }

  return (
    <div className='bg-[#181818] border-b border-gray-400 flex items-center justify-between px-16 py-3 '>
        <h1 className='text-lg font-bold font-serif'>TaskNest</h1>
        <Button onClick={handleLogOutUser} text={'logout'} type={'button'} />
    </div>
  )
}
