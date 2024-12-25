"use client"
import React from 'react'
import  Image  from 'next/image'
import {useState} from 'react'

export default function Header2() {
    const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <div>
         <header className='h-[69px] w-full mx-auto  grid grid-rows-1  items-stretch'>
      <div className={`block lg:hidden ${OpenMenu ? 'block' : 'hidden'}`}>
        <div className='flex justify-between items-center m-5 ' >
          <div className='font-normal text-[24px] leading-[29.52px]'>Avion</div>
          <div className='flex gap-5 '>
          <Image
            width={16}
            height={16}
            alt="search icon"
            src="/images/Search.svg"
            />
           <Image
            width={16}
            height={16}
            alt="search icon"
            src="/images/Menu.svg"
            onClick={() => setOpenMenu(!OpenMenu)}
            className='cursor-pointer'
            
          />
          {OpenMenu &&(
            <div className='absolute  top-12 z-10 items-center w-[100px] py-3  mr-[50px] bg-white'>
              <ul className='flex flex-col gap-5'>
                <li className='text-[14px] text-[#726E8D] cursor-pointer hover:underline'>Plant pots</li>
                <li className='text-[14px] text-[#726E8D] cursor-pointer hover:underline'>Ceramics</li>
                <li className='text-[14px] text-[#726E8D] cursor-pointer hover:underline'>Tables</li>
                <li className='text-[14px] text-[#726E8D] cursor-pointer hover:underline'>Chairs</li>
                <li className='text-[14px] text-[#726E8D] cursor-pointer hover:underline'>Crockery</li>
                <li className='text-[14px] text-[#726E8D] cursor-pointer hover:underline'>Tableware</li>
                <li className='text-[14px] text-[#726E8D] cursor-pointer hover:underline'>Cutlery</li>
              </ul>
            </div>
          )}
          </div>
        </div>
          </div>
      </header> 
    </div>
  )
}
