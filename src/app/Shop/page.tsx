import Image from "next/image"
import Footer from "../components/footer/footer"
export default function Shop(){
    return(
      <div className="max-w-[1920px]  overflow-hidden">
        {/* <h1>welcome to shop page</h1> */}
         <div className="relative left-[299px]">
       
        <Image className="relative top-[22px]" src="/image/Frame.png" alt="logo" width={150} height={150}/>
        <p className=" relative left-[544px] bottom-[138px] font-normal text-[15px] leading-[28px]">MRP: $99</p>
        </div>
        <div className="relative bottom-[155px] left-[466px]">
          <p className="font-medium text-[22px] leading-[33px] relative bottom-[31px] right-[166px]">Bag</p>
        <p className=" font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
        <p className="relative top-[11px] font-normal text-[15px] leading-[28px] text-[#757575]">Ashen Slate/Cobalt Bliss</p>
        <div className="flex gap-10">
        <p className=" relative top-[6px] font-normal text-[15px] leading-[28px] text-[#757575]">Size L</p>
        <p className=" relative top-[6px] font-normal text-[15px] leading-[28px] text-[#757575]">Quantity 1</p>
        </div>
        <div className="flex gap-10">
       <Image className="text-black relative top-[33px] "src="/image/Frame (1).png" alt="logo" width={24} height={24}/>
       <Image className="text-black relative top-[33px]"src="/image/Frame (2).png" alt="logo" width={24} height={24}/>
       
        </div>
        </div>
         


        <div className="relative left-[299px]">
        
        <Image src="/image/Frame (3).png" alt="logo" width={150} height={150}/>
        <p className=" relative left-[544px] bottom-[138px] font-normal text-[15px] leading-[28px]">MRP: $99</p>
        </div>
        <div className="relative bottom-[155px] left-[466px]">
        <p className=" font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
        <p className="relative top-[11px] font-normal text-[15px] leading-[28px] text-[#757575]">Ashen Slate/Cobalt Bliss</p>
        <div className="flex gap-10">
        <p className=" relative top-[6px] font-normal text-[15px] leading-[28px] text-[#757575]">Size L</p>
        <p className=" relative top-[6px] font-normal text-[15px] leading-[28px] text-[#757575]">Quantity 1</p>
        </div>
        <div className="flex gap-10">
       <Image className="text-black relative top-[33px] "src="/image/Frame (1).png" alt="logo" width={24} height={24}/>
       <Image className="text-black relative top-[33px]"src="/image/Frame (2).png" alt="logo" width={24} height={24}/>
        </div>
        
        </div>



        <div className="relative bottom-[555px] left-[333px]">
        <p className="relative top-[-30px] left-[656px] font-medium text-[21px] leading-[33px] text-black">Summary</p>
        <p className="relative left-[656px] font-normal text-[15px] leading-[28px] text-black">Subtotal</p>
        <p className="font-medium text-[14px] leading-[24px] relative left-[856px] bottom-[27px] text-black ">$198.00</p>
        <p className="relative left-[655px] font-normal text-[15px] leading-[28px] text-black ">Estimated Delivery & Handling</p>
        <p className=" relative left-[888px] bottom-[24px] text-black font-normal text-[15px] leading-[28px]">Free</p>
         <p className=" relative left-[655px] font-normal text-[14px] leading-[28px] text-black">Total</p>
          <p className=" relative left-[865px] bottom-[30px] font-medium text-[14px] leading-[24px] text-black">$198.00</p>
          <div className="relative left-[655px] top-[44px]">
          <div className="w-[334.67px] h-[60px] rounded-[30px] pt-[18px] pr-[100.8px] pb-[18px] pl-[100.8px] bg-[#029FaE]">
            <p className="text-white font-medium text-[15px] leading-[24px] ">Member Checkout</p>
            
            </div>
            
            
            </div>
            
          </div>
          
          <Footer />
        
      </div>
      
    )
  }