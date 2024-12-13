import Image from "next/image"

export default function About(){
    return(
      <div className="max-w-[1920px] h-auto overflow-hidden  ">
        {/* <h1>welcome to About page</h1> */}

         
         <div className="ml-80">
        <div className="w-[472px] h-[378px] bg-[#007580]">
          <div className="pl-14 pt-12">
          <p className="font-bold text-[32px] leading-[38.73px] text-white">About Us - Comforty</p>
          <p className=" relative top-[22px] font-normal text-[14px] leading-[21.78px] text-white">At Comforty, we believe that the right chair can transform<br/> your space and elevate your comfort. Specializing in<br/> ergonomic design, premium materials, and modern <br/>aesthetics, we craft chairs that seamlessly blend style <br />with functionality. </p>
            <div className="relative top-[88px]">
            <button className=" bg-[#595959] opacity-15 w-[179px] h-[56px] pt-[16px] pr-[32px] pb-[16px] pl-[32px]"></button>
            <p className=" relative bottom-[42px] left-[37px] text-white font-normal text-[16px] leading-[24px]">View collection</p>
           </div>
           </div>
        </div>
        </div>

        <Image className="relative bottom-[380px] left-[844px]" src="/image/Image.png" alt="logo" width={377} height={477}/>
       <p className=" relative bottom-[266px] left-[477px] font-semibold text-[32px] leading-[35.2px] ">What makes our Brand Different</p>
      
      
      <div className="relative left-[11px]">
      <div className=" relative bottom-[122px] bg-[#F9F9F9] w-[309.45px] h-[244px] m-4">
      </div>
       <Image className="relative bottom-[344px] left-[44px]" src="/image/Delivery.png" alt="logo" width={24} height={24}/>
        <p className=" text-[#007580] relative bottom-[330px] left-[44px] font-normal text-[20px] leading-[28px] ">Next day as standard</p>
      <p className="text-[#007580] relative bottom-[310px] left-[44px]">Order before 3pm and get<br /> your order the next day as<br /> standard</p>
     </div>
     
     

         <div className="relative bottom-[400px] left-[333px]">
      <div className=" relative bottom-[122px] bg-[#F9F9F9] w-[309.45px] h-[244px] m-4">
     
     </div>
       <Image className="relative bottom-[344px] left-[44px]" src="/image/Checkmark--outline.png" alt="logo" width={24} height={24}/>
        <p className=" text-[#007580] relative bottom-[330px] left-[44px] font-normal text-[20px] leading-[28px] ">Made by true artisans</p>
      <p className="text-[#007580] relative bottom-[310px] left-[44px]">Handmade crafted goods<br/> made with real passion and<br/> craftmanship</p>
     </div>




     <div className="relative bottom-[799px] left-[656px]">
      <div className=" relative bottom-[122px] bg-[#F9F9F9] w-[309.45px] h-[244px] m-4">
     
      </div>
       <Image className="relative bottom-[344px] left-[44px]" src="/image/Purchase.png" alt="logo" width={24} height={24}/>
        <p className=" text-[#007580] relative bottom-[330px] left-[44px] font-normal text-[20px] leading-[28px] ">Unbeatable prices</p>
      <p className="text-[#007580] relative bottom-[310px] left-[44px]">For our materials and<br/> quality you won’t find better<br/> prices anywhere</p>
       </div>




       <div className="relative bottom-[1199px] left-[980px]">
      <div className=" relative bottom-[122px] bg-[#F9F9F9] w-[309.45px] h-[244px] m-4">
      </div>
       <Image className="relative bottom-[344px] left-[44px]" src="/image/Sprout.png" alt="logo" width={24} height={24}/>
        <p className=" text-[#007580] relative bottom-[330px] left-[44px] font-normal text-[20px] leading-[28px] ">Recycled packaging</p>
      <p className="text-[#007580] relative bottom-[310px] left-[44px]">We use 100% recycled to <br/>ensure our footprint is more<br /> manageable</p>
      </div>




      <p className=" relative bottom-[1355px] left-[55px] font-semibold text-[32px] leading-[35.2px]">Our Popular Products </p>
      
      <Image className="hover:scale-125 relative bottom-[1333px] left-[55px]"src="/image/Large.png" alt="logo" width={430} height={375}/>
     <div className="relative bottom-[1322px] left-[55px]">
     <p className=" text-[#2A254B] font-normal text-[20px] leading-[28px]">The Poplar suede sofa</p>
     <p className=" text-[#2A254B] font-normal text-[18px] leading-[27px]">$99.00</p>
     </div>
     <Image className=" hover:scale-125 overflow-hidden relative bottom-[1762px] left-[700px]"src="/image/Photo.png" alt="logo" width={305} height={375}/>
     <div className="relative bottom-[1750px] left-[700px]">
     <p className=" text-[#2A254B] font-normal text-[20px] leading-[28px]">The Dandy chair</p>
     <p className=" text-[#2A254B] font-normal text-[18px] leading-[27px]">$99.00</p>
     </div>
      <Image className=" hover:scale-125 overflow-hidden relative bottom-[2191px] left-[1022px]"src="/image/Parent.png" alt="logo" width={305} height={375}/>
      <div className="relative bottom-[2182px] left-[1022px]">
    
     <p className=" text-[#2A254B] font-normal text-[20px] leading-[28px]">The Dandy chair</p>
     <p className=" text-[#2A254B] font-normal text-[18px] leading-[27px]">$99.00</p>
     </div>

     <div className="mb-[-1800px]">

     </div>
    </div>
     
    
      
      
      
    )
  }