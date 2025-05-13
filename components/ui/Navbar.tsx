import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return(
        <nav className='z-15 top-15 left-1/2 -translate-x-1/2 fixed flex items-center gap-5 py-2 px-4 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800'>
            <Link href="/" className='hover:text-gray-300 transition-colors'>
                <span>
                    Something
                </span>
            </Link>
            <Link href="/" className='hover:text-gray-300 transition-colors'>
                <span>
                    Something
                </span>
            </Link>
            <a href="">
                <h1 className='text-6xl font-bold text-white'>Nerd Dev</h1>
            </a>
            <Link href="/" className='hover:text-gray-300 transition-colors'>
                <span>
                    Something
                </span>
            </Link>
            <Link href="/" className='hover:text-gray-300 transition-colors'>
                <span>
                    Something
                </span>
            </Link>
        </nav>
    )
}
export default Navbar;