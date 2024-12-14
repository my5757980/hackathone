import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <div className=" max-w-[1920px] h-auto overflow-hidden ">

            <div className="  h-[45px] bg-[#272343] pt-[14px] pr-[300px] pb-[14px] pl-[300px]">
                    <Image src="/image/check 1.png" alt="logo" width={16} height={16}/>
                    <p className="font-normal text-[13px] leading-[14.3px] text-white relative bottom-[14px] left-[25px]">Free shipping on all orders over $50</p>
                    <p className="text-[13px] leading-[16.9px] font-normal relative bottom-[30px] left-[800px] text-white ">Eng</p>
                    <Image className="text-white relative bottom-[38px] left-[830px] " src="/image/Vector (13).png" alt="logo" width={10} height={3.5}/>
                       <p className="font-normal text-[13px] leading-[16.9px] text-white relative bottom-[52px] left-[850px]">Faqs</p>
                       <Image className=" text-white relative bottom-[69px] left-[900px]" src="/image/alert-circle 1.png" alt="logo" width={16} height={16}/>
                       <p className="font-normal text-[13px] leading-[16.9px] relative bottom-[84px] left-[920px] text-white ">Need Help</p>
                      
            </div>  

             <div className="h-[84px] bg-[#F0F2F3] pt-[20px] pr-[300px] pb-[20px] pl-[300px]">
                <Image src="/image/Logo Icon.png" alt="logo" width={40} height={40}/>
                <p className="font-medium text-[26px] leading-[31.2px] relative bottom-[33px] left-[48px]">Comforty</p>
                <div className=" w-[120px] h-[44px] pt-[11px] pr-[16px] pb-[11px] pl-[16px] rounded-[8px] bg-white relative bottom-[67px] left-[877px]">
                    <Image className="text-[#272343] relative "src="/image/Buy 2.png" alt="logo" width={22} height={22}/>
                     <p className=" relative bottom-[15px] left-[33px] font-medium text-[12px] leading-[13.2px]">Cart</p>
                     <Image className="relative bottom-[33px] left-[66px]" src="/image/No.png" alt="logo" width={20} height={20}/>
                  </div> 
                       </div>

                     <div className="h-[74px] bg-white pt-[14px] pr-[300px] pb-[14px] pl-[300px] flex gap-[29px] items-center ">
                        <Link href="/">Home</Link>
                        <Link href="Shop">Shop</Link>
                        <Link href="Product">Product</Link>
                        <Link href="Pages">Pages</Link>
                        <Link href="About">About</Link>

                     </div>
                     <p className="relative bottom-[50px] left-[1150px] font-normal text-[14px] leading-[15.4px]"> Contact:</p>
                      <p className="relative bottom-[69px] left-[1210px]"> (808) 555-0111</p>
                           
                      

        </div>
    )
}