import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#301b2a] border-t border-white/5 pt-8 pb-4 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="bg-white p-3 md:p-4 rounded-xl inline-block mb-4 shadow-xl">
            <Image
              src="/images/logo.svg"
              alt="Beaudent Dental Care"
              width={160}
              height={60}
              className="h-10 md:h-14 w-auto opacity-100"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-xs md:text-sm">
            Beaudent Dental Care: Premium Endodontist and Laser dentistry specialists in Pune.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left mb-8">
          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Contact Us</h3>
            <div className="space-y-1 mt-2">
              <a href="tel:+918788305936" className="block text-[#964782] font-bold text-lg hover:scale-105 transition-transform inline-block">+91 87883 05936</a>

              <p className="text-gray-300 font-medium text-xs">Beaudent Dental Care</p>
              <a href="mailto:drankitanagrani@gmail.com" className="text-xs hover:text-[#964782] transition-colors block">drankitanagrani@gmail.com</a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Clinic Hours</h3>
            <div className="flex items-start justify-center md:justify-start gap-2 mt-2">
              <span className="text-[#964782] text-lg">🕒</span>
              <div className="text-gray-300 space-y-0.5 text-xs">
                <p className="font-bold text-[#964782]">Monday to Saturday</p>
                <p>10:00 AM – 8:00 PM</p>
                <p className="font-bold mt-1">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/GmaTNebnQKJXhK4k7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block text-xs mt-2"
            >
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-xl">📍</span>
                <span className="text-gray-300 leading-relaxed group-hover:text-[#964782] transition-colors">
                  F-18, First Floor, ABIL Imperial Commercial Spaces,<br />
                  Rohan Seher Lane, Pancard Club Road,<br />
                  Baner, Pune, Maharashtra – 411045<br />
                  <span className="text-[10px] text-gray-400 mt-1 block">(Above Durga Cafe / 2M Medico / Jio Life Chemist)</span>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Payment Methods and Maps Embed */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2 text-sm border-b border-gray-100 pb-1">Payment &amp; Billing</h3>
            <ul className="grid grid-cols-2 gap-2 mt-2">
              {[
                { name: "UPI / GPay", icon: "📱" },
                { name: "Cash", icon: "💵" },
                { name: "EMI for Invisalign", icon: "🏦" }
              ].map((method, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-gray-600 text-[11px] sm:text-xs">
                  <span>{method.icon}</span>
                  {method.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden h-[160px] shadow-inner border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3932723318726!2d73.7730753!3d18.556300399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe4ce6a472b%3A0xc67a4e2abe2628f7!2sBeaudent%20%7C%20Dentist%20in%20Baner%20%7C%20Dental%20Clinic%20in%20Baner!5e0!3m2!1sen!2sin!4v1774363584671!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tooth Story - Ahmedabad"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-[10px] sm:text-xs">
          <p>&copy; {new Date().getFullYear()} Beaudent Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}