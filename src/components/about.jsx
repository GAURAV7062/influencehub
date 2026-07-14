export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-5xl font-bold mb-8">
            We Build Brands Through
            <span className="text-blue-500"> Creator Power</span>
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            At <span className="text-white font-semibold">InfluenceHub</span>,
            we believe great marketing starts with authentic connections.
            We partner brands with carefully selected creators who inspire trust,
            influence purchasing decisions, and deliver measurable business growth.
          </p>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            From campaign planning and creator management to performance
            tracking, we handle everything so your business can focus on growth.
          </p>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold">
            Learn More
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
          <h3 className="text-3xl font-bold mb-8 text-blue-500">
            Why Businesses Trust Us
          </h3>

          <ul className="space-y-5 text-lg">
            <li>✔ Strategic Influencer Partnerships</li>
            <li>✔ Performance-Driven Campaigns</li>
            <li>✔ Transparent Reporting</li>
            <li>✔ Dedicated Campaign Management</li>
            <li>✔ Affordable Marketing Solutions</li>
          </ul>
        </div>

      </div>
    </section>
  );
}