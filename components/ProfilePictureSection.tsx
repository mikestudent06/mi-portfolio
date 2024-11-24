import React from "react";
import { ContainerScroll } from "./ui/ContainerScrollAnimation";
import Image from "next/image";

const ProfilePictureSection = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll titleComponent={<></>}>
        <Image
          width={100}
          height={100}
          src={`/me.jpeg`}
          alt="hero"
          className="mx-auto rounded-2xl"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default ProfilePictureSection;
