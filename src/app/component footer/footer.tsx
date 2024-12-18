import Image from "next/image";
export default function Footer() {
    return (
      <div className="h-[380px] w-[1440px]">
        <div className="bg-[#2A254B] grid lg:grid-rows-4 lg:grid-cols-5 h-[380px] w-full max-w-[1440px]">
          <div className="row-span-3 col-span-5  flex justify-around items-start">
            <div className=" flex-col justify-center items-center space-y-3 w-[130px] h-[174px] mt-[58px]">
              <div className="font-normal text-[16px] leading-[19.6px] text-white">Menu</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">New arrivals</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Best sellers</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Recently viewed</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Popular this week</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">All products</div>
            </div>
  
            <div className="flex-col justify-center items-center space-y-3 h-[206px] w-[108px] mt-[58px]">
              <div className="font-normal text-[16px] leading-[19.6px] text-white">Categories</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Crockery</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Furniture</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Homeware</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Plant pots</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Chairs</div>
            </div>
  
            <div className="flex-col justify-center items-center space-y-3 h-[174px] w-[110px] mt-[58px]">
              <div className="font-normal text-[16px] leading-[19.6px] text-white">Our company</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">About us</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Vacancies</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Contact us</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Privacy</div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">Returns policy</div>
            </div>
  
            <div className="col-span-2 pt-[58px] space-y-3 text-white">
              <p className="font-normal text-[16px] leading-[19.6px]">Join our mailing list</p>
              <div className="flex h-[56px] w-[635px] pr-[60px]">
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="w-[509px] h-[56px] bg-[#FFFFFF26] items-center pl-[36px] font-normal text-[16px] leading-[21.6px]"
                />
                <button className="text-[#2A254B] pt-[16px] gap-[10px] flex justify-center items-center bg-white h-[56px] w-[125px] pb-[16px] pr-[32px] pl-[32px] font-normal text-[16px] leading-[24px]">
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <div className=" col-span-5">
          <div className='grid grid-rows py-5 ml-[65px]'>
      <div className=' border-t-[1px] border-solid border-[#4E4D93] flex justify-between items-center pt-[40px]  '>
        <p className=' flex  font-normal text-[14px] leading-[18.9px] text-white'>Copyright 2022 Avion LTD</p>
        <div className='flex gap-6 w-[264px] h-6 '>
        <Image
            width={24}
            height={24}
            alt="LinkedIn icon"
            src="/images/LinkedIn.svg"

            />
            <Image
            width={24}
            height={24}
            alt="Facebook icon"
            src="/images/Facebook@2x.svg"

            />
            <Image
            width={24}
            height={24}
            alt="Instagram icon"
            src="/images/Instagram.svg"

            />
            <Image
            width={24}
            height={24}
            alt="skype icon"
            src="/images/skype.svg"

            />
            <Image
            width={24}
            height={24}
            alt="Twitter icon"
            src="/images/Twitter.svg"

            />
            <Image
           width={24}
           height={24}
            alt="pinterest icon"
            src="/images/pinterest.svg"

            />
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    );
  }