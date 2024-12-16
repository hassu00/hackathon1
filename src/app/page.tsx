// import Link from 'next/link';
"use client"
import Header from "./component header/header";
import Footer from "./component footer/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Homepage() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="relative grid grid-rows-1 h-[704px] w-[1440px]">
        <div>
          <Image
            src="/images/Hero Blocks.svg"
            alt="Hero Image"
            width={1440}
            height={704}
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <div className="grid grid-rows-4 w-[1440px] h-[476px] ">
        <div className="   flex flex-col justify-center ">
          <p className="text-center font-normal text=[24px] leading-[33.6px] text-[#2A254B]">
            What makes our brand different
          </p>
        </div>
        <div className="row-span-3 w-[1440px]">
          <div className="grid lg:grid-cols-4 items-center h-full pl-[90px] gap-[24px]">
            <div className="gap-[10px]  h-[305px] w-[244px] p-[48px]  bg-[#F9F9F9] items-center flex flex-col justify-center">
              <div className="w-[206px] h-[148px] gap-[12px] flex-col flex justify-center ">
                <Image
                  src="/images/Delivery.svg"
                  alt="Hero Image"
                  width={16}
                  height={16}
                />
                <h3 className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
                  Next day as standard
                </h3>
                <p className="text-[16px]  text-[#2A254B] font-normal leading-[24px]">
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
            </div>
            <div className="gap-[10px]  h-[305px] w-[244px] p-[48px]  bg-[#F9F9F9] items-center flex flex-col justify-center">
              <div className="w-[206px] h-[148px] gap-[12px] flex-col flex justify-center ">
                <Image
                  src="/images/Checkmark--outline.svg"
                  alt="Hero Image"
                  width={16}
                  height={16}
                />
                <h3 className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
                  Made by true artisans
                </h3>
                <p className="text-[16px]  text-[#2A254B] font-normal leading-[24px]">
                  Handmade crafted goods made with real passion and craftmanship
                </p>
              </div>
            </div>
            <div className="gap-[10px]  h-[305px] w-[244px] p-[48px]  bg-[#F9F9F9] items-center flex flex-col justify-center">
              <div className="w-[206px] h-[148px] gap-[12px] flex-col flex justify-center ">
                <Image
                  src="/images/Purchase.svg"
                  alt="Hero Image"
                  width={16}
                  height={16}
                />
                <h3 className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
                  Unbeatable prices
                </h3>
                <p className="text-[16px]  text-[#2A254B] font-normal leading-[24px]">
                  For our materials and quality you won’t find better prices
                  anywhere
                </p>
              </div>
            </div>
            <div className="gap-[10px]  h-[305px] w-[244px] p-[48px]  bg-[#F9F9F9] items-center flex flex-col justify-center">
              <div className="w-[206px] h-[148px] gap-[12px] flex-col flex justify-center ">
                <Image
                  src="/images/Sprout.svg"
                  alt="Hero Image"
                  width={16}
                  height={16}
                />
                <h3 className="text-[20px] text-[#2A254B] font-normal leading-[28px]">
                  Recycled packaging
                </h3>
                <p className="text-[16px]  text-[#2A254B] font-normal leading-[24px]">
                  We use 100% recycled to ensure our footprint is more
                  manageable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-4  h-[636px] w-[1440px] ">
        <div className="grid row-span-3 grid-cols-4 items-center pl-[40px]">
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]">
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
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]">
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
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]">
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
          <div className="w-[305px] h-[462px] gap-[24px] bg-white cursor-pointer hover:scale-[1.05]">
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
            onClick={() => router.push("./product/product.tsx")}
            className="cursor-pointer hover:scale-[1.05] text-[#2A254B]  gap-[10px]  bg-white h-[56px] w-[#F9F9F9] pb-[16px] pr-[32px] pl-[32px] font-normal text-[16px] leading-[24px]"
          >
            View collection
          </button>
        </div>
      </div>
      <div className="grid grid-rows-1 w-[1440px] h-[598px] pt-[60px] pb-[60px] pl-[80px] pr-[80px] gap-[29px] ">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 items-center gap-[16px]  ">
            <div className="w-[630px] h-[478px] bg-[#2A254B] items-center flex flex-col justify-center">
              <div className="w-[495px] h-[99px] gap-3 text-[#FFFFFF] flex flex-col justify-center">
                <h1 className="text-[32px] font-normal leading-[39.36px]">
                  {" "}
                  It started with a small idea
                </h1>
                <p className="text-[18px] font-normal leading-[24.3px]">
                  A global brand with local beginnings, our story begain in a
                  small studio in South London in early 2014
                </p>
              </div>
              <button 
                  onClick={() => router.push('./product/product.tsx')}
              className="cursor-pointer hover:scale-[1.05] mt-[180px] mb-[30px] mr-[310px] text-[white]  gap-[10px]  bg-[#F9F9F926] h-[56px] w-[#F9F9F9] pt-[16px] pb-[16px] pr-[32px] pl-[32px] font-normal text-[16px] leading-[24px] text-center">
                View collection
              </button>
            </div>
            <Image
              src="/images/Image Block.svg"
              alt="Hero Image"
              width={630}
              height={478}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 w-[1440px] h-[444px]">
        <Image
          src="/images/Image.svg"
          alt="Hero Image"
          width={1440}
          height={444}
        />
        <div className=" space-y-3 text-white mb-[90px] ml-[484px]">
          <div className="flex h-[56px] w-[635px] pr-[60px]">
            <input
              type="text"
              placeholder="your@email.com"
              className="cursor-pointer text-[#2A254B] w-[509px] h-[56px] bg-[white] items-center pl-[36px] font-normal text-[16px] leading-[21.6px]"
            />
            <button className="cursor-pointer text-[#FFFFFF] pt-[16px] gap-[10px] flex justify-center items-center bg-[#2A254B] h-[56px] w-[125px] pb-[16px] pr-[32px] pl-[32px] font-normal text-[16px] leading-[24px]">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
