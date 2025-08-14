'use client'
import React, { useState } from 'react'
import hamburgerimg from '../../public/hamburger.svg'
import Image from 'next/image'
import { Link } from 'react-scroll'
import NextLink from 'next/link'
import logo from '../../public/logo.png'
import logo1 from '../../public/logo1.png'

function Header() {
        const[hamburger,setHamburger]=useState(false);
  return (
    <div className='w-screen fixed z-20'>
    <div className='bg-black backdrop-blur-[10px] bg-opacity-20 text-[1.25rem] text-white px-4 h-[4.5rem] flex items-center sm:justify-end justify-center relative'>
    <div className=' fixed left-[6.5rem] lg:left-[5rem] sm:text-[1.5rem] mob:left-[1rem] md:left-[2rem]'>       
       <NextLink href="/" className='cursor-pointer'>
       <div className='flex items-center gap-2 leading-none'><Image src={logo1} className='h-[3.2rem] w-[3.2rem]'/> P&B  Agro  Foods
       </div></NextLink></div>
    <div className='flex font-gsmt text-[1.0625rem] sm:hidden gap-[3rem]'>
    <NextLink href="/about" className='cursor-pointer hover:text-[#FFE6CE] transition-colors'>
About
</NextLink>
<NextLink href="/products" className='cursor-pointer hover:text-[#FFE6CE] transition-colors'>
Products
</NextLink>
<NextLink href="/health-benefits" className='cursor-pointer hover:text-[#FFE6CE] transition-colors'>
Health
</NextLink>
<NextLink href="/faq" className='cursor-pointer hover:text-[#FFE6CE] transition-colors'>
FAQ
</NextLink>
<NextLink href="/reviews" className='cursor-pointer hover:text-[#FFE6CE] transition-colors'>
Reviews
</NextLink>
    </div>
<Image onClick={()=>setHamburger(!hamburger)} className='hidden sm:inline cursor-pointer' src={hamburgerimg}/>
    </div>
    {<div  className={`hidden sm:flex sm:${hamburger ? 'w-[10rem]' : 'w-[10rem] right-[-10rem]'} gap-2 bg-white text-[1.25rem] flex-col absolute right-0 transition-all duration-300 ease-in`}>
    <NextLink href="/about" onClick={()=>setHamburger(!hamburger)} className='cursor-pointer py-[0.3rem] pl-[1rem] hover:bg-gray-100 transition-colors'>
About
</NextLink>
<NextLink href="/products" onClick={()=>setHamburger(!hamburger)} className='cursor-pointer py-[0.3rem] pl-[1rem] hover:bg-gray-100 transition-colors'>
Products
</NextLink>
<NextLink href="/health-benefits" onClick={()=>setHamburger(!hamburger)} className='cursor-pointer py-[0.3rem] pl-[1rem] hover:bg-gray-100 transition-colors'>
Health
</NextLink>
<NextLink href="/faq" onClick={()=>setHamburger(!hamburger)} className='cursor-pointer py-[0.3rem] pl-[1rem] hover:bg-gray-100 transition-colors'>
FAQ
</NextLink>
<NextLink href="/reviews" onClick={()=>setHamburger(!hamburger)} className='cursor-pointer py-[0.3rem] pl-[1rem] hover:bg-gray-100 transition-colors'>
Reviews
</NextLink>
    </div>}
    </div>
  )
}

export default Header