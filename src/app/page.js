"use client";
import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion, useScroll } from "framer-motion";
import PosdcastItem from "./_components/PodcastList";
import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import About from "./_components/About";
const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const epList = [
    "https://open.spotify.com/episode/6wKAdMbYr6ng26Bb22ODfB?si=b8cc1688ef104ec8",
    "https://open.spotify.com/episode/2SR4REwn731Br6cJewXl4U?si=662aeed9253f4716",
    "https://open.spotify.com/episode/2SR4REwn731Br6cJewXl4U?si=edb130b026944ede",
    "https://open.spotify.com/episode/5jOXaPwEaLY77DOFH8cPIf?si=c20e1803791a4950",
    "https://open.spotify.com/episode/4Z6pZd7qZ8ZnAx8UKNxYS9?si=47b73ed03c344f45",
    "https://open.spotify.com/episode/4ZLDyvgoymfRhz4QF6o0Nu?si=6eee3d5a8dfe4eb0",
  ];

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <div className=" w-full overflow-x-hidden">
        {" "}
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-secondary-500  w-[100vw]"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "10px",
            transformOrigin: "0%",
            zIndex: 9999,
          }}
        />
        <Hero />
        <About />
        <section className="py-20 2xl:py-40 bg-black overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="mb-10 max-w-xl mx-auto mb-24 text-center">
              <span className="text-lg font-bold text-[#E57926] ">
                um convite para:
              </span>
              <h2 className="mt-12 text-5xl lg:text-6xl text-white font-bold font-heading">
                uma jornada na paternidade
              </h2>
            </div>
            <div className="relative px-8 lg:pr-0 lg:pl-12 2xl:pl-24 mb-14 lg:mb-40 bg-orange-500 rounded-xl overflow-hidden">
              <div className="w-full lg:w-1/3 pt-12 lg:py-12">
                {/* <h3 className="mb-4 text-xl font-bold text-white">
                  Redescobrindo a masculinidade
                </h3> */}
                <p className="text-xl text-gray-300">
                  Estamos aqui para construir uma comunidade que convide todos a
                  explorar o significado da paternidade. Oferecemos conteúdo
                  autêntico e inspirador para enriquecer essa jornada.
                </p>
              </div>
              <img
                className="lg:absolute top-0 right-0 bottom-0 h-full w-full lg:w-1/3 object-cover"
                src="/talking-image.png"
                alt=""
              />
            </div>
            <div className="relative flex flex-wrap justify-center -mx-10 mb-20">
              <img
                className="hidden lg:block absolute inset-y-0 -mr-80 -mt-16"
                src="/zospace-assets/lines/dots-gray.svg"
                alt=""
              />
              <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                <div className="relative flex">
                  <img
                    className="hidden lg:block absolute top-0 right-0 -mr-20 -mt-16"
                    src="/zospace-assets/lines/dots-gray.svg"
                    alt=""
                  />
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 text-white bg-primary-500 text-lg font-bold rounded-full">
                      1
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-6 text-lg font-bold font-heading text-white">
                      Ouvir
                    </h3>
                    <p className="text-lg text-gray-200">
                      Comece sua jornada de redescoberta masculina ouvindo o
                      patercast.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                <div className="flex">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 text-white bg-primary-500 text-lg font-bold rounded-full">
                      2
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-6 text-lg font-bold font-heading text-white">
                      Absorva e reflita
                    </h3>
                    <p className="text-lg text-gray-200">
                      Absorva o contéudo e reserve um tempo para refletir sobre
                      o que foi dito.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-10">
                <div className="flex">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 text-white bg-primary-500 text-lg font-bold rounded-full">
                      3
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-6 text-lg font-bold font-heading text-white">
                      Compartilhar e construa juntos
                    </h3>
                    <p className="text-lg text-gray-200">
                      Compartilhe essa experiencia com amigos e familiares,
                      contamos com você para construir essa comunidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="text-center">
              <a
                className="inline-block px-12 py-5 text-white font-bold bg-primary-500 hover:bg-primary-600 rounded-full transition duration-200"
                href="#"
              >
                Works for me
              </a>
            </div> */}
          </div>
        </section>
        <section className="py-20 2xl:py-40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="max-w-xl mx-auto mb-12 lg:mb-16 text-center">
                <span className="text-lg text-primary-500 font-bold">
                  podcast
                </span>
                <h2 className="mt-8 mb-16 text-5xl font-bold font-heading">
                  um bom papo muda o mundo
                </h2>
              </div>
              <div className="lg:flex justify-center mb-16 mx-auto pb-6 border-b border-gray-50">
                <div className="w-full md:w-auto px-8 py-4 text-lg font-bold shadow rounded-lg">
                  Episódios
                </div>
              </div>

              <div className="flex flex-wrap justify-center items-center mb-12 lg:mb-16 -m-6">
                {epList.map((uri, index) => (
                  <PosdcastItem uri={uri} key={index} />
                ))}
              </div>
              <div className="mt-20 text-center">
                <a
                  target="_blank"
                  className="inline-block py-4 px-12 text-white font-bold bg-primary-500 hover:bg-primary-600 rounded-full"
                  href="https://open.spotify.com/show/7ztRCvPUb34pLYbTl5DiQo?si=5b5d74dc82764718"
                >
                  Ver todos
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="relative pt-20 pb-32 2xl:py-40 bg-secondary-700 overflow-hidden">
          <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-/zospace-1" />
          <div className="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-/zospace-2 transform -rotate-6" />
          <div className="relative container px-3 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
                Two ways to start!
              </span>
              <h2 className="my-10 text-5xl lg:text-6xl font-bold font-heading text-white">
                Are you ready for a digital step-change?
              </h2>
              <div className="max-w-md mx-auto">
                <p className="mb-20 text-lg text-gray-200">
                  Moving too slowly in digital is the biggest threat facing your
                  business. If you’re ready to move faster, we are here to help.
                </p>
                <a
                  className="inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-12 text-white font-bold bg-primary-500 hover:bg-primary-600 rounded-full transition duration-200"
                  href="#"
                >
                  Write us now
                </a>
                <a
                  className="inline-block py-4 px-12 text-white font-bold border border-gray-50 hover:border-gray-100 rounded-full"
                  href="#"
                >
                  Schedule call
                </a>
              </div>
            </div>
          </div>
        </section> */}
        <section className="py-20 2xl:py-14 bg-secondary-700">
          <div className="container  mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-24 text-center text-5xl font-bold font-heading text-white">
                Our Team
              </h2>
              <div className="flex flex-wrap justify-center -mx-4 mb-20">
                {/* <div className="w-full lg:w-1/4 px-4">
                  <div>
                    <a
                      className="hidden lg:inline-block w-full p-10 bg-primary-500 hover:bg-primary-600 rounded-lg transition duration-200"
                      href="#"
                    >
                      <h3 className="mb-14 text-3xl text-white font-bold font-heading">
                        Join us if you want!
                      </h3>
                      <div className="flex">
                        <p className="text-white font-bold">Learn how!</p>
                        <svg
                          className="ml-4"
                          width={19}
                          height={20}
                          viewBox="0 0 19 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0)">
                            <path
                              d="M18.7383 1.47293L18.7383 10.93L17.5562 10.93L17.5562 2.89739L0.834948 19.6245L0.00154682 18.7911L16.7228 2.064L9.28125 2.064L9.28125 0.881867L18.1472 0.881866C18.4737 0.881866 18.7383 1.14648 18.7383 1.47293Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div> 
                </div> */}
                <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
                  <div>
                    <img
                      className="w-full h-112 lg:h-72 object-cover object-top"
                      src="/assets/antonio.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/4 px-4">
                  <div className="relative lg:mt-52 inline-block w-full mb-8 p-10 bg-darkCoolGray-500 rounded-lg transition duration-200">
                    <div
                      className="absolute top-0 -mt-6 right-0 mr-10 lg:left-0 lg:-ml-5 lg:mt-10 w-14 h-14 bg-darkCoolGray-500"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      }}
                    />
                    <h3 className="mb-2 text-3xl text-white font-bold font-heading">
                      Antônio Garcia
                    </h3>
                    <p className="mb-4 text-lg text-white font-bold">
                      Co-Founder
                    </p>
                    <a
                      className="flex justify-end"
                      href="https://www.instagram.com/antonioluisgarcia7"
                      target="_blank"
                    >
                      <svg
                        className="text-white hover:text-gray-100"
                        width={27}
                        height={15}
                        viewBox="0 0 27 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.2042 7.78599L19.5171 14.4731L18.6812 13.6372L24.3611 7.95734L0.709572 7.96153L0.709572 6.78292L24.3611 6.77874L19.0992 1.51681L19.9351 0.680916L26.2042 6.9501C26.4351 7.18093 26.4351 7.55515 26.2042 7.78599Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/4 px-4">
                  <div>
                    <img
                      className="mb-8 w-full h-112 lg:h-80 object-cover object-top"
                      src="/assets/felipe.png"
                      alt=""
                    />
                    <div className="relative inline-block w-full mb-8 p-10 bg-darkCoolGray-500 rounded-lg transition duration-200">
                      <div
                        className="absolute top-0 -mt-6 left-0 ml-10 w-14 h-14 bg-darkCoolGray-500"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                      />
                      <h3 className="mb-2 text-3xl text-white font-bold font-heading">
                        Felipe Zapalá
                      </h3>
                      <p className="mb-4 text-lg text-white font-bold">
                        Co-Founder
                      </p>
                      <a
                        className="flex justify-end"
                        href="https://www.instagram.com/fe_zapala/"
                        target="_blank"
                      >
                        <svg
                          className="text-white hover:text-gray-100"
                          width={27}
                          height={15}
                          viewBox="0 0 27 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.2042 7.78599L19.5171 14.4731L18.6812 13.6372L24.3611 7.95734L0.709572 7.96153L0.709572 6.78292L24.3611 6.77874L19.0992 1.51681L19.9351 0.680916L26.2042 6.9501C26.4351 7.18093 26.4351 7.55515 26.2042 7.78599Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="relative py-20 2xl:py-40 bg-darkCoolGray-500 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="mb-14 text-center">
              <span className="text-lg text-secondary-400 font-bold">
                Lorem Ipsum
              </span>
              <h2 className="mt-8 text-5xl font-bold font-heading text-white">
                Lorem Ipsum
              </h2>
            </div>
            <div className="flex flex-wrap -m-6">
              <div className="relative w-full lg:w-1/3 p-6">
                <img
                  className="hidden lg:block absolute top-0 left-0 -ml-40 mt-24"
                  src="/zospace-assets/lines/left-line.svg"
                  alt=""
                />
                <div className="relative z-10 bg-gray-700 rounded-lg">
                  <div className="relative mb-8 h-52">
                    <img
                      className="w-full h-full rounded-lg object-cover object-top"
                      src="https://images.pexels.com/photos/6822288/pexels-photo-6822288.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=450&w=940"
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-primary-500">
                      <p className="text-xl font-bold">30</p>
                      <p className="text-xs uppercase text-gray-300">Feb</p>
                    </div>
                  </div>
                  <div className="px-14 pb-10">
                    <a
                      className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400"
                      href="#"
                    >
                      Artificial Intelligence in Business
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:w-1/3 p-6">
                <img
                  className="hidden lg:block absolute top-0 left-0 -ml-14 mt-24"
                  src="/zospace-assets/lines/right-line.svg"
                  alt=""
                />
                <div className="relative z-10 lg:mt-24 bg-gray-700 rounded-lg">
                  <div className="relative mb-8 h-52">
                    <img
                      className="w-full h-full rounded-lg object-cover"
                      src="https://images.pexels.com/photos/5325768/pexels-photo-5325768.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=450&w=940"
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-primary-500">
                      <p className="text-xl font-bold">29</p>
                      <p className="text-xs uppercase text-gray-300">Feb</p>
                    </div>
                  </div>
                  <div className="px-14 pb-10">
                    <a
                      className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400"
                      href="#"
                    >
                      10 ways to keep your remote teams engaged
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:w-1/3 p-6">
                <img
                  className="hidden lg:block absolute top-0 right-0 mr-64 mt-24"
                  src="/zospace-assets/lines/left-line.svg"
                  alt=""
                />
                <div className="relative z-10 bg-gray-700 rounded-lg">
                  <div className="relative mb-8 h-52">
                    <img
                      className="mb-8 w-full h-52 rounded-lg object-cover"
                      src="https://images.pexels.com/photos/5325708/pexels-photo-5325708.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=450&w=940"
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-primary-500">
                      <p className="text-xl font-bold">25</p>
                      <p className="text-xs uppercase text-gray-300">Feb</p>
                    </div>
                  </div>
                  <div className="px-14 pb-10">
                    <a
                      className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400"
                      href="#"
                    >
                      How to make a concept map (+Examples)
                    </a>
                  </div>
                </div>
                <img
                  className="hidden lg:block absolute top-0 right-0 -mr-32 mt-24"
                  src="/zospace-assets/lines/right-line.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-14 lg:mt-24 text-center">
              <a
                className="inline-block py-5 px-12 mr-4 bg-primary-500 hover:bg-primary-600 rounded-full text-white font-bold transition duration-200"
                href="#"
              >
                See all
              </a>
            </div>
          </div>
        </section> */}
        <section className="py-10 2xl:py-10 bg-primary-500">
          <div className="container mx-auto px-4 mb-12 md:mb-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* <a
                className="inline-block mb-20 text-white text-xl font-bold"
                href="#"
              >
                <img src="images/Group-4.svg" alt="" width={200} />
              </a> */}
              {/* <ul className="mb-12 md:mb-20 flex flex-wrap items-center justify-center space-x-6 md:justify-between text-lg">
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="#"
                  >
                    Product
                  </a>
                </li>
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="#"
                  >
                    Story
                  </a>
                </li>
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-4 md:mb-0">
                  <a
                    className="font-bold text-white hover:text-gray-100"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul> */}
              <div className="flex justify-center">
                <a
                  className="flex justify-center items-center w-12 h-12 mr-4 bg-gray-600 rounded-full"
                  href="https://www.youtube.com/@PaterCast"
                  target="_blank"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4 11.16L10.5 8.00005C10.348 7.91228 10.1755 7.86608 10 7.86608C9.82446 7.86608 9.65202 7.91228 9.5 8.00005C9.35174 8.08557 9.22791 8.20771 9.14036 8.35479C9.05282 8.50187 9.00449 8.66895 9 8.84005V15.16C9.0013 15.3382 9.05019 15.5129 9.14161 15.6658C9.23303 15.8188 9.36367 15.9445 9.52 16.0301C9.66543 16.1157 9.83123 16.1606 10 16.16C10.1771 16.1479 10.3487 16.093 10.5 16L15.4 12.84C15.5403 12.7494 15.6557 12.625 15.7356 12.4783C15.8155 12.3315 15.8574 12.1671 15.8574 12C15.8574 11.833 15.8155 11.6686 15.7356 11.5218C15.6557 11.3751 15.5403 11.2507 15.4 11.16ZM11 13.32V10.68L13 12L11 13.32ZM19.38 4.51005L17.83 4.31005C13.991 3.84001 10.109 3.84001 6.27 4.31005L4.72 4.51005C3.97471 4.59116 3.2854 4.94392 2.78368 5.50098C2.28195 6.05803 2.00297 6.78036 2 7.53005V16.47C2.00636 17.2086 2.28051 17.9198 2.77155 18.4715C3.26259 19.0233 3.93715 19.3781 4.67 19.47L6.22 19.66C8.13776 19.8931 10.0681 20.0066 12 20C13.9323 20 15.8627 19.8798 17.78 19.64L19.33 19.4501C20.0628 19.3581 20.7374 19.0033 21.2285 18.4515C21.7195 17.8998 21.9936 17.1886 22 16.4501V7.53005C21.9985 6.78803 21.7265 6.072 21.235 5.51609C20.7435 4.96017 20.0662 4.6025 19.33 4.51005H19.38ZM20.05 16.51C20.0508 16.762 19.9565 17.0049 19.7859 17.1903C19.6154 17.3757 19.3811 17.4899 19.13 17.51L17.58 17.7001C13.9077 18.1601 10.1923 18.1601 6.52 17.7001L4.97 17.51C4.71889 17.4899 4.48463 17.3757 4.31406 17.1903C4.1435 17.0049 4.04919 16.762 4.05 16.51V7.53005C4.06192 7.282 4.16055 7.04601 4.32869 6.86325C4.49683 6.68049 4.7238 6.56256 4.97 6.53005L6.47 6.30005C10.1427 5.8467 13.8573 5.8467 17.53 6.30005L19.08 6.49005C19.3262 6.52256 19.5532 6.64049 19.7213 6.82325C19.8894 7.00601 19.9881 7.242 20 7.49005L20.05 16.51Z"
                      fill="white"
                    />
                  </svg>
                </a>
                {/* ---------------- instragram  */}
                <a
                  className="flex justify-center items-center w-12 h-12 mr-4 bg-gray-600 rounded-full"
                  href="https://www.instagram.com/patercast.br/"
                  target="_blank"
                >
                  <svg
                    className="h-4 w-4 text-white"
                    width={24}
                    height={24}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M17.982 5.29205C17.9398 4.33564 17.7852 3.67812 17.5636 3.10836C17.3351 2.50359 16.9834 1.96213 16.5227 1.51201C16.0726 1.05489 15.5276 0.699691 14.9298 0.474702C14.3568 0.253147 13.7027 0.0984842 12.7463 0.0563159C11.7827 0.0105764 11.4768 0 9.03301 0C6.58917 0 6.28328 0.0105764 5.3233 0.0527447C4.36689 0.0949129 3.70937 0.249713 3.13975 0.471131C2.53484 0.699691 1.99338 1.05132 1.54326 1.51201C1.08614 1.96213 0.731078 2.50716 0.505952 3.10493C0.284397 3.67812 0.129734 4.33207 0.0875659 5.28848C0.0418264 6.25203 0.03125 6.55792 0.03125 9.00176C0.03125 11.4456 0.0418264 11.7515 0.0839947 12.7115C0.126163 13.6679 0.280963 14.3254 0.502518 14.8952C0.731078 15.4999 1.08614 16.0414 1.54326 16.4915C1.99338 16.9486 2.53841 17.3038 3.13618 17.5288C3.70937 17.7504 4.36332 17.905 5.31986 17.9472C6.27971 17.9895 6.58574 17.9999 9.02957 17.9999C11.4734 17.9999 11.7793 17.9895 12.7393 17.9472C13.6957 17.905 14.3532 17.7504 14.9228 17.5288C16.1325 17.0611 17.0889 16.1047 17.5566 14.8952C17.778 14.322 17.9328 13.6679 17.975 12.7115C18.0172 11.7515 18.0278 11.4456 18.0278 9.00176C18.0278 6.55792 18.0242 6.25203 17.982 5.29205ZM16.3611 12.6411C16.3223 13.5202 16.1747 13.9949 16.0516 14.3114C15.7492 15.0956 15.1268 15.7179 14.3426 16.0204C14.0262 16.1434 13.548 16.2911 12.6724 16.3297C11.723 16.372 11.4382 16.3824 9.03658 16.3824C6.63491 16.3824 6.3466 16.372 5.40063 16.3297C4.52155 16.2911 4.04685 16.1434 3.73038 16.0204C3.34015 15.8761 2.98495 15.6476 2.69664 15.3487C2.39775 15.0568 2.16919 14.7052 2.02497 14.315C1.9019 13.9985 1.75424 13.5202 1.71565 12.6447C1.67334 11.6953 1.6629 11.4104 1.6629 9.00876C1.6629 6.60709 1.67334 6.31878 1.71565 5.37295C1.75424 4.49387 1.9019 4.01917 2.02497 3.7027C2.16919 3.31234 2.39775 2.95727 2.70021 2.66883C2.99196 2.36994 3.34359 2.14138 3.73395 1.99729C4.05042 1.87422 4.52869 1.72656 5.4042 1.68783C6.3536 1.64566 6.63848 1.63508 9.04001 1.63508C11.4453 1.63508 11.73 1.64566 12.676 1.68783C13.555 1.72656 14.0297 1.87422 14.3462 1.99729C14.7364 2.14138 15.0916 2.36994 15.3799 2.66883C15.6788 2.96071 15.9074 3.31234 16.0516 3.7027C16.1747 4.01917 16.3223 4.49731 16.3611 5.37295C16.4032 6.32236 16.4138 6.60709 16.4138 9.00876C16.4138 11.4104 16.4032 11.6917 16.3611 12.6411Z"
                        fill="white"
                      />
                      <path
                        d="M9.03411 4.37793C6.48135 4.37793 4.41016 6.44898 4.41016 9.00188C4.41016 11.5548 6.48135 13.6258 9.03411 13.6258C11.587 13.6258 13.6581 11.5548 13.6581 9.00188C13.6581 6.44898 11.587 4.37793 9.03411 4.37793ZM9.03411 12.0013C7.37801 12.0013 6.03467 10.6581 6.03467 9.00188C6.03467 7.34564 7.37801 6.00244 9.03411 6.00244C10.6903 6.00244 12.0335 7.34564 12.0335 9.00188C12.0335 10.6581 10.6903 12.0013 9.03411 12.0013Z"
                        fill="white"
                      />
                      <path
                        d="M14.9208 4.1952C14.9208 4.79133 14.4375 5.27468 13.8412 5.27468C13.2451 5.27468 12.7617 4.79133 12.7617 4.1952C12.7617 3.59894 13.2451 3.11572 13.8412 3.11572C14.4375 3.11572 14.9208 3.59894 14.9208 4.1952Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </a>
                {/* ------------ twitter  */}
                <a
                  className="flex justify-center items-center w-12 h-12 bg-gray-600 rounded-full"
                  href="https://open.spotify.com/show/7ztRCvPUb34pLYbTl5DiQo?si=523c0aa23dc548b5"
                  target="_blank"
                >
                  <svg
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-white pt-12 px-4 border-t border-gray-500">
            <span>© 2023 Orange Joy.</span>
            <span className="text-gray-300">All rights reserved.</span>
          </p>
        </section>
      </div>
    </React.Fragment>
  );
}
