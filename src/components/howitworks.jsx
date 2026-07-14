export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      text: "We understand your business, goals, target audience and campaign objectives.",
    },
    {
      number: "02",
      title: "Strategy",
      text: "We build a customized influencer marketing strategy for your brand.",
    },
    {
      number: "03",
      title: "Creator Selection",
      text: "We carefully select creators who perfectly match your audience.",
    },
    {
      number: "04",
      title: "Campaign Launch",
      text: "We manage content creation, approvals, publishing and campaign execution.",
    },
    {
      number: "05",
      title: "Performance Tracking",
      text: "Track campaign results with detailed analytics and optimization.",
    },
  ];

  return (
    <section
      id="how"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold text-center">
        How <span className="text-blue-500">It Works</span>
      </h2>

      <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
        A simple five-step process to launch successful influencer marketing
        campaigns.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
          >
            <div className="text-5xl font-bold text-blue-500 mb-6">
              {step.number}
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {step.title}
            </h3>

            <p className="text-gray-400">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}