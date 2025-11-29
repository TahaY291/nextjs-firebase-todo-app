"use client";
import React from "react";


const Input = ({ label, placeholder, value, onChange, type = "text", textarea = false }) => {
    return (
        <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
                {label}
            </label>
            {textarea ? (
                <textarea
                    className="w-full px-4 py-3 bg-[#444444] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={4}
                />
            ) : (
                <input
                    type={type}
                    className="w-full px-4 py-3 bg-[#444444] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    )
}

export default Input