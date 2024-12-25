"use client"
import {useState} from 'react'
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const [OpenMenu, setOpenMenu] = useState(false)
  return (
    <div>

    <div className=' gap-4 items-center lg:block h-[132px] hidden'>
        <div className='lg:block  hidden'>

        <div className="max-w-screen-2xl md:w-full h-[132px] grid grid-rows-2 ">
            <div className="flex justify-between items-center">
            <Image
            width={16}
            height={16}
            alt="search icon"
            src="/images/Search.svg"
            />
          <p className="font-normal text-[24px] leading-[29.52px]">Avion</p>
          <div className="flex">
          <Link href="/cart">  
          <Image
            width={16}
            height={16}
            alt="Shopping cart icon"
            src="/images/Shopping--cart.svg"
            />
          </Link>
          <Image
            width={16}
            height={16}
            alt="avater icon"
            src="/images/User--avatar.svg"
            className="ml-4"
            />
          </div>
            </div>
            <div className="bg-white flex justify-center items-center border-t-[1px] border-[#0000001A] border-solid pt-[15px] gap-[44px]">
           
        <div className="hover:underline cursor-pointer font-normal text-[16] leading-[21.16px] text-[#726E8D]">Plant pots</div>
        <div className="hover:underline cursor-pointer font-normal text-[16] leading-[21.16px] text-[#726E8D]">Ceramics</div>
        <div className="hover:underline cursor-pointer font-normal text-[16] leading-[21.16px] text-[#726E8D]">Tables</div>
        <div className="hover:underline cursor-pointer font-normal text-[16] leading-[21.16px] text-[#726E8D]">Chairs</div>
        <div className="hover:underline cursor-pointer font-normal text-[16] leading-[21.16px] text-[#726E8D]">Crockery</div>
        <div className="hover:underline cursor-pointer font-normal text-[16] leading-[21.16px] text-[#726E8D]">Tableware</div>
        <div className="hover:underline cursor-pointer font-normal text-[16] leading-[21.16px] text-[#726E8D]">Cutlery</div>
          </div>
    </div>
    </div>
            </div>
     <header className='lg:hidden bg-white fixed top-0 left-0 w-full h-[69px] z-50'>
      <div className="block lg:hidden ">
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
            <div className='absolute  top-full  items-center w-[100px] shadow-lg py-4 bg-white'>
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
