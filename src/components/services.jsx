import photo1 from "../assets/services/photo1.jpg";
import photo2 from "../assets/services/photo2.jpg";
import photo3 from "../assets/services/photo3.jpg";
import photo4 from "../assets/services/photo4.jpg";
import photo5 from "../assets/services/photo5.jpg";
import photo6 from "../assets/services/photo6.jpg";
import photo7 from "../assets/services/photo7.jpg";
import photo8 from "../assets/services/photo8.jpg";

import {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaCamera,
  FaGlobe,
  FaInstagram,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Brand & Influencer Collaborations",
      image: photo1,
      icon: <FaBullhorn />,
    },
    {
      title: "Campaign Strategy",
      image: photo2,
      icon: <FaChartLine />,
    },
    {
      title: "Influencer Outreach & Management",
      image: photo3,
      icon: <FaUsers />,
    },
    {
      title: "Product Launch Campaigns",
      image: photo4,
      icon: <FaRocket />,
    },
    {
      title: "UGC Content Creation",
      image: photo5,
      icon: <FaCamera />,
    },
    {
      title: "Brand Awareness Campaigns",
      image: photo6,
      icon: <FaGlobe />,
    },
    {
      title: "Social Media Growth",
      image: photo7,
      icon: <FaInstagram />,
    },
    {
      title: "Campaign Analytics",
      image: photo8,
      icon: <FaChartBar />,
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-5 md:px-8 py-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Our <span className="text-blue-500">Services</span>
      </h2>

      <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto text-base md:text-lg">
        We help brands grow through strategic influencer marketing,
        authentic content, and measurable campaigns.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative h-80 overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-blue-500 transition-all duration-500 active:scale-95"
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover scale-105 md:scale-100 md:group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-blue-900/80 transition duration-500"></div>

            <div className="absolute top-5 left-5 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl text-white shadow-lg">
              {service.icon}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold leading-tight">
                {service.title}
              </h3>

              <div className="flex items-center justify-between mt-6">
                <span className="text-blue-400 font-semibold">
                  Learn More
                </span>

                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:translate-x-2 transition duration-300">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}