import Link from "next/link";
import React from "react";

export default function ExclusiveContent() {
  return (
    <div className="relative rounded-t-6xl flex justify-evenly items-center flex-col h-80 overflow-hidden bg-primary-600 bg-[url('/images/transparent-bg.png')] bg-no-repeat bg-bottom bg-cover">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <p className="text-2xl z-10 text-white font-sans max-w-lg text-center">
        Se isso já chamou sua atenção, clique no botão abaixo e receba um
        conteúdo exclusivo para conhecer mais sobre essa jornada!
      </p>
      <Link
        className="inline-block  z-10 lg:w-1/2 text-center  px-12 py-4 tracking-tighter border- bg-orange-500 hover:bg-orange-400  text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
        href="#pricing"
      >
        Eu quero o conteúdo exclusivo!
      </Link>
    </div>
  );
}
