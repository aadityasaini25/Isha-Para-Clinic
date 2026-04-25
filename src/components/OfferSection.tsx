'use client';

interface OfferSectionProps {
  onBookAppointment: () => void;
}

export default function OfferSection({ onBookAppointment }: OfferSectionProps) {
  const benefits = [
    "Up to 20% OFF on Invisalign treatment",
    "Free 3D Smile Scan (Worth ₹5000) with Invisalign treatment",
    "Outcome visualization before starting treatment",
    "Clear, transparent & comfortable aligners",
    "No food restrictions (remove aligners while eating)",
    "Fewer clinic visits compared to braces",
    "Advanced AI-based treatment planning"
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Background Decorative Element */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-60 -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 -z-10" />

          <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(150,71,130,0.05)] border border-pink-50 p-8 md:p-16 relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(150,71,130,0.1)] transition-all duration-700">
            {/* Animated border beam effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#964782]/10 rounded-[40px] transition-colors duration-700" />
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100 mb-6">
                  <span className="text-[#964782] text-xs font-bold tracking-widest uppercase">Limited Time Offer</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Limited Time <br />
                  <span className="text-[#964782]">Invisalign Offer</span>
                </h2>
                
                <p className="text-gray-600 text-lg mb-10 font-light leading-relaxed">
                  Start your journey to a perfect smile with the world’s most advanced clear aligner system at a special promotional price.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-10">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#964782]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#964782] transition-colors duration-300">
                        <svg className="w-3 h-3 text-[#964782] group-hover/item:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={onBookAppointment}
                  className="bg-[#964782] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#833e72] transition-all transform hover:scale-105 shadow-xl shadow-pink-500/20 active:scale-95"
                >
                  Book Appointment
                </button>
              </div>

              <div className="flex-1 relative w-full max-w-sm lg:max-w-none">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-square shadow-[0_20px_60px_rgba(0,0,0,0.15)] group-hover:shadow-[0_30px_80px_rgba(150,71,130,0.2)] transition-all duration-700">
                  {/* Top Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-gradient-to-r from-[#964782] to-[#B85C9D] text-white px-5 py-2.5 rounded-full text-sm font-black tracking-wider shadow-[0_8px_25px_rgba(150,71,130,0.4)] transform hover:scale-105 transition-transform">
                      UP TO 20% OFF
                    </div>
                  </div>

                  <img 
                    src="/images/promo/invisalign_promo.png" 
                    alt="Invisalign Treatment" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  
                  {/* Main Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                    <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-black text-3xl md:text-4xl tracking-tight leading-tight">
                        3D Smile Scan
                      </p>
                      <p className="text-white/95 text-lg font-semibold flex items-center gap-2">
                        <span className="text-pink-300">FREE</span>
                        <span className="text-sm font-medium opacity-90">with Invisalign Treatment</span>
                      </p>
                      
                      {/* Refined Bottom Tag */}
                      <div className="pt-4">
                        <div className="inline-flex items-center bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-white/20">
                          <span className="text-gray-900 font-bold text-sm tracking-tight">Worth ₹5000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small Disclaimer */}
                <p className="mt-6 text-[11px] text-gray-400 font-medium italic text-right lg:text-left opacity-80">
                  *Free scan applicable only with Invisalign treatment booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
