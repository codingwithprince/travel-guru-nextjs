import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='z-20 absolute w-[100%] text-white p-3 px-[10%] grid grid-cols-2 sm:grid-cols-3 items-center'>
        <div className="logo">
            <Image className='filter invert-[1] brightness-0' src='/images/logo.png' alt='logo' height={80} width={160} />
        </div>
        <div className="search-box">

        </div>
        <div className="menu-items">
            <ul className='list-style-none font-semibold flex justify-around gap-3'>
                <li>
                    <Link href={'/news'}>
                        <a className='text-lg'> News </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/destination'}>
                        <a className='text-lg'> Destination </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/blog'}>
                        <a className='text-lg'> Blog </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/contact'}>
                        <a className='text-lg'> Contact </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/login'}>
                        <a className='text-lg text-black bg-[#F9A41A] px-6 py-2 rounded-md'> Login </a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar