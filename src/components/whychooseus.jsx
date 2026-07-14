import {
  FaUsers,
  FaBullseye,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaRocket,
  FaClipboardCheck,
  FaAward,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaAward size={36} />,
      title: "500+ Successful Campaigns",
      text: "Helping brands achieve measurable growth through influencer marketing.",
    },
    {
      icon: <FaUsers size={36} />,
      title: "Verified Influencers",
      text: "We collaborate with trusted creators across multiple industries.",
    },
    {
      icon: <FaBullseye size={36} />,
      title: "Custom Strategies",
      text: "Every campaign is tailored to your business goals and audience.",
    },
    {
      icon: <FaChartLine size={36} />,
      title: "Performance Driven",
      text: "Focused on engagement, conversions, ROI, and long-term growth.",
    },
    {
      icon: <FaClipboardCheck size={36} />,
      title: "Transparent Reports",
      text: "Detailed campaign reports with complete performance analytics.",
    },
    {
      icon: <FaRocket size={36} />,
      title: "Fast Execution",
      text: "Launch campaigns quickly without compromising quality.",
    },
    {
      icon: <FaHandshake size={36} />,
      title: "Dedicated Support",
      text: "A personal campaign manager supports you every step of the way.",
    },
    {
      icon: <FaGlobe size={36} />,
      title: "Global Reach",
      text: "Access creators and audiences across different regions and markets.",
    },
  ];

  return (
    <section
      id="why"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold text-center">
        Why <span className="text-blue-500">Choose Us</span>
      </h2>

      <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
        We combine creativity, strategy, and data-driven marketing to help brands
        grow faster with trusted influencers.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            <div className="text-blue-500 flex justify-center mb-6">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-7">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}