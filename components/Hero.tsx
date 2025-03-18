"use client";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden pb-10 pt-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Animated Spotlights */}
      <div className="absolute left-0 right-0 inset-0 pointer-events-none">
        <Spotlight
          className="animate-pulse opacity-50 -top-40 left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="animate-[pulse_3s_infinite] opacity-60 h-[80vh] w-[50vw]  top-10"
          fill="purple"
        />
        <Spotlight
          className="animate-[pulse_2.5s_infinite] opacity-50 left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute left-0 right-0 inset-0 flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex justify-center px-6">
        <div className="max-w-[95vw] md:max-w-3xl lg:max-w-[60vw] flex flex-col justify-center items-center text-center">
          <h2 className="uppercase tracking-widest text-xs text-primary dark:text-blue-200 mb-2">
            Réussir c&pos;est aider les autres à réussir ! &#128512;
          </h2>
          <TextGenerateEffect
            className="text-[32px] md:text-4xl lg:text-5xl leading-tight mb-4 text-gray-800 dark:text-gray-100"
            words="Transformez vos idées en réalité digitale."
          />
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            Bonjour, je suis Michel MOUHANI, développeur web basé au Congo
            Brazzaville.
          </p>
          <a href="#about">
            <MagicButton
              title="Voir mon travail"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
