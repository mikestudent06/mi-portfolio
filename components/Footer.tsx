import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image"; 

const Footer = () => {
  return (
    <footer className="w-full pb-24" id="contact">
      {/* Grille de fond */}
      <div className="w-full absolute left-0 -bottom-72 ">
        <Image
          src="/footer-grid.svg"
          alt="Grille de fond"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à faire passer <span className="text-purple">votre</span>{" "}
          présence digitale au niveau supérieur ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi dès aujourd&apos;hui et discutons de la façon dont je
          peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:contact@michelmouhani.it@gmail.com">
          <MagicButton
            title="Contactez-moi"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Michel MOUHANI
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={info.img}
                  alt={`Icone de ${info.url}`}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
