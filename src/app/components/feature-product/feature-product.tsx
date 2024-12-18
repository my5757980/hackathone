import Image from "next/image"
export default function FeatureProduct(){
     return(
        <div>
         

               
              <p className="  text-[32px] leading-[35.2px] relative bottom-[-11px] left-[295px]">Featured Products</p>
              
               <div>
                <div className="relative top-[66px] left-[288px]">
              <Image className="hover:scale-125"src="/image/Image.png" alt="logo" width={212} height={312}/>
              
              <p className="font-normal text-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
              <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
              <Image className="relative bottom-[35px] left-[168px]" src="/image/Add Cart.png" alt="logo" width={44} height={44}/>
              <div className=" relative bottom-[288px] left-[22px] w-[49px] h-[26px] rounded-[4px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] bg-[#01AD5A]">
               <p className="font-medium text-[13px] leading-[14.3px] text-white">New</p>
         </div>
              </div>
         
         
              </div>
              <div>
                <div className="relative left-[555px] bottom-[255px]">
              <Image className="hover:scale-125"src="/image/Image (1).png" alt="logo" width={212} height={312}/>
              <p className="font-normal text-[16px] text-[#272343] leading-[]20.8px">Library Stool Chair</p>
              <p className=" text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
              <p className="relative bottom-[18px] left-[42px] font-normal text-[14px] leading-[15.4px] line-through text-[#9A9CAA]">$39</p>
              <Image className="relative bottom-[49px] left-[168px]" src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>
              <div className=" relative bottom-[308px] left-[15px] w-[49px] h-[26px] rounded-[4px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] bg-[#F5813F]">
               <p className="font-medium text-[13px] leading-[14.3px] text-white">Sales</p>
              </div>
              </div>
         
              </div>
              <div>
                <div className="relative bottom-[595px] left-[822px]">
              <Image className="hover:scale-125"src="/image/Image (2).png" alt="logo" width={212} height={312}/>
              <p className="font-normal text-[16px] text-[#272343] leading-[20.8px]">Library Stool Chair</p>
              <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
              <Image className="relative bottom-[35px] left-[168px]" src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>
              </div>
              </div>
              

              <div className="relative bottom-[895px] left-[1085px]">
              <Image className="hover:scale-125"src="/image/Image (3).png" alt="logo" width={212} height={312}/>
              <p className="font-normal text-[16px] text-[#272343] leading-[20.8px]">Library Stool Chair</p>
              <p className="text-[18px] leading-[19.8px] text-[#272343] ">$20</p>
              <Image className="relative bottom-[35px] left-[168px]" src="/image/Add Cart (1).png" alt="logo" width={44} height={44}/>
        </div>
        </div>
     )
}