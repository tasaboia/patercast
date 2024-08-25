import React from "react";

export default function CallToAction() {
  return (
    <section class="pt-12 lg:py-24 relative overflow-hidden bg-white">
      <div class="hidden lg:flex items-center absolute top-0 right-0 h-full w-2/5 max-w-sm xl:max-w-lg bg-[#122E20]">
        <div class="relative xl:h-full transform -translate-x-1/2 rounded-full overflow-hidden">
          <img
            class="block xl:h-full"
            src="assets/flow-assets/cta/circle-photo.png"
            alt=""
          />
        </div>
      </div>
      <div class="container mx-auto lg:pl-20 px-8 relative">
        <div class="max-w-md lg:max-w-none lg:w-2/5 mx-auto lg:mx-0">
          <h1 class="font-heading text-5xl sm:text-6xl tracking-sm mb-6">
            Participe do nosso encontro online!
          </h1>
          <p class="text-lg text-gray-700 mb-10">
            Estamos criando uma comunidade de homens que se ajudam, aprendem
            sobre paternidade e têm lares saudáveis. Não fique de fora. Tome a
            decisão certa antes que seja tarde demais!
          </p>
          <a
            href="#form"
            class="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white bg-orange-500 hover:bg-yellow-700 rounded-full transition duration-200"
          >
            Eu estarei lá!
          </a>
        </div>
      </div>
      <div class="lg:hidden flex items-center mt-20 ml-auto w-1/2 bg-[#122E20]">
        <div class="relative xl:h-full transform -translate-x-1/2 rounded-full overflow-hidden">
          <img
            class="block xl:h-full"
            src="assets/flow-assets/cta/circle-photo.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
