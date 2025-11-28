import React from 'react'

const Button = ({ text, type = "button", onClick }) => {
  return (
    <button type={type} onClick={onClick} className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded w-fit self-center font-semibold cursor-pointer"
    >{text}</button>
  )
}

export default Button
