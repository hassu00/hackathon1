// "use client"
// import {useState} from 'react'
import React from "react";
// import Image from "next/image"
import Header from "../component header/header";
import Footer from "../component footer/footer";
import Image from "next/image";

export default function Cart() {
  // const [OpenMenu, setOpenMenu] = useState(false)
  return (
    <div>
      <Header />
      <div className="pt-10 flex flex-col justify-center items-center bg-[#F9F9F9] max-w-screen-2xl h-full">
        <div className=" w-[80%] flex flex-col ">
          <p className="mb-[90px] flex  text-[#2A254B] font-normal text-[36px] leading-[50.4px]">
            Your shopping cart
          </p>

          <div className="mt-[40px] flex justify-between items-center w-[93%]">
            <p className="font-normal text-[14px] leading-[19.6px] text-[#2A254B]">
              Product
            </p>
            <p className="ml-[270px] font-normal text-[14px] leading-[19.6px] text-[#2A254B]">
              Quantity
            </p>
            <p className="font-normal text-[14px] leading-[19.6px] text-[#2A254B]">
              Total
            </p>
          </div>

          <div className="border-t-[1px] border-[#EBE8F4]  mt-5 pt-5 flex justify-between items-center w-[93%]">
            <div className="flex gap-[21px]  h-[134px] justify-center items-center">
              <Image
                src="/images/Parent.svg"
                alt="Hero Image"
                width={109}
                height={134}
                objectFit="cover"
              />
              <div className=" flex w-[179px] h-[110px] flex-col gap-2 justify-center">
                <h3 className="font-normal text-[20px] leading-[28px] text-[#2A254B]">
                  Graystone vase
                </h3>
                <p className="font-normal text-[14px] leading-[21px] text-[#2A254B]">
                  A timeless ceramic vase with a tri color grey glaze.
                </p>
                <p className="font-normal text-[16px] leading-[24px] text-[#2A254B]">
                  £85
                </p>
              </div>
            </div>
            <div className="ml-[80px] pt-[12px] pb-[12px] pr-[16px] pl-[16px] h-[46px] w-[122px] flex items-center justify-center font-normal text-[16px] leading-[21px] text-[#2A254B]">
              1
            </div>
            <div className="font-normal text-[18px] leading-[27px] text-[#2A254B]">
            £85
            </div>
          </div>


          <div className="border-b-[1px] border-[#EBE8F4] mt-10 flex justify-between items-center w-[93%] pb-[30px] mb-[30px]">
            <div className="flex gap-[21px]  h-[134px] justify-center items-center">
              <Image
                src="/images/Parent.svg"
                alt="Hero Image"
                width={109}
                height={134}
                objectFit="cover"
              />
              <div className=" flex w-[179px] h-[110px] flex-col gap-2 justify-center">
                <h3 className="font-normal text-[20px] leading-[28px] text-[#2A254B]">
                  Graystone vase
                </h3>
                <p className="font-normal text-[14px] leading-[21px] text-[#2A254B]">
                  A timeless ceramic vase with a tri color grey glaze.
                </p>
                <p className="font-normal text-[16px] leading-[24px] text-[#2A254B]">
                  £85
                </p>
              </div>
            </div>
            <div className="ml-[80px] pt-[12px] pb-[12px] pr-[16px] pl-[16px] h-[46px] w-[122px] flex items-center justify-center font-normal text-[16px] leading-[21px] text-[#2A254B]">
              1
            </div>
            <div className="font-normal text-[18px] leading-[27px] text-[#2A254B]">
            £85
            </div>
          </div>

            
          <div className="flex flex-col items-end w-full mt-10 pb-[30px] mb-[30px]">
  <div className="flex flex-col gap-3 items-end">
    <div className="flex justify-end gap-4 w-full">
      <div className="font-normal text-[20px] leading-[28px] text-[#2A254B]">Subtotal</div>
      <div className="font-normal text-[24px] leading-[33.6px] text-[#2A254B]">£210</div>
    </div>
    <div className="font-normal text-[14px] leading-[21px] text-[#2A254B] text-right">
      Taxes and shipping are calculated at checkout
    </div>
  </div>
  <button
    className="bg-[#2A254B] cursor-pointer hover:scale-[1.05] text-[white] gap-[10px] h-[56px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] font-normal text-[16px] leading-[24px] text-center mt-4"
  >
    Go to checkout
  </button>
</div>

        </div>
      </div>
      {/* <footer className="flex flex-col  justify-center max-w-2xl items-center">
        <div className="grid grid-rows-5 h-[668px] max-w-2xl items-center bg-[#2A254B]">
          <div className="row-span-2 flex w-full  justify-center mx-auto">
            <div className="w-[50%] pl-[40px] flex-col justify-center items-center space-y-3 h-[206px]  mt-[58px]">
              <div className="font-normal text-[16px] leading-[19.6px] text-white">
                Categories
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Crockery
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Furniture
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Homeware
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Plant pots
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Chairs
              </div>
            </div>
            <div className="w-[50%] flex-col justify-center items-center space-y-3  h-[174px] mt-[58px]">
              <div className="font-normal text-[16px] leading-[19.6px] text-white">
                Menu
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                New arrivals
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Best sellers
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Recently viewed
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Popular this week
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                All products
              </div>
            </div>
          </div>

          <div className="row-span-2 w-full flex items-center pl-10">
            <div className="flex-col justify-center items-center space-y-3 h-[174px] w-[110px] mt-[58px]">
              <div className="font-normal text-[16px] leading-[19.6px] text-white">
                Our company
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                About us
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Vacancies
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Contact us
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Privacy
              </div>
              <div className="font-normal text-[14px] leading-[18.9px] text-white">
                Returns policy
              </div>
            </div>
          </div>

          <div className="row-span-1 p-7 max-w-2xl flex  flex-col justify-center items-center">
            <div className=" pt-[58px] space-y-3 text-white">
              <p className=" font-normal text-[16px] leading-[19.6px]">
                Join our mailing list
              </p>
              <div className="flex h-[56px] w-full ">
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="flex-grow  h-[56px] bg-[#FFFFFF26] items-center pl-[36px] font-normal text-[16px] leading-[21.6px]"
                />
                <button className="text-[#2A254B] pt-[16px] gap-[10px] flex justify-center items-center bg-white h-[56px] w-full pb-[16px] pr-[32px] pl-[32px] font-normal text-[16px] leading-[24px]">
                  Sign up
                </button>
              </div>
            </div>
            <div className="w-full text-center font-normal text-[14px] leading-[18.9px]">
              Copyright 2022 Avion LTD
            </div>
          </div>
        </div>
      </footer> */}

      <Footer />
    </div>
  );
}
