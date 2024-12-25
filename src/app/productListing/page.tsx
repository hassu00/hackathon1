"use client"
import React from "react";
import Image from "next/image";
import Footer from "../component footer/footer";
import Header from "../component header/header";
import { useRouter } from "next/navigation";

export default function ProductListing() {
  const router = useRouter();
  return (
    <div>
      <div className="gap-2 flex justify-center bg-[#2A254B] h-[41px] items-center">
        <Image
          src="/images/Delivery (1).svg"
          alt="Hero Image"
          width={16}
          height={16}
          className="leading-[18.9px]"
        />
        <div className="text-white text-[14px] font-normal leading-[18.9px]">
          Free delivery on all orders over £50 with code easter checkout
        </div>
      </div>
      <Header />
      <div className=" flex h-[759px]">
        <div className="w-[50%]">
          <Image
            src="/images/Image Left.svg"
            alt="Hero Image"
            width={305}
            height={759}
            className="w-full h-full"
          />
        </div>

        <div className="w-[50%]  flex justify-center mt-[51px]">
          <div className="flex flex-col w-[83%]">
            <div className="gap-[13px] flex flex-col mt-10 ml-10">
              <h1 className="text-[#2A254B] font-normal text-[36px] leading-[44.28px]">
                The Dandy Chair
              </h1>
              <h2 className="text-[#12131A] font-normal text-[24px] leading-[32.4px]">
                £250
              </h2>
            </div>

            <div className="flex gap-4 flex-col p-10">
              <h3 className="text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                Description
              </h3>
              <p className="text-[#505977] font-normal text-[16px] leading-[21.6px]">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>

              <ul className=" pl-6 gap-2 flex-col flex list-disc text-[#505977] font-normal text-[16px] leading-[21.6px]">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>

              <div className="pt-10 gap-[28px] flex flex-col text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                <h2>Dimensions</h2>

                <div className="flex gap-[57px]">
                  <div className="gap-3 flex flex-col">
                    <h3 className="text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                      Height
                    </h3>
                    <p className="text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                      110cm
                    </p>
                  </div>

                  <div className="gap-3 flex flex-col">
                    <h3 className="text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                      Width
                    </h3>
                    <p className="text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                      75cm
                    </p>
                  </div>

                  <div className="gap-3 flex flex-col">
                    <h3 className="text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                      Depth
                    </h3>
                    <p className="text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                      50cm
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-10">
                <div className="flex w-[200px] gap-[60px] items-center">
                  <div className="text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                    Amount:
                  </div>
                  <div className="w-[122px] text-center h-[46px] pt-[12px] pb-[12px] pr-[16px] pl-[16px] bg-[#F9F9F9] text-[#2A254B] font-normal text-[16px] leading-[19.68px]">
                    1
                  </div>
                </div>
                <button className="bg-[#2A254B] cursor-pointer hover:scale-[1.05] text-[white] gap-[10px] h-[56px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] font-normal text-[16px] leading-[24px] text-center mt-4">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid lg:grid-rows-5  h-[761px] max-w-screen-2xl ">
        <div className="text-[#2A254B] font-normal text-[32px] leading-[39.28px] pt-[80px] pl-[80px]">
        You might also like
        </div>   
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
            className="bg-[#F9F9F9] cursor-pointer hover:scale-[1.05] text-[#2A254B]  gap-[10px] text-center  h-[56px] w-[#F9F9F9] pt-[16px] pb-[16px] pr-[32px] pl-[32px] font-normal text-[16px] leading-[24px]"
          >
            View collection
          </button>
        </div>
      </div>

    <div className="grid grid-rows-4 max-w-screen-2xl h-[476px] ">
        <div className="flex flex-col justify-center ">
          <p className="text-center font-normal text-[24px] leading-[33.6px] text-[#2A254B]">
            What makes our brand different
          </p>
        </div>
        <div className="row-span-3 max-w-screen-2xl">
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

      <div className="pt-9 grid grid-rows-1 max-w-screen-2xl h-[444px]">
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
