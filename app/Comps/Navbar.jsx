'use client'
import Image from 'next/image'
import React from 'react'
import BK from "../../public/bk_img.jpg"
import Icon from "../../public/icon.png"
import { Separator } from '@/components/ui/separator'


const Navbar = () => {
    return (
        <>
       
        <div className='w-full h-20 bg-white flex  items-center justify-between px-3 sm:px-10'>
            <div className='w-auto h-18 gap-x-2 flex '>
                <Image className='w-8' src={Icon} alt="whatBytesIcon" />
                <h1 className='text-3xl text-black font-bold '>WhatBytes</h1>
            </div>


            <div className='w-auto h-12 flex items-center gap-x-2 px-2 rounded-md border-2'>
                <div className='w-8 bg-slate-200 h-8 rounded-full'>
                    <Image className='w-full h-full object-cover rounded-full' src={BK} alt="Profile Pic" />
                </div>
                <h1 className='max-sm:hidden font-bold text-black'>Rahil Siddique</h1>
            </div>
        </div>

        <Separator/>
        </>
    )
}

export default Navbar