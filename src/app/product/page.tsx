"use client"
import Header from "../component header/header";
import Footer from "../component footer/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Product() {
  const router = useRouter();
  return (
    <div>
      <Header/>
      <div className='grid lg:grid-rows-1 max-w-screen-2xl h-[209px]'>
      <Image
            width={1440}
            height={209}
            alt="search icon"
            src="/images/Frame 143.svg"
          />
      </div>
      <div className="grid grid-rows-1  h-[64px] max-w-screen-2xl ">
        <div className='flex items-center justify-between'>

        <div className='items-center flex  gap-3'>
        <select id="country" name="country" className='cursor-pointer w-[137px] h-[48px] text-center text-[16px] font-normal leading-[24px] text-[#2A254B]'>
          <option value="Category">Category</option>
        </select>
        <select id="country" name="country" className='cursor-pointer w-[137px] h-[48px] text-center text-[16px] font-normal leading-[24px] text-[#2A254B]'>
          <option value="Product type">Product type</option>
        </select>
        <select id="country" name="country" className='cursor-pointer w-[137px] h-[48px] text-center text-[16px] font-normal leading-[24px] text-[#2A254B]'>
          <option value="Price">Price</option>
        </select>
        <select id="country" name="country" className='cursor-pointer w-[137px] h-[48px] text-center text-[16px] font-normal leading-[24px] text-[#2A254B]'>
          <option value="Brand">Brand</option>
        </select>
        </div>
        <div className='space-x-4 mr-6'>
        <label className='w-[137px] h-[48px] text-center text-[14px] font-normal leading-[21px] text-[#2A254B]'>Sorting by:</label>
        <select id="country" name="country" className='cursor-pointer w-[137px] h-[48px] text-center text-[16px] font-normal leading-[24px] text-[#2A254B]'>
          <option value="Date added">Date added</option>
        </select>
        </div>

        </div>
        
      </div>
      
      <div className="grid lg:grid-rows-3  h-[510px] max-w-screen-2xl">
        
        <div className="grid row-span-3 max-sm:grid-cols-2 lg:grid-cols-4 items-center pl-[40px]">
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
           onClick={() => router.push("/productListing")}   
           >
            <Image
              src="/images/Parent.svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              The Dandy chair
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £250
            </p>
          </div>
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Parent (1).svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              Rustic Vase Set
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £155
            </p>
          </div>
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Parent (2).svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              The Silky Vase
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £125
            </p>
          </div>
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Parent (3).svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              The Lucy Lamp
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £399
            </p>
          </div>
        </div>    
      </div>

      <div className="grid lg:grid-rows-3  h-[510pxpx] max-w-screen-2xl ">
        
        <div className="grid row-span-3 lg:grid-cols-4 items-center pl-[40px]">
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Parent (4).svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              The Dandy chair
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £250
            </p>
          </div>
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Parent (5).svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              Rustic Vase Set
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £155
            </p>
          </div>
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Photo.svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              The Silky Vase
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £125
            </p>
          </div>
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Photo (1).svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              The Lucy Lamp
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £399
            </p>
          </div>
        </div>    
      </div>

      <div className="grid lg:grid-rows-4  h-[636px] max-w-screen-2xl ">
        
        <div className="grid row-span-3 lg:grid-cols-4 items-center pl-[40px]">
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Parent.svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              The Dandy chair
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £250
            </p>
          </div>
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Parent (1).svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              Rustic Vase Set
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £155
            </p>
          </div>
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Parent (2).svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              The Silky Vase
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £125
            </p>
          </div>
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]"
          onClick={() => router.push("/productListing")} 
          >
            <Image
              src="/images/Parent (3).svg"
              alt="Hero Image"
              width={305}
              height={375}
              objectFit="cover"
            />
            <p className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
              The Lucy Lamp
            </p>
            <p className="text-[18px] text-[#2A254B] font-normal leading-[27px]">
              £399
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={() => router.push("/product")}
            className="cursor-pointer hover:scale-[1.05] text-[#2A254B]  gap-[10px]  bg-white h-[56px] w-[#F9F9F9] pb-[16px] pr-[32px] pl-[32px] font-normal text-[16px] leading-[24px]"
          >
            View collection
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
