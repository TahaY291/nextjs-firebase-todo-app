"use client";
import React from "react";

const Input = ({
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    className = "",
    name,
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm text-gray-300">{label}</label>}

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full px-3 py-2 rounded-md bg-white text-black 
        border border-gray-800 focus:border-gray-800 focus:outline-none 
        ${className}`}
            />
        </div>
    );
};

export default Input;
