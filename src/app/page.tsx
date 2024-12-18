import FeatureProduct from "./components/feature-product/feature-product";
import HeroSection from "./components/hero-section/hero-section";
import Image from "next/image";
import TopCategories from "./components/top-categories/top-categories";
import OurProduct from "./components/our-product/our-product";
export default function Home(){
  return(
    <div className="max-w-[1920px] h-auto overflow-hidden">
      {/* <h1>welcome to home page</h1> */}
      <HeroSection/>
      <FeatureProduct />
      <TopCategories />
      <OurProduct />

      </div>





  )
}