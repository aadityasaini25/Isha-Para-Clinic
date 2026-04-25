import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Krishna",
      initials: "K",
      date: "Recent",
      review: "I recently visited Beaudent Dental Clinic for my root canal treatment, and I am extremely satisfied with the experience. The doctor explained the entire procedure in a very simple and clear way, which reduced my fear completely. The treatment was almost painless and completed very smoothly. The clinic is clean, hygienic, and well-equipped with modern technology. The staff is also very supportive and polite. Highly recommended for anyone looking for safe and comfortable root canal treatment."
    },
    {
      name: "Shruti Sapte",
      initials: "SS",
      date: "Recent",
      review: "I choose Beaudent Dental Clinic for laser teeth whitening after searching for a good dentist in Baner. The entire process was smooth and comfortable. I could see a noticeable difference in just one session. The doctor was very professional and guided me properly about aftercare. Totally worth it!"
    },
    {
      name: "Mahesh Jagave",
      initials: "MJ",
      date: "Recent",
      review: "Very nice experience. Dr. Ankita ma’am is gentle and caring. The treatment was done properly and I did not feel much pain. The clinic is clean and the team is polite. I would definitely visit again if needed."
    },
    {
      name: "Shivangi Jadhav",
      initials: "SJ",
      date: "Recent",
      review: "Beaudent Dental Clinic is an excellent dental clinic in Baner for root canal treatment. I was very nervous initially, but the doctor made me feel comfortable throughout the process. The treatment was quick, painless, and well-managed. The hygiene standards and friendly staff make this clinic highly recommendable for anyone in Baner."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#5d2350] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Testimonials</p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Image
            src="/images/google.png"
            alt="Google"
            width={112}
            height={38}
            className="object-contain opacity-90"
          />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Patient Experiences</h2>
        </div>
        <div className="w-16 h-0.5 bg-[#d4af37] rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg bg-[#5d2350]">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{review.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
              <div className="flex text-[#d4af37] mb-4 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed font-light flex-grow">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}