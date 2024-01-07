import Carousel from "@/components/carousel";
import FirstSection from "./first-section/page";
import Navbar from "./navbar/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Carousel />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
