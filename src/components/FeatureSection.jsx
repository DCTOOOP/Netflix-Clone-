import React from "react";
import { Tv, Download, Smartphone, Baby } from "lucide-react";

function FeatureBlock({ title, description, icon, reverse, accent }) {
  return (
    <div className="border-b-8 border-gray-800">
      <div
        className={`container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12 py-14 sm:py-20 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8 md:gap-12`}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl">
            {description}
          </p>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <div
            className={`relative w-full max-w-md aspect-video rounded-lg shadow-2xl flex items-center justify-center bg-gradient-to-br ${accent} transform transition-transform duration-500 hover:scale-105`}
          >
            <div className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: <Tv size={90} className="text-white/90" strokeWidth={1.2} />,
    reverse: false,
    accent: "from-indigo-950 via-indigo-900 to-black",
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favourites easily and always have something to watch.",
    icon: <Download size={90} className="text-white/90" strokeWidth={1.2} />,
    reverse: true,
    accent: "from-teal-950 via-teal-900 to-black",
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: (
      <Smartphone size={90} className="text-white/90" strokeWidth={1.2} />
    ),
    reverse: false,
    accent: "from-purple-950 via-purple-900 to-black",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: <Baby size={90} className="text-white/90" strokeWidth={1.2} />,
    reverse: true,
    accent: "from-amber-950 via-amber-900 to-black",
  },
];

export default function FeatureSection() {
  return (
    <section>
      {FEATURES.map((f) => (
        <FeatureBlock key={f.title} {...f} />
      ))}
    </section>
  );
}