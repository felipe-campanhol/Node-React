import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
        <div className="flex items-center space-x-5">
            <Link href="/" passHref >
                <Image src="https://i.ytimg.com/vi/NoVCczjF1WM/hqdefault.jpg" className='w-32 object-contain cursor-pointer' height={100} width={128} alt=""/>
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
            </div>
        </div>

        <div className="flex items-center space-x-5 text-green-600">
            <h3>Sign In</h3>
            <h3 className='border px-4 py-1 rounded-full'>Get started</h3>
        </div>
    </header>
  )
}

export default Header
