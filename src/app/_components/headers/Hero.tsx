import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-wrap overflow-hidden animated-background min-h-screen bg-gradient-to-r from-primary-600 ">
      <div className="lg:h-screen px-8 lg:w-[40%] w-full lg:pl-32 pt-10 lg:pt-0">
        <div className="h-full gap-6 w-full justify-center flex flex-col">
          <h1 className="font-ebGaramond font-bold max-w-xs text-5xl sm:text-5xl lg:text-7xl xl:text-8xl text-white tracking-tighter animate-fade-down delay-200">
            Junte-se à{" "}
            <span className="text-orange-500">Comunidade PaterCast</span>
          </h1>
          <p className="text-base max-w-lg lg:text-lg text-white font-sans text-justify animate-fade-in delay-200">
            Descubra um espaço onde você pode se fortalecer como homem e pai.
            Aqui, você terá acesso a conteúdos transformadores, encontros ao
            vivo que inspiram e uma rede de homens dedicados a construir
            famílias sólidas e saudáveis.
          </p>
          <Link
            className="max-w-lg text-center px-8 py-4 tracking-tighter   bg-orange-500 hover:bg-orange-400 text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-2xl uppercase rounded-full transition duration-300 transform hover:scale-105 animate-fade-in delay-300"
            href="#pricing"
          >
            Quero fazer parte agora
          </Link>
        </div>
      </div>

      <div className="relative w-full lg:w-3/5 flex justify-center items-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0d5838] via-white/10 to-transparent rounded-full blur-3xl  "></div>
        <Image
          src="https://static.shuffle.dev/components/preview/697340ff-5445-426e-84bf-57e856b9afbf/assets/public/nightsable-assets/images/headers/lines.svg"
          alt="Hero Image 1"
          width={1680}
          height={1260}
          quality={100}
          className="absolute w-full h-auto object-contain z-10 top-0 left-0 md:top-20 md:left-20 lg:top-0 lg:left-40 animate-slide-in delay-500"
        />
        <div className="relative w-full h-full z-20">
          <Image
            src="/images/bg-hero.png"
            alt="Hero Image 2"
            width={1680}
            height={1260}
            quality={100}
            className="w-full h-auto lg:h-full object-contain lg:object-cover animate-fade-in delay-700"
          />
          <div className="absolute inset-x-0 bottom-0 h-[90%] bg-gradient-to-t from-gray-800 via-transparent to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
