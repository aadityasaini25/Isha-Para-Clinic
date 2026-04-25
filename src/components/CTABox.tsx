interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-[#5d2350] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          Schedule Your Consultation
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          Comprehensive evaluation and digital diagnostic scan included. We’re here to answer your questions and find a time that works for you.
        </p>
        <button
          onClick={onBookAppointment}
          className="relative group bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] text-[#3a1532] py-4 px-12 rounded-full font-bold text-lg hover:shadow-[0_8px_30px_rgb(212,175,55,0.4)] hover:-translate-y-1 overflow-hidden transition-all duration-300 ring-4 ring-white/10"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative flex items-center gap-2">
            Book Your Consultation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}