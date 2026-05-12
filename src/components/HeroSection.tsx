'use client';

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Award, Zap, Activity } from "lucide-react";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

// Premium hero — eyebrow + offer chip + headline + dual CTA + trust strip.
// Motion: fade/slide on mount, hover scale on CTAs (no surprise on reduced-motion).
export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <p className="section-eyebrow mb-4">Isha-Para Clinic · Haridwar</p>

        {/* USP trust strip — the four real differentiators, no fake offer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 px-3 md:px-5 py-2.5 md:py-3 rounded-full bg-white/75 backdrop-blur-xl border border-[#C8226E]/15 shadow-lg shadow-[#C8226E]/5"
        >
          {[
            { icon: ShieldCheck, label: "All Insurance (TPA) Accepted" },
            { icon: Award, label: "25+ Years Experience" },
            { icon: Zap, label: "Advanced Laser Treatments" },
            { icon: Activity, label: "Minimally Invasive" },
          ].map((usp, i) => (
            <div
              key={usp.label}
              className="flex items-center gap-1.5 px-2.5 md:px-3 py-1 text-[11px] md:text-xs font-semibold text-slate-700"
            >
              <usp.icon className="w-3.5 h-3.5 text-[#C8226E]" strokeWidth={2.4} />
              <span>{usp.label}</span>
              {i < 3 && <span className="hidden md:inline text-slate-300 ml-1">·</span>}
            </div>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]"
        >
          Pain-Free, Minimally Invasive
          <br className="hidden md:block" />
          <span className="text-gradient-teal">Laser & Laparoscopic Surgery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Trusted by thousands across Uttarakhand — Dr. Deepak Kumar brings <span className="font-semibold text-slate-800">25+ years</span> of surgical excellence in advanced laser treatment for Piles, Fistula, Fissure, Varicose Veins, and laparoscopic procedures. <span className="font-semibold text-[#C8226E]">All insurance (TPA) accepted.</span>
        </motion.p>
      </motion.div>

      {/* Hero showcase: video + specializations card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:flex md:items-center md:justify-center md:gap-16 md:mb-12 max-w-5xl mx-auto"
      >
        <div className="relative rounded-3xl aspect-[9/16] md:aspect-auto md:h-[520px] md:w-[300px] mx-auto md:mx-0 mb-8 md:mb-0 md:flex-initial overflow-hidden shadow-2xl ring-4 ring-white ring-offset-2 ring-offset-[#FBEFF4]">
          {/* Branded hero poster — image-free composition built from layered gradients & SVG */}
          <div className="relative w-full h-full bg-gradient-to-br from-[#2A0F22] via-[#9E1A56] to-[#6B0F3A] overflow-hidden">
            {/* Soft glow orbs */}
            <div aria-hidden className="absolute -top-24 -right-16 w-64 h-64 rounded-full bg-[#D4A95A]/25 blur-3xl" />
            <div aria-hidden className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full bg-[#C8226E]/40 blur-3xl" />

            {/* Subtle dot grid */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
                backgroundSize: '18px 18px',
              }}
            />

            {/* Decorative orbital rings — center of the card */}
            <svg
              aria-hidden
              viewBox="0 0 300 520"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <radialGradient id="heroOrbGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4A95A" stopOpacity="0.55" />
                  <stop offset="60%" stopColor="#C8226E" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#C8226E" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="heroPulseLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#D4A95A" stopOpacity="0" />
                  <stop offset="50%" stopColor="#EBC97F" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4A95A" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Concentric orbital rings around the center motif */}
              <circle cx="150" cy="240" r="120" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" />
              <circle cx="150" cy="240" r="90" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
              <circle cx="150" cy="240" r="60" fill="none" stroke="#D4A95A" strokeOpacity="0.45" strokeWidth="1.2" strokeDasharray="3 5" />

              {/* Center glow */}
              <circle cx="150" cy="240" r="110" fill="url(#heroOrbGlow)" />

              {/* Central laser / pulse symbol */}
              <g transform="translate(150 240)">
                {/* Medical cross within a soft ring */}
                <circle r="34" fill="#ffffff" fillOpacity="0.08" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
                <rect x="-4" y="-18" width="8" height="36" rx="2" fill="#EBC97F" />
                <rect x="-18" y="-4" width="36" height="8" rx="2" fill="#EBC97F" />
                {/* Subtle pulsing dot */}
                <circle r="4" fill="#fff">
                  <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Heartbeat ECG line — bottom third */}
              <path
                d="M 0 380 L 60 380 L 80 380 L 95 350 L 110 410 L 125 360 L 140 400 L 160 380 L 300 380"
                fill="none"
                stroke="url(#heroPulseLine)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 0 380 L 60 380 L 80 380 L 95 350 L 110 410 L 125 360 L 140 400 L 160 380 L 300 380"
                fill="none"
                stroke="#EBC97F"
                strokeOpacity="0.35"
                strokeWidth="0.8"
                strokeLinecap="round"
              />

              {/* Top corner accents */}
              <path d="M 20 20 L 50 20" stroke="#D4A95A" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
              <path d="M 20 20 L 20 50" stroke="#D4A95A" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
              <path d="M 280 20 L 250 20" stroke="#D4A95A" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
              <path d="M 280 20 L 280 50" stroke="#D4A95A" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Content layer */}
            <div className="relative h-full w-full flex flex-col items-center text-center px-6 py-7 text-white">
              {/* Brand eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[10px] tracking-[0.18em] font-semibold text-[#EBC97F] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A95A] animate-pulse" />
                Isha-Para Clinic
              </div>

              {/* Top headline anchored under eyebrow */}
              <div className="mt-4">
                <p className="text-[11px] tracking-[0.25em] font-medium text-white/60 uppercase">Surgical Excellence</p>
                <h3 className="mt-1 text-xl md:text-2xl font-bold leading-tight">
                  Dr. Deepak Kumar
                </h3>
                <p className="text-[11px] text-[#EBC97F] font-semibold tracking-wider mt-0.5">MS · FIAGES · 25+ Yrs</p>
              </div>

              {/* Spacer pushes tagline to lower-middle, above the badge */}
              <div className="flex-1" />

              {/* Mid tagline (visible above center motif region) */}
              <div className="mb-[88px]">
                <p className="text-[10px] tracking-[0.3em] font-bold text-[#D4A95A] uppercase mb-2">Specializing In</p>
                <h4 className="text-base md:text-lg font-bold leading-tight">
                  Laser &amp; Laparoscopic<br />Surgery
                </h4>
                <div className="mx-auto mt-3 flex items-center justify-center gap-1.5">
                  <span className="w-6 h-px bg-[#D4A95A]/60" />
                  <span className="w-1 h-1 rounded-full bg-[#D4A95A]" />
                  <span className="w-6 h-px bg-[#D4A95A]/60" />
                </div>
                <p className="mt-3 text-[11px] text-white/75 font-light">Pain-Free · Daycare · Stitch-Less</p>
              </div>
            </div>
          </div>

          {/* Floating doctor credential badge */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-2xl border border-white/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8226E] to-[#2A0F22] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Trusted Surgeon</p>
              <p className="text-sm font-bold text-slate-900">25+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="relative md:w-[460px]">
          <div className="glass-premium p-8 md:p-10 rounded-[32px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8226E] opacity-5 blur-3xl -mr-16 -mt-16" />
            <h2 className="text-lg font-bold text-[#2A0F22] uppercase tracking-[0.2em] mb-8 border-b border-[#C8226E]/20 pb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C8226E]" />
              Our Specializations
            </h2>
            <ul className="space-y-5 mb-10 text-[15px] text-slate-700 font-medium">
              {[
                "Advanced Laser Treatment Specialist",
                "Laparoscopic & Minimally Invasive Surgery",
                "All Insurance (TPA) Accepted — Cashless",
                "25+ Years of Surgical Expertise",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#C8226E]/10 flex items-center justify-center group-hover:bg-[#C8226E] transition-colors duration-300">
                    <ShieldCheck className="w-4 h-4 text-[#C8226E] group-hover:text-white transition-colors" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <button
              onClick={onBookAppointment}
              className="w-full bg-[#2A0F22] text-white px-6 py-5 rounded-2xl text-base font-bold hover:bg-[#170818] transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </motion.div>

      {/* Dual primary CTAs — booking + direct call */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mt-14 md:mt-20"
      >
        <button
          onClick={onBookAppointment}
          className="bg-[#C8226E] text-white py-4 px-12 rounded-2xl font-bold text-lg shadow-xl shadow-[#C8226E]/25 hover:bg-[#9E1A56] transition-all hover:scale-105 active:scale-95 md:min-w-[260px]"
        >
          Book Your Appointment
        </button>
        <a
          href="tel:+919756788082"
          className="bg-white text-[#C8226E] border-2 border-[#C8226E]/30 py-4 px-12 rounded-2xl font-bold text-lg text-center hover:bg-[#FBEFF4] transition-all hover:scale-105 active:scale-95 md:min-w-[260px] flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          +91 97567 88082
        </a>
      </motion.div>
    </section>
  );
}
