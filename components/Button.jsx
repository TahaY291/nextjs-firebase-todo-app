import React from 'react'

const Button = ({ text, type = "button", onClick, loading }) => {
    return (
        <button disabled={loading} type={type} onClick={onClick}
            className="
        bg-blue-600 
        hover:bg-blue-700 
        px-3 py-2 
        rounded 
        w-fit 
        self-center 
        font-semibold
        cursor-pointer
        disabled:bg-gray-500
        disabled:cursor-not-allowed
        disabled:hover:bg-gray-500 ">{text}</button>
    );
};

export default Button
