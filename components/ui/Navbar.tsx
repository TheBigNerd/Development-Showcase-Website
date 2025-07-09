import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return(
        <nav className='z-15 top-15 left-1/2 -translate-x-1/2 fixed flex  justify-center items-center gap-5 py-2 px-4 md:px-6 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800 w-auto max-w-[95%]'>
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
    )
}
export default Navbar;