import {
  FaBullseye,
  FaSearch,
  FaUsers,
  FaChartLine,
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaLaptopCode,
  FaCheckCircle,
  FaRocket,
  FaArrowRight,
  FaQuestionCircle,
  FaLightbulb,
  FaHandshake,
  FaChartBar,
  FaGlobe,
  FaAward,
} from "react-icons/fa";
export default function DigitalMarketing() {
  return (
    <main className="bg-[#0B1120] text-white">

      {/* ================= HERO SECTION ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-4xl">

          <span className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            <FaRocket />
            Digital Marketing Services
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Digital Marketing That
            <span className="text-blue-500"> Grows Your Business</span>
          </h1>

          <p className="text-gray-300 text-lg mt-6 leading-8">
            {"We help businesses increase their online presence..."}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

            <div className="bg-[#111827] rounded-xl p-5 text-center">
              <FaBullseye className="text-3xl text-blue-500 mx-auto mb-3" />
              <p className="font-semibold">More Leads</p>
            </div>

            <div className="bg-[#111827] rounded-xl p-5 text-center">
              <FaChartLine className="text-3xl text-blue-500 mx-auto mb-3" />
              <p className="font-semibold">Higher ROI</p>
            </div>

            <div className="bg-[#111827] rounded-xl p-5 text-center">
              <FaGlobe className="text-3xl text-blue-500 mx-auto mb-3" />
              <p className="font-semibold">Brand Visibility</p>
            </div>

            <div className="bg-[#111827] rounded-xl p-5 text-center">
              <FaRocket className="text-3xl text-blue-500 mx-auto mb-3" />
              <p className="font-semibold">Business Growth</p>
            </div>

          </div>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition">
            Book Free Consultation
          </button>

        </div>

      </section>
      {/* ================= WHAT IS DIGITAL MARKETING ================= */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="grid md:grid-cols-2 gap-16 items-center">

    <div className="flex justify-center">

      <div className="w-40 h-40 rounded-full bg-blue-600/20 flex items-center justify-center">

        <FaGlobe className="text-7xl text-blue-500" />

      </div>

    </div>

    <div>

      <h2 className="text-4xl font-bold mb-6">
        What is
        <span className="text-blue-500"> Digital Marketing?</span>
      </h2>

      <p className="text-gray-300 leading-8 mb-6">
        {"Digital marketing is the process of promoting your business, products, or services through online platforms such as Google, social media, email, websites, and search engines..........."}
      </p>

      <p className="text-gray-300 leading-8">
        {"/Unlike traditional advertising, digital marketing allows businesses to reach the right audience, track campaign performance, and continuously improve results using real-time data. Today, customers search online before making purchasing decisions. Digital marketing helps your business appear where your customers are already looking..."}
      </p>

    </div>

  </div>

</section>
{/* ================= WHY DIGITAL MARKETING MATTERS ================= */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-14">

    <h2 className="text-4xl font-bold">
      Why Digital Marketing
      <span className="text-blue-500"> Matters</span>
    </h2>

    <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
      Your customers are online every day. Digital marketing helps you reach
      them at the right time, increase your visibility, build trust, and grow
      your business with measurable results.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-[#111827] p-7 rounded-xl hover:bg-[#16213a] transition">
      <FaUsers className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Reach More Customers</h3>
      <p className="text-gray-300">
        Connect with people actively searching for your products and services.
      </p>
    </div>

    <div className="bg-[#111827] p-7 rounded-xl hover:bg-[#16213a] transition">
      <FaChartLine className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Increase Sales</h3>
      <p className="text-gray-300">
        Turn website visitors into paying customers through smart marketing strategies.
      </p>
    </div>

    <div className="bg-[#111827] p-7 rounded-xl hover:bg-[#16213a] transition">
      <FaBullseye className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Target the Right Audience</h3>
      <p className="text-gray-300">
        Reach people based on their interests, location, and buying behavior.
      </p>
    </div>

    <div className="bg-[#111827] p-7 rounded-xl hover:bg-[#16213a] transition">
      <FaGlobe className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Build Brand Awareness</h3>
      <p className="text-gray-300">
        Increase your online presence across search engines and social media.
      </p>
    </div>

    <div className="bg-[#111827] p-7 rounded-xl hover:bg-[#16213a] transition">
      <FaChartBar className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Measure Performance</h3>
      <p className="text-gray-300">
        Track clicks, leads, sales, and ROI with detailed analytics.
      </p>
    </div>

    <div className="bg-[#111827] p-7 rounded-xl hover:bg-[#16213a] transition">
      <FaRocket className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Grow Your Business</h3>
      <p className="text-gray-300">
        Scale your business with data-driven marketing campaigns that deliver long-term growth.
      </p>
    </div>

  </div>

</section>
{/* ================= OUR SERVICES ================= */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-14">

    <h2 className="text-4xl font-bold">
      Our Digital Marketing
      <span className="text-blue-500"> Services</span>
    </h2>

    <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
      We provide complete digital marketing solutions designed to increase
      traffic, generate quality leads, and grow your business online.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaSearch className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-2xl font-semibold mb-4">Search Engine Optimization</h3>
      <p className="text-gray-300">
        Improve your Google rankings and attract organic traffic with proven SEO strategies.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaFacebook className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-2xl font-semibold mb-4">Social Media Marketing</h3>
      <p className="text-gray-300">
        Grow your audience and build engagement across Facebook, Instagram, LinkedIn, and more.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaGoogle className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-2xl font-semibold mb-4">Google Ads (PPC)</h3>
      <p className="text-gray-300">
        Reach potential customers instantly with high-converting Google Ads campaigns.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaInstagram className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-2xl font-semibold mb-4">Instagram Marketing</h3>
      <p className="text-gray-300">
        Build a strong social presence with engaging posts, reels, and advertising campaigns.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaEnvelope className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-2xl font-semibold mb-4">Email Marketing</h3>
      <p className="text-gray-300">
        Stay connected with customers using personalized email campaigns that increase conversions.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaLaptopCode className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-2xl font-semibold mb-4">Website Optimization</h3>
      <p className="text-gray-300">
        Improve your website's speed, user experience, and conversion rate for better business results.
      </p>
    </div>

  </div>

</section>
{/* ================= HOW WE WORK ================= */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-16">

    <h2 className="text-4xl font-bold">
      How We <span className="text-blue-500">Work</span>
    </h2>

    <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
      Our proven process ensures every marketing campaign is planned,
      executed, and optimized to deliver the best possible results.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-[#111827] rounded-xl p-8 text-center hover:bg-[#16213a] transition">
      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
        1
      </div>

      <FaHandshake className="text-4xl text-blue-500 mx-auto mb-4" />

      <h3 className="text-xl font-semibold mb-3">
        Consultation
      </h3>

      <p className="text-gray-300">
        We understand your business, goals, audience, and challenges.
      </p>

    </div>

    <div className="bg-[#111827] rounded-xl p-8 text-center hover:bg-[#16213a] transition">
      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
        2
      </div>

      <FaLightbulb className="text-4xl text-blue-500 mx-auto mb-4" />

      <h3 className="text-xl font-semibold mb-3">
        Strategy
      </h3>

      <p className="text-gray-300">
        We create a customized digital marketing plan tailored to your business.
      </p>

    </div>

    <div className="bg-[#111827] rounded-xl p-8 text-center hover:bg-[#16213a] transition">
      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
        3
      </div>

      <FaRocket className="text-4xl text-blue-500 mx-auto mb-4" />

      <h3 className="text-xl font-semibold mb-3">
        Execution
      </h3>

      <p className="text-gray-300">
        Our experts launch and manage campaigns across the right digital channels.
      </p>

    </div>

    <div className="bg-[#111827] rounded-xl p-8 text-center hover:bg-[#16213a] transition">
      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
        4
      </div>

      <FaChartBar className="text-4xl text-blue-500 mx-auto mb-4" />

      <h3 className="text-xl font-semibold mb-3">
        Optimization
      </h3>

      <p className="text-gray-300">
        We monitor performance, optimize campaigns, and provide transparent reports.
      </p>

    </div>

  </div>

</section>
{/* ================= WHY CHOOSE INFLUENCEHUB ================= */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-14">

    <h2 className="text-4xl font-bold">
      Why Choose
      <span className="text-blue-500"> InfluenceHub?</span>
    </h2>

    <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
      We focus on delivering measurable growth through creative strategies,
      data-driven decisions, and dedicated support for every client.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaAward className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
      <p className="text-gray-300">
        Our professionals stay updated with the latest digital marketing trends and best practices.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaLightbulb className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Custom Strategies</h3>
      <p className="text-gray-300">
        Every business is unique, so we create marketing plans tailored to your goals.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaChartBar className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Transparent Reporting</h3>
      <p className="text-gray-300">
        Receive regular updates with clear insights into campaign performance and results.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaCheckCircle className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Results-Oriented</h3>
      <p className="text-gray-300">
        We focus on increasing traffic, generating leads, and improving conversions.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaHandshake className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
      <p className="text-gray-300">
        Our team works closely with you, providing guidance and support throughout your journey.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 hover:bg-[#16213a] transition">
      <FaRocket className="text-4xl text-blue-500 mb-5" />
      <h3 className="text-xl font-semibold mb-3">Long-Term Growth</h3>
      <p className="text-gray-300">
        We build sustainable marketing strategies that help your business grow over time.
      </p>
    </div>

  </div>

</section>
{/* ================= MARKETING PLATFORMS ================= */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-14">

    <h2 className="text-4xl font-bold">
      Marketing Platforms
      <span className="text-blue-500"> We Use</span>
    </h2>

    <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
      We use industry-leading platforms to help businesses reach the right audience,
      increase engagement, and drive measurable growth.
    </p>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

    <div className="bg-[#111827] rounded-xl p-6 text-center hover:bg-[#16213a] transition">
      <FaGoogle className="text-5xl text-blue-500 mx-auto mb-4" />
      <h3 className="font-semibold">Google</h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-6 text-center hover:bg-[#16213a] transition">
      <FaFacebook className="text-5xl text-blue-500 mx-auto mb-4" />
      <h3 className="font-semibold">Facebook</h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-6 text-center hover:bg-[#16213a] transition">
      <FaInstagram className="text-5xl text-blue-500 mx-auto mb-4" />
      <h3 className="font-semibold">Instagram</h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-6 text-center hover:bg-[#16213a] transition">
      <FaEnvelope className="text-5xl text-blue-500 mx-auto mb-4" />
      <h3 className="font-semibold">Email</h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-6 text-center hover:bg-[#16213a] transition">
      <FaChartBar className="text-5xl text-blue-500 mx-auto mb-4" />
      <h3 className="font-semibold">Analytics</h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-6 text-center hover:bg-[#16213a] transition">
      <FaGlobe className="text-5xl text-blue-500 mx-auto mb-4" />
      <h3 className="font-semibold">Web</h3>
    </div>

  </div>

</section>
{/* ================= CALL TO ACTION ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-10 md:p-16 text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready to Grow Your Business?
    </h2>

    <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-8 mb-10">
      Whether you're a startup, a small business, or an established company,
      our digital marketing experts are ready to help you increase visibility,
      generate quality leads, and achieve measurable growth.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5">

      <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition">
        Book Free Consultation
      </button>

      <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">
        Contact Us
      </button>

    </div>

  </div>

</section>
{/* ================= RESULTS ================= */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="text-center mb-14">

    <h2 className="text-4xl font-bold">
      Results You Can
      <span className="text-blue-500"> Expect</span>
    </h2>

    <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
      Our goal is to help your business grow through effective digital
      marketing strategies that deliver measurable and long-lasting results.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-[#111827] rounded-xl p-8 text-center">
      <FaChartLine className="text-5xl text-blue-500 mx-auto mb-5" />
      <h3 className="text-xl font-semibold mb-3">More Website Traffic</h3>
      <p className="text-gray-300">
        Attract more visitors who are interested in your products and services.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 text-center">
      <FaUsers className="text-5xl text-blue-500 mx-auto mb-5" />
      <h3 className="text-xl font-semibold mb-3">Quality Leads</h3>
      <p className="text-gray-300">
        Reach potential customers who are more likely to convert.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 text-center">
      <FaAward className="text-5xl text-blue-500 mx-auto mb-5" />
      <h3 className="text-xl font-semibold mb-3">Stronger Brand</h3>
      <p className="text-gray-300">
        Build trust and increase your brand's visibility online.
      </p>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 text-center">
      <FaRocket className="text-5xl text-blue-500 mx-auto mb-5" />
      <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
      <p className="text-gray-300">
        Achieve sustainable growth with data-driven marketing campaigns.
      </p>
    </div>

  </div>

</section>

    </main>
  );
}