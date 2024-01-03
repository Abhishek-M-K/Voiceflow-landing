import Carousel from "@/components/carousel";
import FirstSection from "./first-section/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Carousel />
    </div>
  );
}
