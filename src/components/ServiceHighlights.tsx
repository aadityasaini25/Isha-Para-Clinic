export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Invisalign & Clear Aligners",
      image: "/images/ortho/invisalign_new.png",
      description:
        "Discreetly straighten your teeth with nearly invisible, removable aligners tailored to your smile.",
      benefits: [
        "Virtually invisible for a confident smile",
        "Removable for easy eating and oral hygiene",
        "Smooth, comfortable custom-fit plastic",
        "Predictable results with advanced 3D mapping",
      ],
    },
    {
      title: "Traditional Metal Braces",
      image: "/images/ortho/metal_new.png",
      description:
        "A highly effective and reliable solution for correcting complex orthodontic and alignment issues.",
      benefits: [
        "Proven results for children, teens, and adults",
        "Efficiently corrects severe crowding and gaps",
        "Durable stainless steel construction",
        "The most cost-effective orthodontic option",
      ],
    },
    {
      title: "Ceramic Aesthetic Braces",
      image: "/images/ortho/ceramic_new.png",
      description:
        "A less noticeable alternative to metal braces, featuring tooth-colored brackets that blend in.",
      benefits: [
        "Blends naturally with your tooth color",
        "Comfortable, rounded bracket design",
        "Effective for a wide range of corrections",
        "Resistant to staining and daily wear",
      ],
    },
    {
      title: "Advanced Dental Implants",
      image: "/images/ortho/dental_implant_3d.png",
      description:
        "A permanent and natural-looking solution for replacing missing teeth with medical-grade titanium posts.",
      benefits: [
        "Fused naturally with your jawbone",
        "Feels and functions like real teeth",
        "Prevents facial bone loss and aging",
        "Designed for lifetime durability",
      ],
    },
  ];

  return (
    <section className="relative bg-[#0a0c10] text-white py-20 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Specialized <span className="text-[#964782]">Dental Treatments</span>
        </h2>
        <div className="w-24 h-[2px] bg-[#964782] rounded-full mx-auto mb-10" />
        <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
          Premium care including Orthodontics, Aligners & Dental Implants. <br className="hidden md:block" /> Expert care led by our team of MDS specialists in Pune.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`bg-white/[0.02] border border-white/10 p-7 rounded-[32px] flex flex-col hover:border-[#964782]/40 hover:bg-white/[0.04] transition-all duration-700 hover-lift fade-up stagger-${index + 1} group border-beam cursor-default shadow-2xl relative overflow-hidden`}
            >
              {/* Image Area */}
              <div className="relative rounded-2xl mb-8 aspect-[4/3] flex items-center justify-center overflow-hidden bg-black/20 border border-white/5 p-1 shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#964782]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Text Area */}
              <div className="flex flex-col flex-grow items-center text-center px-2">
                <h3 className="font-bold mb-6 text-xl text-white group-hover:text-[#964782] transition-colors leading-tight min-h-[3rem] flex items-center">
                  {service.title}
                </h3>
                <p className="text-[14px] text-gray-400 leading-relaxed mb-10 min-h-[4.5rem] font-light">
                  {service.description}
                </p>
                
                {/* Benefits List */}
                <ul className="space-y-4 text-[13px] text-gray-300 w-full text-left">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <span className="text-yellow-500 mt-1 shrink-0 text-[10px]">✦</span>
                      <span className="leading-snug font-light">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}