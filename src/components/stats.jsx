export default function Stats() {
  const stats = [
    { number: "100+", title: "Projects Completed" },
    { number: "50+", title: "Happy Clients" },
    { number: "98%", title: "Client Satisfaction" },
    { number: "24/7", title: "Support" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-blue-600/20 transition duration-300"
          >
            <h2 className="text-5xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="text-gray-400 mt-3">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}