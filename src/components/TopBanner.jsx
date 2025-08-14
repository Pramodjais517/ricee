'use client'
import React from "react";
import Header from "./Header";
import background from "../../public/topBanner.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-scroll'
import { useRef } from "react";

function TopBanner() {
  const navigate = useRef(null);
  const imagesData =[
    {
      id:1,
      src: background.src,
      title:" Grains of Goodness: Elevate Your Plate with our premium Kalanamak rice!"
      
    },
    // {
    //   id:2,
    //   src: background.src,
    //   title:" Grains of Goodness: Elevate Your Plate with Our Premium Rice Selection!"
      
    // },
    // {
    //   id:2,
    //   src: background.src,
    //   title:" Grains of Goodness: Elevate Your Plate with Our Premium Rice Selection!"
      
    // }
  ]
  const clickHandler = ()=>{
    navigate.current.scrollTo("products",{
      spy:true,
       smooth:true,
        offset:0,
         duration:200
    });
  }
  return (
  //   <Carousel showThumbs={false} infiniteLoop autoPlay>
  //   {imagesData.map((image)=>(
  //     <div
  //     key={image.id}
  //       id="hero"
  //       className="flex flex-col relative h-auto lg:pb-[6rem] md:pb-[4rem] xl:pb-[7.5rem] pb-[9.4rem] bg-cover bg-center"
  //       style={{ backgroundImage: `url(${image.src})` }}
  //     >
  //       <div className="   text-start text-[3.5rem] md:pt-[7rem] mob:pt-[5rem] lg:text-[2.8rem]  sm:text-[2rem] sm:w-[68vw] mini:w-[80vw] lg:w-[40rem] mob:pl-[1rem] mob:pr-0 md:w-[36rem] sm:leading-[2.5rem] md:pl-8 sm:pr-0 leading-[4.2rem] text-white w-[54rem] px-[6.5rem] lg:px-[5rem]  pt-[9.4rem]">
  //        {image.title}
  //       </div>
  //       <button
  //         className={`z-10 w-[15.875rem] h-[3.8rem] mob:absolute bottom-[-1.75rem] sm:w-[10rem] sm:h-[3.6rem] bg-mar rounded-[0.75rem] mob:ml-[1rem] text-[1rem] md:mx-8 md:mt-[3rem] text-white lg:mx-[5rem] mx-[6.5rem] mt-[5rem] hover:bg-white hover:text-mar border border-mar transition-hover duration-300`}
  //       >
  //         Order now
  //       </button>
  //     </div>
  //   ))}
      
     
      
  //   </Carousel>
  // );
  <div id='hero' className="relative h-auto lg:pb-[6rem] md:pb-[4rem] xl:pb-[7.5rem] pb-[9.4rem] bg-cover bg-center" style={{backgroundImage: `url(${background.src})`  }}>
  <div className='text-[3.5rem] md:pt-[7rem] mob:pt-[5rem] lg:text-[2.8rem]  sm:text-[2rem] sm:w-[68vw] mini:w-[80vw] lg:w-[40rem] mob:pl-[1rem] mob:pr-0 md:w-[36rem] sm:leading-[2.5rem] md:pl-8 sm:pr-0 leading-[4.2rem] text-white w-[54rem] px-[6.5rem] lg:px-[5rem]  pt-[9.4rem]'>Grains of Goodness: Elevate Your Plate with Our Premium Rice Selection!</div>
  <button onClick={clickHandler}  className={`z-10 w-[15.875rem] h-[3.8rem] mob:absolute bottom-[-1.75rem] sm:w-[10rem] sm:h-[3.6rem] bg-mar rounded-[0.75rem] mob:ml-[1rem] text-[1rem] md:mx-8 md:mt-[3rem] text-white lg:mx-[5rem] mx-[6.5rem] mt-[5rem] hover:bg-white hover:text-mar border border-mar transition-hover duration-300`}><Link className='cursor-pointer' ref={navigate} to="products" spy={true} smooth={true} offset={0} duration={200}>Explore now</Link></button>
</div>
)
}

export default TopBanner;
