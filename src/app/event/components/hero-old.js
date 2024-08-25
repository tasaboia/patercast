import React from "react";

export default function Hero() {
  return (
    <section className="pt-20 bg-gradient-radial from-[#122E20] via-[#224835] to-[#367053]">
      <div class="relative pt-18">
        <img
          class="hidden md:block absolute top-0 left-0 mt-28 w-32 lg:w-64 xl:w-auto"
          src="assets/flow-assets/headers/header-4-left-top.png"
          alt=""
        />
        <img
          class="hidden md:block absolute top-0 right-0 mt-20 w-32 lg:w-64 xl:w-auto"
          src="assets/flow-assets/headers/header-4-right-top.png"
          alt=""
        />
        <div class="container mx-auto px-4 relative">
          <div class="max-w-lg xl:max-w-xl mx-auto mb-12 lg:mb-0 text-center">
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
                Powering Tomorrow
              </span>
            </div>
            <h1 class="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight text-white mb-8">
              Paternidade Transformada
            </h1>
            <p class="text-lg text-white mb-10">
              A paternidade não é algo simples: trata-se de uma jornada intensa
              e bela. A realidade é de que existem muitos homens com filhos, mas
              que não aprenderam a serem pais. E ser um pai presente e saudável
              é algo complexo, e nós queremos te ajudar.
            </p>
            <div class="flex flex-col sm:flex-row justify-center">
              <a
                href="#"
                class="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-black border border-white hover:bg-white rounded-full transition duration-200"
              >
                Quero ser um bom pai!
              </a>
            </div>
          </div>
          <div class="flex -mx-4 items-end relative">
            <div class="w-1/3 xs:w-1/2 lg:w-auto px-4">
              <img
                class="block h-32 lg:h-48"
                src="assets/flow-assets/headers/header-4-bottom-lleft.png"
                alt=""
              />
            </div>
            <div class="w-2/3 xs:w-1/2 lg:w-auto ml-auto px-4">
              <img
                class="block w-1/2 md:w-64 lg:w-auto ml-auto"
                src="assets/flow-assets/headers/header-4-bottom-right.png"
                alt=""
              />
            </div>
            <div class="absolute bottom-0 left-0 w-full py-32 bg-gradient-to-t from-teal-900 to-transparent"></div>
          </div>
        </div>
      </div>
      <div class="hidden fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50">
        <div class="fixed inset-0 bg-violet-900 opacity-20"></div>
        <nav class="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
          <div class="flex items-center justify-between">
            <a href="#" class="inline-block">
              <img
                class="h-8"
                src="assets/flow-assets/logos/sign-logo-flow.svg"
                alt=""
              />
            </a>
            <div class="flex items-center">
              <a
                href="#"
                class="inline-flex py-2.5 px-4 mr-6 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
              >
                Login
              </a>
              <button>
                <svg
                  width="32"
                  height="32"
                  viewbox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2"
                    stroke="#1D1F1E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="pt-20 pb-12 mb-auto">
            <ul class="flex-col">
              <li class="mb-6">
                <a
                  class="inline-block text-teal-900 hover:text-teal-700 font-medium"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li class="mb-6">
                <a
                  class="inline-block text-teal-900 hover:text-teal-700 font-medium"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li class="mb-6">
                <a
                  class="inline-block text-teal-900 hover:text-teal-700 font-medium"
                  href="#"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  class="inline-block text-teal-900 hover:text-teal-700 font-medium"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div class="flex items-center justify-between">
            <a
              href="#"
              class="inline-flex items-center text-lg font-medium text-teal-900"
            >
              <span>
                <svg
                  width="32"
                  height="32"
                  viewbox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.4 6.39999H25.6C26.92 6.39999 28 7.47999 28 8.79999V23.2C28 24.52 26.92 25.6 25.6 25.6H6.4C5.08 25.6 4 24.52 4 23.2V8.79999C4 7.47999 5.08 6.39999 6.4 6.39999Z"
                    stroke="#646A69"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M28 8.8L16 17.2L4 8.8"
                    stroke="#646A69"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <span class="ml-2">Newsletter</span>
            </a>
            <div class="flex items-center">
              <a href="#" class="inline-block mr-4">
                <svg
                  width="20"
                  height="20"
                  viewbox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_282_7847)">
                    <path
                      d="M11.548 19.9999V10.8776H14.6087L15.0679 7.32146H11.548V5.05136C11.548 4.02209 11.8326 3.32066 13.3103 3.32066L15.1918 3.31988V0.139123C14.8664 0.0968385 13.7495 -0.000106812 12.4495 -0.000106812C9.73488 -0.000106812 7.87642 1.65686 7.87642 4.69916V7.32146H4.8064V10.8776H7.87642V19.9999H11.548Z"
                      fill="#022C22"
                    ></path>
                  </g>
                </svg>
              </a>
              <a href="#" class="inline-block mr-4">
                <svg
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="#" class="inline-block">
                <svg
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
