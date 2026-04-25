'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-header scrolled py-2' : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100">
            <Image
              src="/images/logo.svg"
              alt="Beaudent Dental Care"
              width={160}
              height={60}
              className="h-10 md:h-14 w-auto"
              priority
            />
          </div>
          <div className="hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5">Location</p>
            <a
              href="https://maps.app.goo.gl/bLNA5Y6CLCqocifu9"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[11px] leading-tight font-semibold text-gray-700 max-w-[280px] hover:text-[#964782] transition-colors"
            >
              F-18, First Floor, ABIL Imperial Commercial Spaces,<br />
              Rohan Seher Lane, Pancard Club Road, Baner, Pune – 411045
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden sm:block text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5">Contact Us</p>
            <div className="flex flex-col">
              <a href="tel:+918788305936" className="text-sm font-bold text-[#5d2350] hover:text-[#964782] transition-colors">
                +91 87883 05936
              </a>
              <a href="mailto:drankitanagrani@gmail.com" className="text-[11px] font-medium text-gray-600 hover:text-[#964782] transition-colors">
                drankitanagrani@gmail.com
              </a>
            </div>
          </div>
          <button
            onClick={onBookAppointment}
            className="bg-[#964782] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#7a326a] hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-md"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}