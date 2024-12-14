import Image from "next/image"

export default function Product(){
    return(
      <div className="max-w-[1920px] h-auto overflow-hidden">
        {/* <h1>welcome to product page</h1> */}


      
        <Image className="relative left-[55px]" src="/image/Image (15).png" alt="logo" width={475} height={475}/>
        <div className="relative bottom-[433px] left-[622px]">
        <p className="font-bold text-[60px] leading-[66px] text-[#272343]">Library Stool <br />Chair</p>
        <div className="relative top-[29px]">
        <div className="w-[144px] h-[44px] rounded-[100px] bg-[#029FAE] pt-[13px] pl-[22px]">
          <p className="text-white">$20.00 USD</p>
          </div>
          <hr className=" relative top-[22px] w-[521px] border-[1px] bg-[#D9D9D9]"/>
          <p className=" relative top-[55px] text-nowrap">Lorem ipsum dolor sit amet consectetur adipiscing<br /> elit Nullam tincidunt erat enim Lorem ipsum dolor<br /> sit amet consectetur adipiscing</p>
       <div className="relative top-[88px]">
        <button className="w-[212px] h-[63px] rounded-[8px] pt-[14px] pr-[24px] pb-[14px] pl-[24px] bg-[#029FAE]"></button>
        <p className="relative bottom-[40px] left-[70px] text-white font-medium text-[20px] leading-[22px]">Add To Cart</p>
        <Image className=" relative bottom-[66px] left-[22px]"src="/image/Buy 2 (1).png "alt="logo" width={19} height={29}/>
        </div>
        </div>
        </div>


        <p className="text-[28px] tracking-[8px] leading-[33.89px] font-bold relative bottom-[177px] left-[55px]">FEATURED PRODUCTS</p>
      <p className="font-bold text-[18px] leading-[21.78px] underline relative bottom-[210px] left-[1211px]">View all</p>
      <div className="flex gap-x-6 relative left-[99px] bottom-[99px]">
        <div>
      <Image className="hover:scale-125"src="/image/Image (13).png" alt="logo" width={210} height={263}/>
      <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
      <p className=" relative bottom-[127px] left-[177px] font-bold text-[14px] leading-[16.94] text-black">$99</p>
      </div>
      <div>
      <Image className="hover:scale-125"src="/image/Image.png" alt="logo" width={210} height={263}/>
      <p className="font-normal text-[16px] leading-[20.8px] text-[#272343]">Library Stool Chair</p>
      <p className=" relative bottom-[127px] left-[177px] font-bold text-[14px] leading-[16.94] text-black">$99</p>
      </div>
      <div>
      <Image className="hover:scale-125"src="/image/Image (6).png" alt="logo" width={210} height={263}/>
      <p className="text-[#272343] font-normal text-[16px] leading-[20.8px]">Library Stool Chair</p>
      <p className="relative bottom-[127px] left-[177px] font-bold text-[14px] leading-[16.94] text-black">$99</p>
      </div>
      <div>
      <Image className="hover:scale-125"src="/image/item-category 1.png" alt="logo" width={210} height={263}/>
      <p className="text-[#272343] font-normal text-[16px] leading-[20.8px]">Library Stool Chair</p>
      <p className=" relative bottom-[127px] left-[177px] font-bold text-[14px] leading-[16.94] text-black">$99</p>
      </div>
      <div>
      <Image className="hover:scale-125"src="/image/Image (10).png" alt="logo" width={210} height={263}/>
      <p className="text-[16px] font-normal leading-[20.8px] text-[#272343]">Library Stool Chair</p>
      <p className=" relative bottom-[127px] left-[177px] font-bold text-[14px] leading-[16.94] text-black">$99</p>
      </div>
      
      </div>





    
      </div>
    )
  }