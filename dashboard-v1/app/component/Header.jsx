"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';
import {MenuContext} from '../context/MyContent';

const Header = () => {
    const { target } = useContext(MenuContext);
  return (
    <div className='flex justify-between items-center p-4 mb-4 h-12 bg-gray-200'>
        <Image 
            src="/next.svg"
            alt="logo"
            width={50}
            height={50}
        />
        <div className='flex justify-center items-center gap-4'>
            <h3>User Area</h3>
            <div className='lg:hidden' onClick={target}>
                <FaBars className='cursor-pointer' size={20} />
            </div>
        </div>
        
    </div>
  )
}

export default Header

