import Image from "next/image";
export default function header() {
  return (
    <div className=' gap-4 items-center'>
        <div className="w-[1440px]  h-[132px] grid grid-rows-2">
            <div className="flex justify-between items-center">
            <Image
            width={16}
            height={16}
            alt="search icon"
            src="/images/Search.svg"
          />
          <p className="font-normal text-[24px] leading-[29.52px]">Avion</p>
          <div className="flex">
          <Image
            width={16}
            height={16}
            alt="Shopping cart icon"
            src="/images/Shopping--cart.svg"
          />
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
  )
}
