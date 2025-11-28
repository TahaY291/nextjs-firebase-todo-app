'use client'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Navbar = () => {
    const logout = useAuthStore(state => state.logout)
    const setUser = useAuthStore(state => state.setUser)
    const router = useRouter()
    const logoutUser =async () => {
        await logout()
        setUser("")
        router.push('/login')
    }

  return (
    <div className='bg-[#181818] border-b border-gray-400 flex items-center justify-between px-16 py-3 '>
        <h1 className='text-lg font-bold font-serif'>TaskNest</h1>
        <button className='bg-blue-500 px-3 py-2 rounded cursor-pointer' onClick={logoutUser}>Logout</button>
    </div>
  )
}
