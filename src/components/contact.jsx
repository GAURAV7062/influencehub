import { FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center">

        <span className="text-blue-500 font-semibold tracking-widest uppercase">
          Contact Us
        </span>

        <h2 className="text-5xl md:text-6xl font-bold mt-4">
          Let's Build Something
          <span className="text-blue-500"> Amazing</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Ready to grow your brand through powerful influencer marketing?
          Connect with us using any of the options below.
        </p>

      </div>

      <div className="flex justify-center gap-8 mt-16 flex-wrap">

        {/* Email */}
        <a
          href="mailto:influencehube@gmail.com"
          className="group w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-blue-600 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
          aria-label="Email"
        >
          <FaEnvelope className="text-3xl text-white group-hover:rotate-12 transition duration-300" />
        </a>

        {/* Phone */}
        <a
          href="tel:+917374900620"
          className="group w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
          aria-label="Phone"
        >
          <FaPhoneAlt className="text-3xl text-white group-hover:rotate-12 transition duration-300" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/punit_pandey_05/"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-20 h-20 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-pink-600 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
          aria-label="Instagram"
        >
          <FaInstagram className="text-3xl text-white group-hover:rotate-12 transition duration-300" />
        </a>

      </div>

      <div className="mt-16 text-center">
        <a
          href="mailto:hello@influencehub.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          Start Your Campaign
        </a>
      </div>
    </section>
  );
}