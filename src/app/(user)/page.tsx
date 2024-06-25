
import HeroIcons from "@/components/Home/HeroIcons";
import HomeAboutUs from "@/components/Home/HomeAboutUs";
import HomeSlider from "@/components/Home/Slider";
import Image from "next/image";
import ServicesPage from "./services/page";
import ServiceCards from "@/components/Home/HomeServiceBlock";
import HomePopularProducts from "@/components/Home/HomePopularProducts";

export default function Home() {
  return <>
    <HomeSlider />
    <HeroIcons />
    <div className="h-1 border-t border-solid	my-8"></div>
    <HomeAboutUs />
    <div className="h-1 border-t border-solid	my-8"></div>
    <ServiceCards />
    <div className="h-1 border-t border-solid	my-8"></div>
    <HomePopularProducts />
    <div className="h-1 border-t border-solid	my-8"></div>

  </>
}