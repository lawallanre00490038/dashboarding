"use client"

import React from 'react'
import Header from './Header'
import { FaHome, FaInfoCircle, FaProjectDiagram , FaAngleRight, FaCheck, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import {MenuContext} from '@/app/context/MyContent';

const MainLayout = ( {children} ) => {
    const { open } = useContext(MenuContext);

  return (
    <div className='bg-gray-100 w-screen min-h-screen'>
        <Header />
        <div className='flex justify-start items-start'>
        <aside className={`overflow-hidden bg-white w-60 p-4 rounded-lg mr-4 ${open ? 'block' : 'hidden'} lg:block transition-all duration-200`}>
            <ul className=''>
                <li className='flex justify-start items-center hover:bg-gray-200 hover:text-gray-900 hover:font-bold p-2 rounded-lg cursor-pointer'>
                    <FaHome className='mr-2' />
                    <Link href="/">Home</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-gray-900 hover:font-bold p-2 rounded-lg'>
                    <FaProjectDiagram className='mr-2' />
                    <h3 className='flex-1'>Project</h3>
                    <FaAngleRight className='cursor-pointer hover:rotate-90 transition-all duration-300' />
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-gray-900 hover:font-bold p-2 rounded-lg'>
                    <FaCheck className='mr-2' />
                    <h3 className='flex-1'>Singula</h3>
                    <FaAngleRight className='cursor-pointer hover:rotate-90 transition-all duration-300' />
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-gray-900 hover:font-bold p-2 rounded-lg cursor-pointer'>
                    <FaInfoCircle className='mr-2' />
                    <Link href="/about-us">About</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-gray-900 hover:font-bold p-2 rounded-lg cursor-pointer'>
                    <FaPhone className='mr-2' />
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </aside>
        <main className='flex-1'>{children}</main>
        </div>
    </div>
  )
}

export default MainLayout