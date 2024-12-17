import HeroSection from "./components/hero-section/hero-section";
import Image from "next/image";
export default function Home(){
  return(
    <div  className="max-w-[1920px] h-auto overflow-hidden ">
      {/* <h1>welcome to home page</h1> */}
      <HeroSection/>
      <div className="relative bottom-[-144px]">
     <p className="  text-[32px] leading-[35.2px] relative bottom-[177px] left-[295px]">Featured Products</p>
     <div className=" relative bottom-[133px] left-[295px] flex gap-[10px]">
      <div>
     <Image className="hover:scale-125"src="/image/Image.png" alt="logo" width={212} height={312}/>
     
     <p className="font-normal text-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
     <Image className="relative bottom-[35px] left-[168px]" src="/image/Add Cart.png" alt="logo" width={44} height={44}/>
     <div className=" relative bottom-[288px] left-[22px] w-[49px] h-[26px] rounded-[4px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] bg-[#01AD5A]">
      <p className="font-medium text-[13px] leading-[14.3px] text-white">New</p>

     </div>


     </div>
     <div>
     <Image className="hover:scale-125"src="/image/Image (1).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] text-[#272343] leading-[]20.8px">Library Stool Chair</p>
     <p className=" text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
     <p className="relative bottom-[18px] left-[42px] font-normal text-[14px] leading-[15.4px] line-through text-[#9A9CAA]">$39</p>
     <Image className="relative bottom-[49px] left-[168px]" src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>


     <div className=" relative bottom-[308px] left-[15px] w-[49px] h-[26px] rounded-[4px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] bg-[#F5813F]">
      <p className="font-medium text-[13px] leading-[14.3px] text-white">Sales</p>

     </div>

     </div>
     <div>
     <Image className="hover:scale-125"src="/image/Image (2).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] text-[#272343] leading-[20.8px]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
     <Image className="relative bottom-[35px] left-[168px]" src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>
     </div>
     <div>
     <Image className="hover:scale-125"src="/image/Image (3).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] text-[#272343] leading-[20.8px]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
     <Image className="relative bottom-[35px] left-[168px]" src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>
     <p className="text-[32px] leading-[35.2px] text-[#272343] relative right-[666px] font-bold"> Top categories</p>
    
     </div>
     


     
      </div>
      <div className="flex gap-[11px] relative bottom-[111px] left-[288px]">
        <div>
      <Image src="/image/Image (4).png" alt="logo" width={290} height={290}/>
      <div className="h-[85px] bg-zinc-900 opacity-90 relative bottom-[88px]">
        <div className="relative top-[23px] left-[15px]  ">
        <p className="text-white text-[17px] leading-[22px]">Wing Chair</p>
        <p className="text-white opacity-70 font-normal text-[14px] leading-[15.4px]">3,584 Products</p>
        </div>

      </div>
      </div>
      <div>
     <Image src="/image/Image (5).png" alt="logo" width={290} height={290}/>
     <div className="h-[85px] bg-zinc-900 opacity-90 relative bottom-[88px]">
     <div className="relative top-[23px] left-[15px]  ">
        <p className="text-white text-[17px] leading-[22px]">Wooden Chair</p>
        <p className="text-white opacity-70 font-normal text-[14px] leading-[15.4px]">157 Products</p>
        </div>



     </div>
     </div>
     <div>
     <Image src="/image/Image (6).png" alt="logo" width={290} height={290}/>
     <div className="h-[85px] bg-zinc-900 opacity-90 relative bottom-[88px]">
     <div className="relative top-[23px] left-[15px]  ">
        <p className="text-white text-[17px] leading-[22px]">Desk Chair</p>
        <p className="text-white opacity-70 font-normal text-[14px] leading-[15.4px]">154 Products</p>
        
        </div>


       



     </div>
     
     </div>
     
    </div>
    <Image className=" relative bottom-[44px] left-[288px]" src="/image/item-category 1.png" alt="logo" width={448} height={648}/>
    <div>
    <p className="  text-[31px] font-normal leading-[39.84px]  relative bottom-[1033px] right-[700px] rotate-[-90.3deg]">Explore new and popular styles</p>
    </div>
  
    <Image className=" relative bottom-[533px] left-[755px]"src="/image/01.png" alt="logo" width={212} height={312}/>
    <Image  className=" relative bottom-[510px] left-[755px]"src="/image/card.png" alt="logo" width={212} height={312}/>
    <Image className=" relative bottom-[722px] left-[977px]"src="/image/card (1).png" alt="logo" width={212} height={312}/>
    <Image  className=" relative bottom-[1170px] left-[977px]"src="/image/card (1).png" alt="logo" width={212} height={312}/>
    <p className="rotate-90 relative bottom-[680px] right-[400px] font-normal text-[31px] leading-[39.84px] " ></p>

    <p className="text-[32px] leading-[35.2] text-[#272343] relative top-[-1399px] left-[655px]">Our Products</p>
    <div className="flex gap-[18px]">
    <div className="relative bottom-[1800px] left-[290px]">
    <Image className="hover:scale-125"src="/image/Image.png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>

     <Image className="relative bottom-[33px] left-[170px]"src="/image/Add Cart.png" alt="logo" width={44} height={44}/>

     <div className=" relative bottom-[280px] left-[22px] w-[49px] h-[26px] rounded-[4px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] bg-[#01AD5A]">
      <p className="font-medium text-[13px] leading-[14.3px] text-white">New</p>

     </div>
     
     
    </div>



    <div className="relative bottom-[1800px] left-[290px]">
    <Image className="hover:scale-125"src="/image/Image (7).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
     <p className="relative bottom-[22px] left-[43px] line-through text-[#9A9CAA]">$39</p>

     <Image className="relative bottom-[57px] left-[170px]"src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>

     <div className=" relative bottom-[306px] left-[22px] w-[49px] h-[26px] rounded-[4px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] bg-[#F5813F]">
      <p className="font-medium text-[13px] leading-[14.3px] text-white">Sales</p>

     </div>
     
    </div>


    <div className="relative bottom-[1800px] left-[290px]">
    <Image className="hover:scale-125"src="/image/Image (8).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>

     <Image className="relative bottom-[33px] left-[170px]"src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>
     
     
    </div>


    <div className="relative bottom-[1800px] left-[290px]">
    <Image className="hover:scale-125"src="/image/Image (9).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>

     <Image className="relative bottom-[33px] left-[170px]"src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>
      



      
     
    </div>




    
    </div>










    <div className="flex gap-[18px]">
    <div className="relative bottom-[1800px] left-[290px]">
    <Image className="hover:scale-125"src="/image/Image (10).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>

     <Image className="  relative bottom-[33px] left-[170px]"src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>

     <div className=" relative bottom-[285px] left-[22px] w-[49px] h-[26px] rounded-[4px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] bg-[#01AD5A]">
      <p className="font-medium text-[13px] leading-[14.3px] text-white">New</p>

     </div>
     
     
    </div>



    <div className="relative bottom-[1800px] left-[290px]">
    <Image className="hover:scale-125"src="/image/Image (11).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
     <p className="relative bottom-[22px] left-[43px] line-through text-[#9A9CAA]">$39</p>

     <Image className="relative bottom-[57px] left-[170px]"src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>

     <div className=" relative bottom-[306px] left-[22px] w-[49px] h-[26px] rounded-[4px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] bg-[#F5813F]">
      <p className="font-medium text-[13px] leading-[14.3px] text-white">Sales</p>

     </div>
     
    </div>


    <div className="relative bottom-[1800px] left-[290px]">
    <Image className="hover:scale-125"src="/image/Image (13).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>

     <Image className="relative bottom-[33px] left-[170px]"src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>
     
     
    </div>


    <div className="relative bottom-[1800px] left-[290px]">
    <Image className="hover:scale-125"src="/image/Image (14).png" alt="logo" width={212} height={312}/>
     <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
     <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>

     <Image className="relative bottom-[33px] left-[170px]"src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>
     



      
     
    </div>




    
    </div>

    <div className="mb-[-1488px]">


    </div>

</div>


    </div>
  )
}