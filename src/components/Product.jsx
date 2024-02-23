"use client";
import React, { useState } from "react";
import Image from "next/image";
import Popup from "./popup";
import Nutripop from "../../public/nutripop.svg"
import Link from "next/link";
import bg from '../../public/prod-bg.svg'
import rice1 from '../../public/rice1.jpeg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Product({ background, weight, text1, price, imagesData }) {
  const [nutri, setNutri] = useState(false);
  const [active, setActive] = useState(false);
  const[showPopup,setShowPopup]=useState(false)
  const openPopup = () => {
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div className="z-10 bg-white rounded-[1.5rem] mob:w-[130vw]">
      <div
  className={` flex pt-[2rem] pb-8 mob:p-0 items-center font-gd relative gap-[2rem] mob:flex-col mob:h-[52rem]  mob:w-[130vw] w-[54.6rem] h-[25.8rem]`}
>
  <div className="mob:w-[130vw]">
<Carousel className="w-[18rem] mob:h-[24rem] mini:h-[21rem]  mob:w-[130vw] relative rounded-l-[1.5rem] " showArrows={false} showStatus={false} showThumbs={false} infiniteLoop autoPlay>
    {imagesData.map((image)=>(
<div
          key={image.id}
          className={`min-w-[18rem] bg-center mob:w-[100%] mob:bg-cover bg-no-repeat mob:min-w-[15rem] h-[25.8rem] mob:h-[25rem] mini:h-[21rem] mob:rounded-bl-none mob:rounded-t-[1rem] rounded-l-[1.5rem] flex items-center bg-contain justify-center`}
          style={{backgroundImage: `url(${image.src})`}}>
            
          {/* <Image
            src={background}
            className="mb-[-2rem]"
          /> */}
          </div>))}
          </Carousel>
          </div>
          <div className="p-[1rem] mob:pr-[2rem] pr-[2rem] gap-[0.8rem] h-full flex w-full justify-around flex-col mob:px-[2rem] mini1:px-[2.5rem]">
<span className="text-[2.2rem]">
{text1}
</span>
{/* <span className=" text-[1.125rem] leading-[1.44rem]">
Rich in Iron & Zinc<br/>Diabetic friendly (GI {'<'} 55)<br/>Rich in Antioxidants <q>Anthocyanin</q><br/>Improves heart & skin health.
</span> */}
<div className="text-[1.32rem] flex gap-2 h-8 items-center pb-7 pt-2 text-[#515151]">
  <span className="leading-[1.32rem] tracking-wide">Nutritional Contents</span>
  <div className="group">
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 15.8989H11V9.89893H9V15.8989ZM10 7.89893C10.2833 7.89893 10.521 7.80293 10.713 7.61093C10.905 7.41893 11.0007 7.18159 11 6.89893C11 6.61559 10.904 6.37826 10.712 6.18693C10.52 5.99559 10.2827 5.89959 10 5.89893C9.71667 5.89893 9.47933 5.99493 9.288 6.18693C9.09667 6.37893 9.00067 6.61626 9 6.89893C9 7.18226 9.096 7.41993 9.288 7.61193C9.48 7.80393 9.71733 7.89959 10 7.89893ZM10 20.8989C8.61667 20.8989 7.31667 20.6363 6.1 20.1109C4.88333 19.5856 3.825 18.8733 2.925 17.9739C2.025 17.0739 1.31267 16.0156 0.788 14.7989C0.263333 13.5823 0.000666667 12.2823 0 10.8989C0 9.51559 0.262667 8.21559 0.788 6.99893C1.31333 5.78226 2.02567 4.72393 2.925 3.82393C3.825 2.92393 4.88333 2.21159 6.1 1.68693C7.31667 1.16226 8.61667 0.899592 10 0.898926C11.3833 0.898926 12.6833 1.16159 13.9 1.68693C15.1167 2.21226 16.175 2.92459 17.075 3.82393C17.975 4.72393 18.6877 5.78226 19.213 6.99893C19.7383 8.21559 20.0007 9.51559 20 10.8989C20 12.2823 19.7373 13.5823 19.212 14.7989C18.6867 16.0156 17.9743 17.0739 17.075 17.9739C16.175 18.8739 15.1167 19.5866 13.9 20.1119C12.6833 20.6373 11.3833 20.8996 10 20.8989ZM10 18.8989C12.2333 18.8989 14.125 18.1239 15.675 16.5739C17.225 15.0239 18 13.1323 18 10.8989C18 8.66559 17.225 6.77393 15.675 5.22393C14.125 3.67393 12.2333 2.89893 10 2.89893C7.76667 2.89893 5.875 3.67393 4.325 5.22393C2.775 6.77393 2 8.66559 2 10.8989C2 13.1323 2.775 15.0239 4.325 16.5739C5.875 18.1239 7.76667 18.8989 10 18.8989Z" fill="#6F6F6F"/>
</svg>
<div className="absolute transition-all invisible group-hover:visible group-hover:block top-[2.5rem] mob:top-[29rem] right-[14rem] scale-0 group-hover:scale-100 group-hover:right-[6.3rem] mob:group-hover:right-[26%] mini1:group-hover:right-[20vw] mini:group-hover:right-[12vw]">
<div className="relative flex gap-[0.1rem] flex-col justify-center  p-[1rem] pl-[1.5rem] rounded-[0.75rem] bg-[#FFF8F2] w-[13.2rem] h-[12.25rem]">
<div className="absolute left-0 top-[44%] transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-[#FFF8F2]">
</div>
<span className=" block">Energy : 391 kcals</span>  <span className=" block">Protien : 9.60 gm</span> <span className=" block">Carbs
            : 92.90gm </span> <span className=" block">Iron : 38.20 mg</span><span className=" block">Zinc : 3.70 mg</span> 
</div>
</div>
</div>
</div>
<div className="flex items-end justify-between">
  <div className="flex flex-col gap-1">
    <div className="w-[5.68rem] rounded-[4px] h-[1.95rem] bg-[#9FFF97] text-[0.81rem] flex items-center justify-center">
Limited offer
    </div>
    <span className="text-[#515151] text-[1.25rem]">MRP:<span className="decoration-2 line-through">₹{price}</span> <span className="text-mar">40% off</span></span>
  <div className="flex items-top leading-[3.5rem] text-[3.5rem]">
  <span className="text-[1.125rem] leading-5">₹</span>{(price-price*0.4).toFixed(0)}/-
  </div>
  <span className="text-[#515151] text-[1.25rem]">FREE Delivery</span></div>
  <Link target="_blank" href={`https://wa.me/919540182525?text=Place+an+order+for+${weight==2?'1kg':'5kg'}+pack`}>
  <button
              className={`transition-hover duration-300 hover:bg-white hover:text-mar border border-mar w-[8.8rem] h-[3.5rem] bg-mar rounded-[0.75rem] text-[1.125rem] text-white`}
            >
              Buy now
            </button>
            </Link>
</div>
          </div>
        {/* <div
          className={`${
            weight == 2 ? "w-[15rem] h-[21.7rem]" : "w-[17.8rem] h-[21.7rem]"
          } flex items-center justify-center`}
        >
          <Image
            src={background}
            className="drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[1.5rem] text-black">{text1}</div>
          <div className="flex justify-between w-[28rem] items-center">
            <span className="text-[3rem] leading-[3rem] text-black">{weight==5?'₹1245':'₹249'}</span>
            <Link target="_blank" href={`https://wa.me/919540182525?text=Place+an+order+for+${weight==2?'1kg':'5kg'}+pack`}>
            <button
              className={`transition-hover duration-300 hover:bg-white hover:text-mar border border-mar w-[8.8rem] h-[3.5rem] bg-mar rounded-[0.75rem] text-[1.125rem] text-white`}
            >
              Buy now
            </button>
            </Link>
          </div>
          <span
            className="text-[1.25rem] cursor-pointer text-[#762023]"
            onClick={openPopup}
          >
            View more details
          </span>
        </div>
      </div>
      <div className={`relative w-[31.5rem]   flex-col gap-[8.1px] bg-[#fff] rounded-[16px] pt-[56px] px-[40px] pb-[44px] ${active ? 'flex' : 'hidden'}` }>
        <div className=" flex flex-col items-center gap-[0px] ">
          <div className="text-[2.5rem]  font-gd font-[400] leading-[57.6px]">
            Kalanamak Rice
          </div>
          <svg
            width="245"
            height="26"
            viewBox="0 0 245 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M85.7194 21.7049C85.0194 21.4049 84.4194 21.3049 83.9194 21.0049C83.6194 20.8049 83.2194 20.2049 83.2194 19.9049C83.2194 19.5049 83.7194 19.0049 84.1194 18.9049C85.3194 18.5049 86.5194 18.6049 87.6194 19.3049C88.4194 19.8049 88.8194 20.7049 88.6194 21.7049C88.3194 23.7049 86.7194 25.4049 84.7194 25.8049C82.6194 26.2049 80.1194 25.3049 79.1194 23.6049C78.7194 22.9049 78.5194 22.1049 78.6194 21.4049C78.6194 17.8049 80.0194 14.7049 82.4194 12.0049C83.5194 10.8049 85.0194 10.2049 86.5194 9.90489C87.1194 9.80489 87.7194 9.60489 88.7194 9.40489C86.7194 8.60489 85.0194 8.60489 83.3194 8.40489C82.5194 8.30489 81.6194 8.40488 80.8194 8.30488C77.5194 7.90488 75.0194 9.40487 73.0194 11.7049C70.8194 14.1049 69.5194 17.1049 69.1194 20.3049C69.1194 20.6049 69.0194 21.0049 69.1194 21.2049C69.3194 21.6049 69.6194 22.0049 70.0194 22.2049C70.2194 22.3049 70.8194 22.0049 70.9194 21.8049C71.1194 21.4049 71.0194 20.9049 71.0194 20.5049C71.0194 20.4049 70.7194 20.3049 70.6194 20.1049C70.4194 19.7049 70.1194 19.0049 70.2194 18.9049C70.6194 18.5049 71.2194 18.2049 71.7194 18.2049C72.9194 18.2049 73.8194 19.2049 74.0194 20.4049C74.3194 22.8049 72.5194 25.1049 70.4194 25.2049C67.8194 25.3049 65.9194 23.6049 66.1194 20.9049C66.3194 19.1049 66.7194 17.3049 67.4194 15.7049C68.2194 13.7049 69.5194 11.9049 70.6194 9.90489C70.3194 9.90489 69.9194 9.90486 69.5194 10.0049C67.1194 10.7049 64.9194 11.8049 63.3194 13.9049C63.1194 14.2049 62.8194 14.4049 62.6194 14.7049C58.7194 19.3049 53.9194 22.2049 47.8194 22.7049C44.4194 23.0049 40.9194 23.4049 37.5194 23.0049C35.0194 22.7049 32.9194 21.8049 31.0194 20.0049C29.3194 18.3049 27.4194 16.8049 25.5194 15.2049C22.5194 12.7049 19.1194 11.0049 15.3194 10.3049C12.5194 9.80488 9.81943 10.1049 7.11943 11.2049C5.51943 11.9049 4.51943 13.0049 4.11943 14.6049C3.91943 15.5049 3.71942 16.4049 3.71942 17.3049C3.61943 19.2049 4.11943 19.9049 6.01943 20.4049C7.11943 20.7049 8.21943 20.9049 9.41943 20.4049C10.3194 20.0049 10.9194 19.4049 11.2194 18.5049C11.6194 17.1049 10.7194 15.9049 9.21943 16.0049C8.81943 16.0049 8.41943 16.1049 8.01943 16.2049C7.51943 15.1049 7.61943 14.6049 8.31943 14.0049C9.51943 13.1049 11.1194 13.1049 12.3194 14.0049C14.5194 15.7049 14.9194 18.8049 13.3194 21.1049C12.0194 22.9049 10.2194 23.7049 8.01943 23.9049C7.61943 23.9049 7.11942 23.9049 6.71942 23.9049C1.81942 23.3049 -0.580574 21.1049 0.119426 15.7049C0.819426 10.5049 4.01943 7.50489 9.41943 6.90489C15.0194 6.30489 19.9194 8.10488 24.4194 11.3049C25.5194 12.1049 26.6194 13.0049 27.9194 14.0049C27.8194 13.1049 27.8194 12.5049 27.7194 12.0049C27.6194 9.30486 28.5194 7.00488 30.7194 5.30488C33.2194 3.50488 36.6194 4.00488 38.3194 6.30488C39.5194 7.90488 39.5194 9.70486 38.9194 11.5049C38.6194 12.6049 37.8194 13.2049 36.6194 13.3049C35.3194 13.4049 34.1194 13.3049 32.8194 13.3049C32.8194 12.1049 33.5194 11.3049 35.9194 9.50486C36.1194 8.60486 35.7194 7.90489 34.9194 7.40489C34.1194 6.90489 33.2194 7.20487 32.5194 7.70487C31.4194 8.40487 30.8194 9.50488 30.8194 10.8049C30.9194 13.6049 31.4194 16.2049 33.7194 18.2049C35.1194 19.4049 36.8194 19.9049 38.6194 19.9049C42.2194 19.8049 45.9194 19.5049 49.5194 19.1049C53.5194 18.7049 56.6194 16.4049 59.3194 13.6049C60.2194 12.7049 61.0194 11.7049 61.8194 10.7049C62.9194 9.30487 64.3194 8.30487 66.0194 7.60487C70.4194 5.80487 74.9194 4.70488 79.8194 4.80488C85.1194 5.00488 90.2194 5.60487 95.1194 7.60487C97.6194 8.60487 100.019 10.0049 102.119 11.8049C103.819 13.3049 105.619 14.8049 107.419 16.3049C107.719 16.5049 108.019 16.7049 108.219 17.0049C110.919 19.7049 113.919 19.3049 116.919 17.7049C117.519 17.4049 118.119 16.8049 118.419 16.2049C119.119 14.6049 119.119 12.9049 118.619 11.2049C118.319 10.4049 117.819 9.80489 116.919 9.90489C115.919 10.0049 115.619 10.7049 115.519 11.5049C115.519 12.2049 115.619 12.9049 115.719 13.6049C115.819 14.2049 115.919 14.9049 115.219 15.2049C114.519 15.5049 113.819 15.2049 113.519 14.6049C113.019 13.5049 112.619 12.4049 112.319 11.2049C112.219 10.7049 112.519 9.90486 112.819 9.50486C114.019 8.20486 115.519 7.30489 117.419 7.40489C118.719 7.50489 119.719 8.10487 120.419 9.20487C122.619 12.7049 121.619 17.6049 118.119 19.8049C117.319 20.3049 116.419 20.7049 115.519 21.1049C112.919 22.2049 110.319 22.1049 107.919 20.3049C105.319 18.3049 102.719 16.1049 100.019 14.1049C99.0194 13.3049 97.8194 12.5049 96.6194 12.2049C93.4194 11.2049 90.0194 11.3049 86.7194 12.1049C85.3194 12.4049 84.2194 13.3049 83.4194 14.5049C82.3194 16.3049 81.5194 18.2049 81.3194 20.3049C81.2194 21.9049 81.4194 22.3049 82.6194 22.8049C83.9194 23.3049 84.6194 23.1049 85.7194 21.7049Z"
              fill="#762023"
            />
            <path
              d="M158.919 21.6047C159.819 23.0047 160.419 23.3048 161.619 22.9048C162.819 22.5048 163.219 22.0047 163.119 20.6047C163.019 18.0047 162.019 15.6047 160.319 13.7047C159.719 13.0047 158.619 12.4047 157.719 12.2047C154.219 11.4047 150.719 11.3047 147.319 12.5047C146.519 12.8047 145.619 13.3047 144.919 13.8047C142.819 15.4047 140.919 17.1047 138.819 18.7047C138.019 19.3047 137.219 19.9048 136.519 20.4048C134.219 22.1048 131.819 22.2047 129.219 21.2047C127.519 20.6047 125.919 19.7048 124.619 18.4048C122.419 16.2048 122.519 11.3047 124.219 9.10473C125.219 7.80473 126.519 7.40473 128.019 7.60473C129.419 7.80473 130.519 8.50473 131.519 9.50473C131.919 9.90473 132.219 10.7047 132.219 11.3047C132.319 12.6047 131.719 13.8047 131.019 14.8047C130.619 15.3047 130.119 15.6048 129.419 15.4048C128.719 15.1048 128.719 14.5048 128.819 13.9048C128.919 13.0048 129.019 12.1047 128.919 11.2047C128.919 10.5047 128.419 10.1047 127.719 10.0047C126.919 9.90473 126.419 10.1047 126.119 10.8047C125.319 12.4047 125.419 14.1047 125.919 15.8047C126.319 17.2047 127.419 17.8047 128.719 18.2047C129.219 18.4047 129.719 18.6047 130.219 18.8047C131.919 19.3047 133.619 19.2047 135.019 18.0047C137.219 16.2047 139.419 14.6047 141.419 12.7047C145.919 8.50474 151.419 6.40473 157.419 5.50473C160.719 5.00473 164.219 4.90473 167.519 5.00473C171.719 5.00473 175.619 6.40474 179.319 8.20474C180.519 8.80474 181.519 9.90475 182.519 10.8047C183.819 12.1047 184.919 13.5047 186.219 14.8047C189.219 17.8047 192.919 19.1047 197.019 19.5047C199.719 19.8047 202.419 19.9048 205.219 19.9048C206.419 19.9048 207.619 19.6047 208.719 19.2047C210.419 18.6047 211.719 17.4047 212.319 15.8047C212.819 14.4047 213.219 12.9048 213.419 11.4048C213.619 9.90475 212.919 8.70475 211.719 7.80475C211.019 7.30475 210.219 7.00475 209.319 7.40475C208.619 7.70475 208.319 8.20473 208.319 9.50473C209.619 10.4047 210.719 11.4048 211.719 12.9048C210.019 13.3048 208.519 13.5047 206.919 13.0047C206.019 12.7047 205.419 11.9047 205.219 11.0047C204.719 8.30473 205.219 6.50475 207.319 4.90475C209.019 3.70475 211.819 3.90474 213.619 5.20474C215.619 6.70474 216.619 8.80475 216.519 11.4048C216.519 12.1048 216.419 12.8048 216.319 13.9048C217.019 13.3048 217.619 13.0047 218.019 12.5047C221.219 9.80473 224.819 7.80473 228.919 7.00473C232.019 6.40473 235.019 6.50473 238.019 7.60473C241.219 8.70473 243.119 11.0047 243.819 14.3047C243.919 14.8047 244.019 15.2047 244.119 15.7047C244.419 18.4047 244.319 21.1047 241.619 22.5047C238.719 24.1047 235.719 24.4047 232.819 22.7047C229.619 20.7047 229.119 16.4047 231.819 14.0047C233.119 12.9047 234.719 12.8047 236.019 13.8047C236.719 14.4047 237.219 15.0047 236.519 16.0047C236.019 15.9047 235.619 15.8047 235.119 15.8047C233.719 15.8047 232.919 16.9047 233.219 18.2047C233.519 19.5047 234.719 20.5047 236.319 20.5047C237.319 20.5047 238.319 20.2048 239.319 19.9048C240.219 19.6048 240.819 18.8047 240.719 17.8047C240.719 17.0047 240.619 16.2048 240.519 15.4048C240.119 13.1048 238.919 11.6047 236.719 10.8047C233.719 9.70475 230.719 9.70473 227.619 10.5047C224.319 11.4047 221.319 13.0047 218.719 15.2047C217.019 16.6047 215.219 18.0047 213.619 19.6047C211.419 21.9047 208.619 22.9048 205.619 22.9048C201.919 22.9048 198.219 22.6047 194.619 22.2047C189.819 21.6047 186.019 19.0047 182.819 15.6047C182.119 14.8047 181.319 14.0047 180.619 13.1047C179.019 11.1047 176.719 10.3047 174.419 9.60473C174.319 9.60473 174.119 9.70474 173.919 9.70474C174.919 11.4047 175.919 13.0047 176.819 14.7047C177.819 16.6047 178.419 18.6047 178.419 20.8047C178.419 23.4047 176.519 25.1047 174.019 25.0047C171.319 24.9047 169.919 21.2047 170.619 19.6047C171.019 18.6047 172.019 17.9047 173.019 18.0047C173.419 18.1047 174.019 18.3047 174.219 18.6047C174.419 18.9047 174.219 19.6047 173.919 19.8047C173.419 20.3047 173.019 20.8047 173.519 21.5047C174.019 22.2047 174.919 22.2048 175.219 21.4048C175.319 21.1048 175.419 20.7047 175.319 20.3047C174.419 15.2047 172.319 10.8047 167.319 8.50473C166.819 8.30473 166.319 8.10473 165.719 8.10473C162.519 8.00473 159.319 8.20475 156.119 8.90475C156.019 8.90475 155.919 9.00474 155.719 9.20474C156.419 9.40474 156.919 9.50473 157.519 9.60473C159.819 10.0047 161.619 11.2047 162.919 13.2047C164.419 15.5047 165.319 18.0047 165.519 20.8047C165.719 23.3047 163.819 25.5047 160.519 25.7047C158.019 25.8047 155.619 23.7047 155.419 21.2047C155.419 20.3047 155.719 19.5047 156.519 19.1047C157.519 18.5047 158.719 18.4047 159.819 18.7047C160.219 18.8047 160.719 19.4047 160.819 19.8047C160.919 20.1047 160.419 20.6048 160.019 20.9048C160.119 21.3048 159.619 21.4047 158.919 21.6047Z"
              fill="#762023"
            />
            <path
              d="M22.3196 6.10464C20.3196 6.10464 18.6196 4.70466 18.6196 2.90466C18.6196 1.30466 20.1196 0.00463867 21.9196 0.00463867C23.8196 0.00463867 25.5196 1.60466 25.5196 3.30466C25.5196 4.90466 24.1196 6.10464 22.3196 6.10464Z"
              fill="#762023"
            />
            <path
              d="M222.62 6.10474C220.32 6.10474 219.02 4.80474 219.12 3.10474C219.22 1.40474 221.12 -0.0952689 222.92 0.00473111C224.32 0.104731 225.62 1.00474 225.92 2.20474C226.22 3.50474 225.52 4.90474 224.12 5.60474C223.62 5.90474 222.92 6.00474 222.62 6.10474Z"
              fill="#762023"
            />
          </svg>
        </div>
        <div className=" relative flex gap-0 w-[100%] justify-center flex-shrink-0 mt-[40px]">
          <div className=" absolute left-0 top-[15px]">
            <img src="first.svg"></img>
          </div>
          <div className=" flex-shrink-0 z-10">
            <img src="rices.svg" />
          </div>
          <div className=" absolute right-0 top-[15px] ">
            {" "}
            <img src="coffee.svg" />
          </div>
        </div>
        <div className=" flex flex-col gap-[22px] font-[400] font-gd">
          <div className=" text-[14px]  leading-[21px] text-center">
            High in Protein as compared to normal rice (11%) Rich in Iron & Zinc
            Diabetic friendly (GI &lt; 55) Rich in Antioxidants
            Improves heart & skin health.
          </div>
          <div className=" flex gap-[3rem] ml-[2rem]">
            <div className=" text-[20px] w-[14.8rem] leading-[30px]">
              Nutritional Facts (100g) Energy : 391 kcals{" "}
              <span className=" block">Protien : 9.60 gm</span>{" "}
              <span className=" block">Carbs : 92.90gm </span>{" "}
              <span className=" block">Iron : 38.20 mg</span>
              <span className=" block">Zinc : 3.70 mg</span>
            </div>
             
            <div
              className="self-end underline text-[#762023] text-[16px] leading-[24px] cursor-pointer z-20"
            >
              Show less
            </div>
          </div>
        </div>
        <div className=" absolute right-0 bottom-0">
          <img src="foot.svg" />
        </div> */}
      </div>
    </div>
    {<Popup onClose={closePopup} show={showPopup}/>}
    </>
  );
}

export default Product;
