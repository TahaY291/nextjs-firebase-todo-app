"use client";

import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#181818] text-white text-sm border-t border-gray-400 py-4 mt-auto">
            <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center">
                <p>© {year} Todo App. All rights reserved.</p>
                <div className="flex gap-4 mt-2 sm:mt-0">
                    <a
                        href="#"
                        className="hover:text-blue-400 transition-colors"
                    >
                        Privacy
                    </a>
                    <a
                        href="#"
                        className="hover:text-blue-400 transition-colors"
                    >
                        Terms
                    </a>
                    <a
                        href="#"
                        className="hover:text-blue-400 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
