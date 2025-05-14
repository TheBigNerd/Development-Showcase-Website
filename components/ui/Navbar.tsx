import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return(
        <nav className='z-15 top-15 left-1/2 -translate-x-1/2 fixed flex  justify-center items-center gap-5 py-2 px-4 md:px-6 rounded-full bg-black/60 backdrop-blur-md border text-white border-zinc-800 w-auto max-w-[95%]'>
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
            <a href="" className="flex justify-center w-full md:w-auto">
                <h1 className='text-4xl md:text-6xl font-bold text-white text-center'>Nerd Dev</h1>
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