export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$199",
      features: [
        "Business Website",
        "Basic SEO",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "$499",
      features: [
        "AI Chatbot",
        "Premium Website",
        "SEO + Marketing",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Custom AI Solution",
        "Automation",
        "CRM Integration",
        "24/7 Support"
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-5xl font-bold text-center">
        Our <span className="text-blue-500">Pricing</span>
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Flexible plans for businesses of every size.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition"
          >

            <h3 className="text-3xl font-bold">
              {plan.name}
            </h3>

            <h2 className="text-5xl text-blue-500 font-bold mt-6">
              {plan.price}
            </h2>

            <ul className="mt-8 space-y-4 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>

            <button className="mt-10 w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl">
              Choose Plan
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}