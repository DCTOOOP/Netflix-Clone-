import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white text-lg sm:text-xl md:text-2xl font-normal px-4 sm:px-6 py-4 sm:py-5 transition-colors duration-200"
      >
        <span className="text-left">{question}</span>
        <span
          className={`text-3xl transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 bg-[#2d2d2d] ${
          isOpen ? "max-h-40 py-4 sm:py-5" : "max-h-0"
        }`}
      >
        <p className="px-4 sm:px-6 text-gray-200 text-base sm:text-lg md:text-xl">
          {answer}
        </p>
      </div>
    </div>
  );
}

const FAQS = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service offering a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, laptop or TV, starting at ₹149 a month. Plans range depending on the number of devices and video quality.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime, on any device with an internet connection. Stream on your phone, tablet, laptop and TV without paying more.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can cancel your account online in two clicks any time.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning originals and more. Watch as much as you want, any time.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black py-14 sm:py-20">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-0.5">
          {FAQS.map((f, i) => (
            <FAQItem
              key={f.question}
              question={f.question}
              answer={f.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-gray-300 text-base sm:text-lg mb-5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-black/60 border border-gray-500 text-white placeholder-gray-400 rounded px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-6 py-3.5 rounded shadow-lg transition-all duration-200 transform hover:scale-[1.03] flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get Started
              <ChevronDown size={20} className="-rotate-90" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}