export default function Feedback() {
  return (
    <section
      id="feedback"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-5xl font-bold text-center">
        Client <span className="text-blue-500">Feedback</span>
      </h2>

      <p className="text-center text-gray-400 mt-4 mb-16">
        We'd love to hear your experience working with us.
      </p>

      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10">

        <div className="mb-6">
          <label className="block mb-2 text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-300">
            Company Name
          </label>

          <input
            type="text"
            placeholder="Your company"
            className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-300">
            Rating
          </label>

          <select
            className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
          >
            <option>⭐⭐⭐⭐⭐ Excellent</option>
            <option>⭐⭐⭐⭐ Very Good</option>
            <option>⭐⭐⭐ Good</option>
            <option>⭐⭐ Average</option>
            <option>⭐ Poor</option>
          </select>
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-gray-300">
            Your Feedback
          </label>

          <textarea
            rows="6"
            placeholder="Write your experience..."
            className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition">
          Submit Feedback
        </button>

      </div>
    </section>
  );
}