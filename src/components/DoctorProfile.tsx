import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

const doctors = [
  {
    name: "Dr. Ankita Nagrani",
    title: "Endodontist",
    image: "/images/doctor/Dr. Ankita Nagrani.png",
    description: "Dr. Ankita Nagrani is an expert Endodontist with 8-10 years of experience, specializing in root canals, laser dentistry, and advanced 3D scanning. She is committed to providing painless, personalized dental care.",
    highlights: [
      "Expert Endodontist",
      "8-10 Years of Clinical Experience",
      "Laser Dentistry Specialist",
      "Advanced 3D Technology Integration"
    ],
    footer: "Her exceptional expertise ensures every patient receives world-class treatment through meticulous attention to detail."
  }
];

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-[#964782] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Specialists</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Our Specialized and Experienced Dentist</h2>
          <div className="w-16 h-0.5 bg-[#964782] rounded-full mx-auto" />
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Our expert team is dedicated to providing premium dental care with a personalized approach.
          </p>
        </div>

        <div className="space-y-24">
          {doctors.map((doctor, index) => (
            <div key={index} className="max-w-6xl mx-auto hover-lift">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center md:items-start`}>
                <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100 shimmer-effect">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left mt-4 md:mt-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-[#964782] font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
                    {doctor.title}
                  </p>
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                    <p>{doctor.description}</p>
                    <ul className="space-y-2">
                      {doctor.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 justify-center md:justify-start">
                          <span className="text-[#964782] mt-1 shrink-0">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <p>{doctor.footer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#964782] text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-[#7a326a] transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Free Smile Consultation
          </button>
        </div>
      </div>
    </section>
  );
}