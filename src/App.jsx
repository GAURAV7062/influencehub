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

function App() {
  return (
    <div className="bg-[#0B1120] text-white min-h-screen">
      <Navbar />
      <Hero/>
      <Stats/>
      <Services/>
      <WhyChooseUs/>
      <HowItWorks/>
      <About/>
      <Feedback />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;