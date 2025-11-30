'use client'
import { useRouter } from 'next/navigation'
import React , {useEffect} from 'react'
import { logoutUser } from '@/firebase/firabaseAuth'
import { useAuthStore } from '@/store/authStore'
import Button from './Button'
import Link from 'next/link'
import { useTodoStore } from '@/store/todoStore'



export const Navbar = () => {
  const setUser = useAuthStore(state => state.setUser)
  // const user = useAuthStore(state => state.user)
  // const getTodo = useTodoStore(state => state.getTodo)
  const router = useRouter()
  const handleLogOutUser =async () => {
    await logoutUser()
    setUser("")
    router.push('/login')
  }
  
  // useEffect(() => {
  //   if (user?.uid) getTodo(user.uid)
  // }, [user])
  return (
    <div className='bg-[#181818] border-b border-gray-400 flex items-center justify-between px-16 py-3 '>
      <Link href={'/'}>
        <h1 className='text-lg font-bold font-serif'>TaskNest</h1>
      </Link>
        <Button onClick={handleLogOutUser} text={'logout'} type={'button'} />
    </div>
  )
}
