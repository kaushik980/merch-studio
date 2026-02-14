import {
  MessageCircle,
  FileSearch,
  Shirt,
  Truck,
} from "lucide-react";

export default function ProcessPage() {
  const steps = [
    {
      title: "Consultation",
      desc: "We discuss your requirements, audience, and brand values to define the perfect strategy.",
      icon: <MessageCircle size={60} className="text-[#8a5a2b]" />,
    },
    {
      title: "Custom Curation",
      desc: "Our team handpicks a unique selection of premium gifts and apparel tailored to your needs.",
      icon: <FileSearch size={60} className="text-[#8a5a2b]" />,
    },
    {
      title: "Branded Mockups",
      desc: "You receive digital mockups for approval, ensuring your brand is represented perfectly.",
      icon: <Shirt size={60} className="text-[#8a5a2b]" />,
    },
    {
      title: "Global Fulfillment",
      desc: "We handle all logistics, from secure packaging to timely delivery worldwide.",
      icon: <Truck size={60} className="text-[#8a5a2b]" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f2e8] to-[#f3d7b0] px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-20">
          The Process: From Concept to Delivery
        </h1>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Timeline Line */}
          <div className="hidden md:block absolute top-[85px] left-0 w-full">
            <div className="h-[3px] bg-[#8a5a2b] rounded-full"></div>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">

              {/* Icon */}
              <div className="mb-6">{step.icon}</div>

              {/* Dot */}
              <div className="hidden md:block w-5 h-5 bg-[#8a5a2b] rounded-full absolute top-[78px]"></div>

              {/* Title */}
              <h2 className="text-xl font-bold mt-12">
                {index + 1}. {step.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 mt-4 text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
