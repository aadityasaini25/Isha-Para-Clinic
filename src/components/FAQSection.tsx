'use client';

import { useState } from 'react';

interface FAQSectionProps {
  onBookAppointment: () => void;
}

type FAQCategory = 'aligners' | 'implants';

export default function FAQSection({ onBookAppointment }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('aligners');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const alignerFAQs = [
    {
      question: "What are Clear Aligners (Invisalign)?",
      answer:
        "Clear aligners are a modern, nearly invisible alternative to traditional braces. They use a series of custom-made, removable plastic trays to gradually straighten your teeth without any wires or brackets.",
    },
    {
      question: "How long does Invisalign treatment take?",
      answer:
        "Personalized treatment duration (usually 6–18 months) depending on the complexity of your case. You'll see noticeable progress in just a few weeks!",
    },
    {
      question: "Are aligners more comfortable than braces?",
      answer:
        "Yes! Aligners are made of smooth, BPA-free plastic, so there are no sharp metal parts to irritate your mouth. Plus, they're removable, making it easy to eat, brush, and floss normally.",
    },
    {
      question: "How many hours a day should I wear my aligners?",
      answer:
        "For the best results, you should wear your aligners for 20 to 22 hours a day, only removing them to eat, drink (anything other than water), brush, and floss.",
    },
    {
      question: "Can I eat with my aligners on?",
      answer:
        "No, you should always remove your aligners before eating or drinking anything other than plain water. This prevents food from getting trapped and protects the aligners from staining or damage.",
    },
    {
      question: "Is Invisalign suitable for everyone?",
      answer:
        "Invisalign can treat a wide range of orthodontic issues, from simple teeth straightening to more complex bites. During your consultation, we'll use our 3D scanner to determine if aligners are the perfect fit for your smile goals.",
    }
  ];

  const implantFAQs = [
    {
      question: "What are Dental Implants?",
      answer:
        "Dental implants are artificial tooth roots, typically made of titanium, that provide a permanent base for fixed or removable replacement teeth. They are the closest thing to natural, healthy teeth.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care and good oral hygiene, dental implants are designed to be a permanent solution and can last a lifetime. In contrast, bridges and dentures typically need replacement every 5-10 years.",
    },
    {
      question: "Is the dental implant procedure painful?",
      answer:
        "Most patients report very little discomfort. The procedure is usually performed under local anesthesia, and any post-operative soreness is typically manageable with standard over-the-counter pain relievers.",
    },
    {
      question: "How long does the entire process take?",
      answer:
        "The timeline varies, but the entire process usually takes 3 to 6 months. This allows for 'osseointegration'—the process where the implant fuses with your jawbone—ensuring a strong and stable foundation for your new tooth.",
    },
    {
      question: "What is the success rate of dental implants?",
      answer:
        "Dental implants have a very high success rate, typically over 95%. At Beaudent, we use advanced 3D CBCT imaging and digitally guided surgery to ensure the most precise and successful outcomes for our patients.",
    },
    {
      question: "Am I a good candidate for dental implants?",
      answer:
        "Most adults with good general health and adequate bone density are candidates for implants. Even if you have bone loss, we offer advanced procedures like bone grafting to help you become a candidate.",
    }
  ];

  const currentFAQs = activeCategory === 'aligners' ? alignerFAQs : implantFAQs;

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleCategoryChange = (category: FAQCategory) => {
    setActiveCategory(category);
    setOpenFAQ(null);
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-light">
            Everything you need to know about your smile transformation.
          </p>
        </div>

        {/* Tab Switching */}
        <div className="flex justify-center mb-12 p-1 bg-pink-50/50 rounded-2xl max-w-md mx-auto border border-pink-100">
          <button
            onClick={() => handleCategoryChange('aligners')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'aligners'
                ? 'bg-[#5d2350] text-white shadow-lg'
                : 'text-[#5d2350] hover:bg-pink-100/50'
            }`}
          >
            Clear Aligners
          </button>
          <button
            onClick={() => handleCategoryChange('implants')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
              activeCategory === 'implants'
                ? 'bg-[#5d2350] text-white shadow-lg'
                : 'text-[#5d2350] hover:bg-pink-100/50'
            }`}
          >
            Dental Implants
          </button>
        </div>

        <div className="space-y-6">
          {currentFAQs.map((faq, index) => (
            <div key={index} className="card !p-0 overflow-hidden border border-pink-50 hover:border-pink-200 transition-colors shadow-sm hover:shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 text-left font-bold hover:bg-pink-50/30 transition-colors flex justify-between items-center group"
              >
                <span className="flex-grow pr-4 text-lg md:text-xl text-gray-800 group-hover:text-[#5d2350] transition-colors">
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full border border-pink-100 flex items-center justify-center text-[#5d2350] transform transition-all duration-300 ${openFAQ === index ? 'rotate-180 bg-[#5d2350] text-white border-[#5d2350]' : 'group-hover:border-pink-300'}`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-8 md:px-8 md:pb-10 bg-white">
                  <div className="w-full h-px bg-pink-50 mb-8"></div>
                  <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed mb-8">
                    {faq.answer}
                  </p>
                  <button
                    onClick={onBookAppointment}
                    className="inline-flex items-center gap-2 text-[#964782] font-bold text-lg hover:gap-3 transition-all group/btn"
                  >
                    Book Your Consultation
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}