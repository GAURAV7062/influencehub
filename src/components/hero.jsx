import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 pt-40 pb-24"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
            🚀 Influencer Marketing Agency
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight">
            Influence That
            <span className="text-blue-500"> Converts.</span>
            <br />
            Marketing That
            <span className="text-blue-500"> Scales.</span>
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-8">
            We help brands grow through strategic influencer partnerships,
            authentic content, and performance-driven campaigns.
            From startups to established businesses, we connect you
            with the right creators to increase brand awareness,
            engagement, and sales.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

  <a
    href="https://www.instagram.com/punit__sharma___05?igsh=bTd1cTFseGZ0cWhv"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300"
  >
    Get Started
  </a>

  <a
    href="mailto:Influencehubee@gmail.com?subject=Free Consultation"
    className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300"
  >
    Book Free Consultation
  </a>

</div>

        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="InfluenceHub"
            className="w-96 rounded-3xl shadow-2xl"
         />
        </div>

      </div>
    </section>
  );
}