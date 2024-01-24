import React from "react";

const Share = () => {
  return (
    <div className="relative w-[100vw] mt-[18.9vh]  pb-[12.56vh] border-t-[1px] border-b-[1px] border-solid border-[#744150] bg-[#FFE6CE] pl-[7.43vw] pt-[10.2vh] md:pt-[5.89vh] md:pl-[4.44vw] md:pb-[6.9vh]  overflow-hidden " >
 <img className="new absolute left-0 top-0 h-[100%] w-[73.71vw]  " src="thisimg.svg"></img>
 <img src="handss.png " className=" absolute bottom-[10px] right-0   md1:w-[63.3vw] sm:bottom-[75px] mob:right-[-5vw] mob:w-[217px]" />
      <div className=" w-[52.08vw] flex flex-col gap-[4.2vh] md:w-[66vw]">
        <div className=" font-gd text-[3rem] not-italic font-[400] leading-[61.44px] text-[#0F0D0A] mob1:text-[2rem] mob1:leading-[40.96px] ">Connect now with our experts for business enquiries</div>
        <div className="btn w-[205px] h-[64px] mob1:w-[165px] mob1:h-[56px] rounded-[12px] bg-[#762023] flex justify-center items-center gap-[12px]">
            <img src="logo.svg"></img>
            <div className=" text-[#FFF] font-[400] font-gd leading-[19.2px] tracking-[0.48px] not-italic text-[1rem] cursor-pointer">Whatsapp Now</div>
        </div>
      </div>
    </div>
  );
};

export default Share;
