'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

const BOOKING_SCRIPT_URL = process.env.NEXT_PUBLIC_BOOKING_SCRIPT_URL || '';

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [treatmentType, setTreatmentType] = useState<string>('Aligners');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('fullName') as string,
      phone: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      treatment: treatmentType,
      concern: formData.get('dentalConcern') as string,
    };

    setIsSubmitting(true);
    try {
      if (BOOKING_SCRIPT_URL.trim()) {
        await fetch(BOOKING_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }
      onClose();
      router.push('/thank-you');
    } catch (error) {
      alert('Something went wrong. Please call us at +91 87883 05936 to book.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-all duration-500">
      <div className="bg-white rounded-[40px] shadow-3xl w-full max-w-2xl max-h-[92vh] overflow-y-auto relative border border-white/20 animate-fade-in">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#964782] hover:text-white transition-all duration-300 z-10"
        >
          &times;
        </button>

        <div className="p-8 md:p-12">
          {/* Header & Category */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
              Book Your <span className="text-[#964782]">Smile Slot</span>
            </h2>
          </div>

          {/* Pill Slider Treatment Selection */}
          <div className="mb-10 text-center">
            <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
              What are you interested in?
            </label>
            <div className="relative inline-flex items-center p-1.5 bg-gray-100 rounded-full w-full max-w-lg mx-auto overflow-hidden">
              {/* Sliding Background */}
              <div 
                className={`absolute h-[calc(100%-12px)] top-[6px] transition-all duration-500 ease-out bg-[#964782] rounded-full shadow-lg shadow-[#964782]/20 z-0 ${
                  treatmentType === 'Aligners' ? 'left-[6px] w-[calc(50%-6px)]' : 'left-1/2 w-[calc(50%-6px)]'
                }`}
              />
              
              <button
                type="button"
                onClick={() => setTreatmentType('Aligners')}
                className={`flex-1 relative z-10 py-3.5 px-4 font-bold text-sm md:text-base transition-colors duration-500 focus:outline-none ${
                  treatmentType === 'Aligners' ? 'text-white' : 'text-gray-500 hover:text-[#964782]'
                }`}
              >
                Clear Aligners
              </button>
              
              <button
                type="button"
                onClick={() => setTreatmentType('Implants')}
                className={`flex-1 relative z-10 py-3.5 px-4 font-bold text-sm md:text-base transition-colors duration-500 focus:outline-none ${
                  treatmentType === 'Implants' ? 'text-white' : 'text-gray-500 hover:text-[#964782]'
                }`}
              >
                Dental Implants
              </button>
            </div>
          </div>

          {/* Branded Countdown Timer */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#964782]/5 border border-[#964782]/20 text-[#964782] shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest">Offer expires in:</span>
              <div className="flex items-center gap-1 font-mono font-black text-lg">
                <span>{minutes.toString().padStart(2, '0')}</span>
                <span className="animate-pulse">:</span>
                <span>{seconds.toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full Name"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:border-[#964782]/50 focus:bg-white transition-all text-gray-800 font-medium placeholder:text-gray-400"
                />
              </div>
              <div className="relative group">
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:border-[#964782]/50 focus:bg-white transition-all text-gray-800 font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:border-[#964782]/50 focus:bg-white transition-all text-gray-800 font-medium placeholder:text-gray-400"
              />
            </div>

            <div className="relative group">
              <textarea
                name="dentalConcern"
                required
                rows={3}
                placeholder="Describe your dental concern..."
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 outline-none focus:border-[#964782]/50 focus:bg-white transition-all text-gray-800 font-medium placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative overflow-hidden bg-[#964782] text-white py-5 rounded-[24px] font-black text-xl shadow-2xl hover:shadow-[#964782]/40 active:scale-95 transition-all disabled:opacity-70 disabled:pointer-events-none"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Confirm Booking
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400 text-sm font-medium">
            Join the 5,000+ happy smiles at Beaudent
          </p>
        </div>
      </div>
    </div>
  );
}