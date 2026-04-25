import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const clinicImages = [
    { src: '/images/clinic/clinic1.jpeg', alt: 'Modern Clinic Interior' },
    { src: '/images/clinic/clinic2.jpg', alt: 'Comfortable Reception Area' },
    { src: '/images/clinic/clinic3.jpeg', alt: 'Advanced Dental Lab' },
    { src: '/images/clinic/clinic4.jpeg', alt: 'State-of-the-art Equipment' },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-lavender" id="gallery">
      <div className="max-w-[95%] 2xl:max-w-screen-2xl mx-auto w-full">
        <p className="text-[#5d2350] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Facility</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Our Clinic</h2>
        <div className="w-16 h-0.5 bg-[#d4af37] rounded-full mb-4" />
        <p className="text-gray-600 max-w-xl mb-12">F-18, First Floor, ABIL Imperial Commercial Spaces, Rohan Seher Lane, Pancard Club Road, Baner, Pune, Maharashtra – 411045. <br/><span className="text-sm font-semibold opacity-70">(Above Durga Cafe / 2M Medico / Jio Life Chemist)</span></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {clinicImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md group border-4 border-white">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="btn-primary"
          >
            Visit Our Clinic
          </button>
        </div>
      </div>
    </section>
  );
}
