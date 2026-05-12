'use client';

import { motion } from 'framer-motion';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

const facilityFeatures = [
  {
    title: 'Welcoming Reception',
    description: 'A calm, beautifully lit reception designed to put patients at ease from the moment they arrive.',
    accent: 'from-[#C8226E] to-[#9E1A56]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21V10l9-6 9 6v11" />
        <path d="M9 21v-7h6v7" />
        <circle cx="12" cy="9" r="1.4" />
      </svg>
    ),
  },
  {
    title: 'Comfort-First Waiting Area',
    description: 'Plush seating, soft ambient lighting, and a hospitality-grade environment — not a typical clinic queue.',
    accent: 'from-[#D4A95A] to-[#EBC97F]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" />
        <path d="M3 19h18" />
        <path d="M7 10V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3" />
      </svg>
    ),
  },
  {
    title: 'Advanced Operative Theatre',
    description: 'Laser & laparoscopic-ready theatre with HEPA-filtered air and surgical-grade lighting for precision.',
    accent: 'from-[#2A0F22] to-[#C8226E]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v3" />
        <path d="M5.5 5.5l2 2" />
        <path d="M18.5 5.5l-2 2" />
        <circle cx="12" cy="12" r="5" />
        <path d="M9 17l-1 5" />
        <path d="M15 17l1 5" />
      </svg>
    ),
  },
  {
    title: 'Strict Sterilisation Protocol',
    description: 'Autoclaved instruments, single-use disposables, and a 7-step sterilisation routine on every procedure.',
    accent: 'from-[#9E1A56] to-[#6B0F3A]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const trustStats = [
  { value: '25+', label: 'Years of Practice' },
  { value: '10K+', label: 'Procedures Performed' },
  { value: '4.9★', label: 'Patient Rating' },
  { value: '100%', label: 'Sterile Environment' },
];

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 bg-[#FAF6EE] overflow-hidden" id="gallery">
      {/* Decorative background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-[#C8226E]/8 blur-3xl" />
        <div className="absolute bottom-0 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#D4A95A]/10 blur-3xl" />
      </div>

      <div className="relative max-w-[95%] 2xl:max-w-screen-2xl mx-auto w-full">
        <p className="section-eyebrow mb-2">Our Facility</p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Inside <span className="text-gradient-teal">Isha-Para Clinic</span>
        </h2>
        <div className="w-16 h-0.5 bg-[#D4A95A] rounded-full mb-4" />
        <p className="text-slate-600 max-w-2xl mb-12 font-light text-base md:text-lg">
          D-21, Isha-Para Clinic, Near BSNL Office Chowraha, Haridwar.
          <br />
          <span className="text-sm font-medium opacity-80">A modern, sterile, well-equipped clinical environment built around patient comfort and surgical precision.</span>
        </p>

        {/* Feature cards — replaces the previous photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {facilityFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-[24px] overflow-hidden border-4 border-white bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              {/* Gradient backdrop */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-95`} />

              {/* Soft pattern */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
                  backgroundSize: '22px 22px',
                }}
              />

              {/* Glow orb */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl group-hover:bg-white/30 transition-colors duration-500" />

              {/* Content */}
              <div className="relative h-full p-6 md:p-7 flex flex-col justify-between text-white">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                  <div className="w-6 h-6">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold leading-tight mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/85 leading-relaxed font-light">{feature.description}</p>
                </div>
              </div>

              {/* Bottom shine on hover */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Location + trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] overflow-hidden border border-[#C8226E]/12 bg-gradient-to-br from-[#2A0F22] to-[#6B0F3A] text-white shadow-[0_20px_50px_-12px_rgba(42,15,34,0.18)] mb-12"
        >
          <div aria-hidden className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#D4A95A]/15 blur-3xl" />
          <div aria-hidden className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#C8226E]/30 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
            {/* Address */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium tracking-wide text-[#EBC97F] mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-7.5-7-12a7 7 0 1114 0c0 4.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Visit Us
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
                D-21, Isha-Para Clinic
              </h3>
              <p className="text-white/80 leading-relaxed font-light">
                Near BSNL Office Chowraha,<br />
                Haridwar, Uttarakhand
              </p>
            </div>

            {/* Info cards + CTA */}
            <div className="lg:col-span-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/8 border border-white/12 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#D4A95A] font-semibold mb-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                    Hours
                  </div>
                  <div className="text-sm text-white font-medium">Mon – Sat</div>
                  <div className="text-sm text-white/80">10:00 AM – 8:00 PM</div>
                </div>

                <div className="rounded-2xl bg-white/8 border border-white/12 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#D4A95A] font-semibold mb-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V21a1 1 0 01-1.11 1A19.94 19.94 0 012 5.11 1 1 0 013 4h4.09a1 1 0 011 .75c.27 1.07.66 2.1 1.16 3.06a1 1 0 01-.23 1.11L7.5 10.5a16 16 0 006 6l1.58-1.52a1 1 0 011.11-.23c.96.5 2 .89 3.06 1.16a1 1 0 01.75 1z" />
                    </svg>
                    Call
                  </div>
                  <a href="tel:+919756788082" className="block text-sm text-white font-medium hover:text-[#EBC97F] transition-colors">
                    +91 97567 88082
                  </a>
                  <div className="text-sm text-white/80">Tap to call</div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=My+Family+Dentist+Isha+Para+Clinic+Haridwar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D4A95A] hover:bg-[#EBC97F] text-[#2A0F22] font-semibold text-sm transition-colors"
              >
                Get Directions on Google Maps
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-5 md:p-6 text-center hover-lift"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-teal mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm font-medium text-slate-600 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <button onClick={onBookAppointment} className="btn-primary">
            Visit Our Clinic
          </button>
        </div>
      </div>
    </section>
  );
}
