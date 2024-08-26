import React from "react";

export default function CallToAction() {
  return (
    <section className="pt-12 lg:py-24 relative overflow-hidden bg-white">
      <div className="hidden lg:flex items-center absolute top-0 right-0 h-full w-2/5 max-w-sm xl:max-w-lg bg-[#122E20]">
        <div className="relative xl:h-full transform -translate-x-1/2 rounded-full overflow-hidden">
          <img
            className="block xl:h-full"
            src="assets/flow-assets/cta/circle-photo.png"
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto lg:pl-20 px-8 relative">
        <div className="max-w-md lg:max-w-none lg:w-2/5 mx-auto lg:mx-0">
          <h1 className="font-heading text-5xl sm:text-6xl text-gray-800 tracking-sm mb-6">
            Participe do nosso encontro online!
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            Estamos criando uma comunidade de homens que se ajudam, aprendem
            sobre paternidade e têm lares saudáveis. Não fique de fora. Tome a
            decisão certa antes que seja tarde demais!
          </p>
          <a
            href="#form"
            className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white bg-orange-500 hover:bg-yellow-700 rounded-full transition duration-200"
          >
            Eu estarei lá!
          </a>
        </div>
      </div>
      <div className="lg:hidden flex items-center mt-20 ml-auto w-1/2 bg-[#122E20]">
        <div className="relative xl:h-full transform -translate-x-1/2 rounded-full overflow-hidden">
          <img
            className="block xl:h-full"
            src="assets/flow-assets/cta/circle-photo.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
