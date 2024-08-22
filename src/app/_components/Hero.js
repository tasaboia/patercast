import React from "react";

export default function Hero() {
  return (
    <section className="relative pb-20 bg-primary-500 overflow-hidden">
      <div className="relative pt-12 md:pt-0">
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-wrap items-center -mx-4">
            <div className="relative z-10 w-full md:w-1/2 px-4 lg:py-32 mb-6 md:mb-0">
              <div className="flex flex-wrap lg:flex-nowrap">
                <div className="mb-6 lg:mb-0 lg:mt-32 lg:-mr-10">
                  <p className="lg:transform lg:rotate-90 tracking-widest text-lg text-white uppercase">
                    Além&nbsp;de&nbsp;um&nbsp;podcast
                  </p>
                </div>
                <div>
                  <h2 className="mb-8 text-4xl lg:text-6xl text-white font-bold">
                    Um movimento para o resgate da paternidade
                  </h2>

                  <a
                    className="inline-block w-full md:w-auto mb-2 md:mb-0 py-5 px-8 mr-6 text-center text-sm font-bold uppercase bg-secondary-500 hover:bg-secondary-400 transition duration-200"
                    href="https://open.spotify.com/show/7ztRCvPUb34pLYbTl5DiQo?si=523c0aa23dc548b5"
                    target="_blank"
                  >
                    Spotify
                  </a>
                  <a
                    className="inline-block w-full md:w-auto py-5 px-8 text-center text-sm text-white font-bold uppercase border border-white hover:text-secondary-400  hover:bg-gray-50 hover:border-gray-50 transition duration-200"
                    href="https://www.youtube.com/@PaterCast"
                    target="_blank"
                  >
                    youtube
                  </a>
                </div>
              </div>
            </div>
            <div className="md:absolute h-full top-0 right-0 w-full md:w-1/2 mr-10 px-4">
              <img
                className="w-full h-auto object-cover"
                src={"/assets/hero-redendo.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
