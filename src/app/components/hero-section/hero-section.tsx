import Image from "next/image"
export default function HeroSection(){
   return(
    <div className="max-w-[1920px] h-auto overflow-hidden ">
        <div>
         <Image className="relative left-[300px]" src="/image/BG.png" alt="logo" width={860} height={850}/>
         <p className="relative bottom-[410px] left-[400px] font-normal text-[14px] leading-[14px] tracking-[12%]">Welcome to chairy</p>
          <p className="relative bottom-[395px] left-[395px] font-bold text-[40px] leading-[40px] ">Best Furniture<br/> Collection for your<br/> interior.</p>
          
        </div>
        <button className=" relative bottom-[355px] left-[390px] flex gap-[14px] w-[171px] h-[52px] rounded-[8px] pt-[19px] pr-[24px] pb-[14px] pl-[31px] bg-[#029FAE]">
          <p className="text-[16px] leading-[17.6px] text-white">Shop Now</p>
          <Image className="relative top-[3px]" src="/image/Line.png" alt="logo" width={16} height={9}/>
          </button>

          <div className=" flex justify-between items-center w-[860px] h-[139px] relative left-[300px] bottom-[144px]">
            <Image src="/image/Logo.png" alt="logo" width={85} height={87}/>
            <Image src="/image/Logo (2).png" alt="logo" width={107} height={109}/>
            <Image src="/image/Logo (4).png" alt="logo" width={135} height={139}/>
            <Image src="/image/Logo (5).png" alt="logo" width={63} height={65}/>
            <Image src="/image/Logo (6).png" alt="logo" width={98} height={101}/>
            <Image src="/image/Logo (7).png" alt="logo" width={113} height={115}/>
            <Image src="/image/Logo (8).png" alt="logo" width={84} height={87}/>
            
            

          </div>
    
    </div>
   )
}