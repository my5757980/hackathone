import Image from "next/image"
export default function TopCategories(){
    return(
       <div>


 <div className="relative bottom-[600px]">
     <p className="text-[32px] leading-[35.2px] text-[#272343] relative bottom-[177px] left-[290px] font-bold"> Top categories</p>
    
     
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
   </div>
   
       </div>
    )
}