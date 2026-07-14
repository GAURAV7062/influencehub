import photo1 from "../assets/services/photo1.jpg";
import photo2 from "../assets/services/photo2.jpg";
import photo3 from "../assets/services/photo3.jpg";
import photo4 from "../assets/services/photo4.jpg";
import photo5 from "../assets/services/photo5.jpg";
import photo6 from "../assets/services/photo6.jpg";
import photo7 from "../assets/services/photo7.jpg";
import photo8 from "../assets/services/photo8.jpg";
export default function Services() {
  const services = [
  {
    title: "Brand & Influencer Collaborations",
    image: photo1,
  },
  {
    title: "Campaign Strategy",
    image: photo2,
  },
  {
    title: "Influencer Outreach & Management",
    image: photo3,
  },
  {
    title: "Product Launch Campaigns",
    image: photo4,
  },
  {
    title: "UGC Content Creation",
    image: photo5,
  },
  {
    title: "Brand Awareness Campaigns",
    image: photo6,
  },
  {
    title: "Social Media Growth",
    image: photo7,
  },
  {
    title: "Campaign Analytics",
    image: photo8,
  },
];
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold text-center">
        Our <span className="text-blue-500">Services</span>
      </h2>

      <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
        We help brands grow through strategic influencer marketing,
        authentic content, and measurable campaigns.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
  {services.map((service, index) => (
    <div
      key={index}
      className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300"></div>

      <div className="relative z-10 flex items-end h-full p-6">
        <h3 className="text-2xl font-bold text-white">
          {service.title}
        </h3>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}