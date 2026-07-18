import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import WhyChooseUs from "./components/whychooseus";
import HowItWorks from "./components/howitworks";
import About from "./components/about";
import Feedback from "./components/feedback";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <About />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}