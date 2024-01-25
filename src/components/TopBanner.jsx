import React from 'react'
import Header from './Header'
import background from '../../public/topBanner.png'
function TopBanner() {
  return (
    <div id='hero' className="relative h-auto lg:pb-[6rem] md:pb-[4rem] xl:pb-[7.5rem] pb-[9.4rem] bg-cover bg-center" style={{backgroundImage: `url(${background.src})`  }}>
      <div className='text-[3.5rem] md:pt-[7rem] mob:pt-[5rem] lg:text-[2.8rem]  sm:text-[2rem] sm:w-[68vw] mini:w-[80vw] lg:w-[40rem] mob:pl-[1rem] mob:pr-0 md:w-[36rem] sm:leading-[2.5rem] md:pl-8 sm:pr-0 leading-[4.2rem] text-white w-[54rem] px-[6.5rem] lg:px-[5rem]  pt-[9.4rem]'>Grains of Goodness: Elevate Your Plate with Our Premium Rice Selection!</div>
      <button className={`z-10 w-[15.875rem] h-[3.8rem] mob:absolute bottom-[-1.75rem] sm:w-[10rem] sm:h-[3.6rem] bg-mar rounded-[0.75rem] mob:ml-[1rem] text-[1rem] md:mx-8 md:mt-[3rem] text-white lg:mx-[5rem] mx-[6.5rem] mt-[5rem] active:bg-white active:text-mar border border-mar`}>Order now</button>
    </div>
  )
}

export default TopBanner