import HeroSection from "@/component/HeroSection/HeroSection";
import Benefits from "@/component/Benifit/Benifit";
import DesignCards from "@/component/DesignCard/DesginCard";
import Form from "@/component/Form/Form";
import Gallery from "@/component/Gallery/Gallery";
import Layer from "@/component/Layer/Layer";
import Footer from "@/component/Footer/Footer";
import AboutSection from "@/component/About/about";
import TestimonialPage from "./testimonial/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection  />
      <DesignCards />
      <Benefits />
      <Gallery />
      <TestimonialPage />
      <Form />
      <Layer />
      <Footer /> 
    </>
  );
}
