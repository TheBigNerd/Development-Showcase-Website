'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
            {/* Desktop Navigation */}
            <nav className='z-15 top-15 left-1/2 -translate-x-1/2 fixed hidden md:flex justify-center items-center gap-5 py-2 px-4 md:px-6 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800 w-auto max-w-[95%]'>
                <Link href="/about" className='hover:text-gray-300 transition-colors'>
                    <span>
                        About
                    </span>
                </Link>
                <Link href="/projects" className='hover:text-gray-300 transition-colors'>
                    <span>
                        Projects
                    </span>
                </Link>
                <Link href="/" className="flex justify-center w-full md:w-auto">
                    <img src="/logo.png" alt="Logo" className='w-20 h-20 rounded-full' />
                </Link>
                <Link href="/leetcode" className='hover:text-gray-300 transition-colors'>
                    <span>
                        Leet Code
                    </span>
                </Link>
                <Link href="/links" className='hover:text-gray-300 transition-colors'>
                    <span>
                        Links
                    </span>
                </Link>
            </nav>

            {/* Mobile Navigation */}
            <nav className='z-15 top-4 left-1/2 -translate-x-1/2 fixed md:hidden flex justify-between items-center py-2 px-4 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800 w-auto max-w-[95%]'>
                <Link href="/" className="flex justify-center">
                    <img src="/logo.png" alt="Logo" className='w-16 h-16 rounded-full' />
                </Link>
                
                {/* Hamburger Menu Button */}
                <button
                    onClick={toggleMenu}
                    className='flex flex-col justify-center items-center w-8 h-8 space-y-1 hover:opacity-70 transition-opacity'
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className='z-10 top-22 left-1/2 -translate-x-1/2 fixed md:hidden flex flex-col items-center gap-4 py-5 px-6 rounded-xl bg-black/80 backdrop-blur-md border text-white border-zinc-800 w-auto max-w-[95%]'>
                    <Link href="/about" className='hover:text-gray-300 transition-colors' onClick={() => setIsMenuOpen(false)}>
                        <span>
                            About
                        </span>
                    </Link>
                    <Link href="/projects" className='hover:text-gray-300 transition-colors' onClick={() => setIsMenuOpen(false)}>
                        <span>
                            Projects
                        </span>
                    </Link>
                    <Link href="/leetcode" className='hover:text-gray-300 transition-colors' onClick={() => setIsMenuOpen(false)}>
                        <span>
                            Leet Code
                        </span>
                    </Link>
                    <Link href="/links" className='hover:text-gray-300 transition-colors' onClick={() => setIsMenuOpen(false)}>
                        <span>
                            Links
                        </span>
                    </Link>
                </div>
            )}
        </>
    )
}
export default Navbar;