import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="max-w-[1920px] h-auto overflow-hidden">

            <div className="h-[418px] bg-[#E1E3E5] ">
                <div className="relative top-[99px] left-[77px]">
                <div className="flex gap-1 relative top-[-7px]">
                <Image src="/image/Logo Icon.png" alt="logo" width={40} height={40}/>
                <p className="text-[26px] leading-[31.2px] text-[#272343]"> Comforty</p>
                </div>
                <p className="font-normal text-[16px] leading-[24px] text-[#272343]">Vivamus tristique odio sit amet velit semper<br/> eu posuere turpis interdum<br/> Cras egestas purus </p>
                <div className="flex gap-4 relative top-[11px] ">
                <FaFacebook  />
                <FaTwitter />
                <FaPinterest />
                <FaYoutube />
                </div>
                </div>

                <div className="relative bottom-[18px] left-[444px]">
                <p className=" relative bottom-[18px] font-medium text-[14px] leading-[15.4px] tracking-[6%] text-[#9A9CAA]">Category</p>
                <p className=" font-normal text-[16px] leading-[17.6px] text-[#272343]">Sofa</p>
                <p className=" relative top-[7px] font-normal text-[16px] leading-[17.6px] text-[#272343]">Armchair</p>
                <p className=" relative top-[15px] font-normal text-[16px] leading-[17.6px] text-[#272343]">Wing Chair</p>
                <p className=" relative top-[21px] font-normal text-[16px] leading-[17.6px] underline text-[#007580]">Desk Chair</p>
                <p className=" relative top-[27px] font-normal text-[16px] leading-[17.6px] text-[#272343]">wooden Chair</p>
                <p className=" relative top-[33px] font-normal text-[16px] leading-[17.6px] text-[#272343]">Park Bench</p>
              
            </div>

            <div className="relative bottom-[160px] left-[644px]">
            <p className="font-medium text-[14px] leading-[15.4px] tracking-[6%] text-[#9A9CAA]">Support</p>
            <p className=" relative top-[12px] font-normal text-[16px] leading-[17.6px] text-[#272343]">Help & Support</p>
            <p className=" relative top-[21px] font-normal text-[16px] leading-[17.6px] text-[#272343]">Tearms & Conditions</p>
            <p className=" relative top-[33px] font-normal text-[16px] leading-[17.6px] text-[#272343]">Privacy Policy</p>
            <p className=" relative top-[40px] font-normal text-[16px] leading-[17.6px] text-[#272343]">Help</p>
            </div>

            <div className="relative bottom-[244px] left-[866px]">
            <p className="relative bottom-[8px] font-medium text-[14px] leading-[15.4px] tracking-[6%]">Newsletter</p>
            <input className="rounded-[8px] border-[1px] font-normal text-[16px] leading-[33px]"placeholder="your email"/>
            <div className="relative bottom-[41px] left-[222px]">
             <button className="w-[127px] h-[46px] rounded-[8px] pt-[14px] pr-[24px] pb-[14px] pl-[24px] bg-[#029FAE]">
                <p className="text-white text-[16px] leading-[17.6px]">Subscribe</p>
                  </button>
                  <p className="relative right-[220px] top-[11px] font-normal text-[15px] leading-[22.5px] text-[#272343]">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/> Nullam tincidunt erat enim.</p>
             </div>
             </div>

             
            
            

            <p className=" relative bottom-[99px] left-[66px] font-normal leading-[21px] text-[14px] text-[#9A9CAA]">@ 2021 - Blogy - Designed & Develop by Zakirsoft</p>
             <Image className=" relative bottom-[122px] left-[877px]"src="/image/Group 13.png" alt="logo" width={130} height={27}/>

</div>
            


          


          
        </div>
    )
}