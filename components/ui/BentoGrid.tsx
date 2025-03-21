"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
// import Lottie from "react-lottie";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { GridGlobe } from "./GridGlobe";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const skills: { title: string; img: string }[] = [
    { title: "Html", img: "/html.svg" },
    { title: "Css", img: "/css.svg" },
    { title: "Tailwindcss", img: "/tail.svg" },
    { title: "Javascript", img: "/javascript.svg" },
    { title: "React", img: "/re.svg" },
    { title: "React Native", img: "/react-native.svg" },
    { title: "VueJs", img: "/vue.svg" },
    { title: "NextJs", img: "/nextjs.svg" },
    { title: "Git", img: "/git.svg" },
    { title: "Typescript", img: "/ts.svg" },
    { title: "Express", img: "/express.svg" },
    { title: "NestJs", img: "/nestjs.svg" },
    { title: "MongoDB", img: "/mongodb.svg" },
    { title: "SQL", img: "/sql.svg" },
    { title: "Python", img: "/python.svg" },
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "michelmouhani.it@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset after 3 seconds
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              width={1200}
              height={800}
              src={img}
              alt="Profile image"
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {id === 1 && (
          <div className="relative w-full h-full flex flex-col items-center justify-center space-y-4 p-6">
            {spareImg && (
              <Image
                width={120}
                height={120}
                src={spareImg}
                alt="Profile image"
                className="rounded-full border-4 border-white shadow-lg"
              />
            )}
            <a
              href="/cv.pdf"
              download="CV"
              className="z-50 cursor-pointer bg-[#0f172a] text-white font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              Voir mon CV
            </a>
          </div>
        )}

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-2xl font-bold z-10 ${
              id === 1 && "lg:text-[1.4rem] text-md"
            } ${
              id === 2 &&
              "flex flex-col gap-[200px] justify-between items-center lg:flex-row w-full"
            }`}
          >
            <p className="w-full">{title}</p>
            {id === 2 && (
              <div className="hidden md:block">
                <GridGlobe />
              </div>
            )}
          </div>
          {id === 3 && (
            <div className="flex flex-col h-full w-full mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col items-center bg-[#10132E] px-4 py-2 rounded-lg shadow-md"
                  >
                    <Image
                      src={skill.img}
                      alt={skill.title}
                      width={24}
                      height={24}
                    />
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center bg-black text-white text-xs px-2 py-1 rounded-md shadow-md w-auto whitespace-nowrap">
                      {skill.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {/* <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
                replace lottie later
              </div> */}

              <MagicButton
                title={
                  copied ? "L'email a été copié !" : "Copier mon adresse email"
                }
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
