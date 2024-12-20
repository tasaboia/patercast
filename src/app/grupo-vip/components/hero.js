import React from "react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-radial from-[#122E20] via-[#224835] to-[#367053]">
      <div className="pt-20 pb-28   overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            {/* <p class="mb-3 text-sm  text-yellow-400 font-bold uppercase tracking-px"></p> */}
            <div class="flex mb-6 items-center justify-center">
              <svg
                width="13"
                height="12"
                viewbox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  width="12"
                  height="12"
                  rx="2"
                  fill="#BEF264"
                ></rect>
              </svg>
              <span class="ml-2 text-sm font-medium text-white">
                Masterclass
              </span>
            </div>
            <h1 className="font-heading font-dm text-white mb-4 text-6xl md:text-7xl tracking-tighter">
              Paternidade Transformada
            </h1>
            <p className="mb-10 max-w-md font-soro lg:max-w-2xl mx-auto text-white">
              A paternidade não é algo simples: trata-se de uma jornada intensa
              e bela.
              <br />
              <br />A realidade é de que existem muitos homens com filhos, mas
              que não aprenderam a serem pais. E ser um pai presente e saudável
              é algo complexo, e nós queremos te ajudar.
            </p>

            <a
              href="#form"
              className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white border border-white font-soro hover:bg-white hover:text-black rounded-full transition duration-200"
            >
              Quero ser um bom pai!
            </a>
          </div>
          <div className="max-w-6xl mx-auto pt-6">
            <div className="flex items-center justify-center">
              <div className="relative z-10 flex-1">
                <div
                  className="rounded-full bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      "url('basko-assets/images/headers/bg-garadient.jpg')",
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="w-auto mx-auto">
                      <div className="relative py-8 w-56 text-center">
                        <h2 className="mb-3 pt-4 lg:pt-0 text-2xl lg:text-4xl font-semibold text-white tracking-tighter font-dm">
                          31/08{" "}
                          <span className="text-xl font-soro font-heading font-light ">
                            {" "}
                            às 09:00h
                          </span>
                        </h2>
                        {/* <h3 className="mb-3 text-   xl font-semibold text-white">
                          nós do Patercast queremos ajudar você nesta jornada.
                        </h3> */}
                        <p className="text-white font-medium font-soro">
                          Será um encontro 100% gratuito e online
                        </p>
                      </div>
                    </div>
                    <div className="w-auto mx-auto xl:-mr-px">
                      <img
                        className="relative -right-px transform hover:translate-x-5 trannsition duration-500"
                        src="basko-assets/images/headers/revenue.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-auto -ml-8">
                <img
                  className="rounded-full"
                  src="basko-assets/images/headers/avatar4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
