"use client";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Home() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative pb-20 bg-primary-500 overflow-hidden">
          <nav className="relative py-8 px-4 xl:px-10 bg-primary-500 flex justify-between">
            <img src="/assets/logo.png" alt="" width={150} height={30} />

            <div className="flex justify-between items-center">
              <a className="text-xl text-white font-semibold" href="#">
                <img src="/images/Vision-white-1.svg" alt="" width={150} />
              </a>
              <div className="lg:hidden">
                <button className="navbar-burger flex items-center p-3 rounded">
                  <svg
                    className="text-white block h-4 w-4"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:w-auto lg:space-x-10">
                <li></li>
                <li>
                  <a
                    className="text-white font-semibold hover:text-blue-50"
                    href="#"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    className="text-white font-semibold hover:text-blue-50"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-white font-semibold hover:text-blue-50"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
              <div className="hidden lg:block">
                <a
                  className="inline-block px-8 text-white hover:text-blue-50 font-semibold"
                  href="#"
                >
                  Get estimate
                </a>
                <a
                  className="inline-block py-3 px-8 text-sm text-white hover:text-blue-50 uppercase font-semibold border-2 border-white"
                  href="#"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </nav>
          <div className="relative pt-12 md:pt-0">
            {/* <div className="absolute top-0 bottom-0 -left-1/4 -right-1/4 flex items-center justify-center">
              <h2 className="stroke opacity-75">VISION</h2>
            </div> */}
            <div className="container px-4 mx-auto">
              <div className="relative flex flex-wrap items-center -mx-4">
                <div className="relative z-10 w-full md:w-1/2 px-4 lg:py-32 mb-6 md:mb-0">
                  <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="mb-6 lg:mb-0 lg:mt-32 lg:-mr-10">
                      <p className="lg:transform lg:rotate-90 tracking-widest text-lg text-white uppercase">
                        SEE&nbsp;YOUR&nbsp;GROWTH
                      </p>
                    </div>
                    <div>
                      <h2 className="mb-8 text-4xl lg:text-6xl text-white font-bold">
                        Um movimento para o resgate da paternidade
                      </h2>
                      <a
                        className="inline-block w-full md:w-auto mb-2 md:mb-0 py-5 px-8 mr-6 text-center text-sm font-bold uppercase bg-secondary-500 hover:bg-secondary-400 transition duration-200"
                        href="#"
                      >
                        Spotify
                      </a>
                      <a
                        className="inline-block w-full md:w-auto py-5 px-8 text-center text-sm text-white font-bold uppercase border border-white hover:text-secondary-400  hover:bg-gray-50 hover:border-gray-50 transition duration-200"
                        href="#"
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
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div className="navbar-backdrop fixed inset-0 bg-blue-800 opacity-90" />
            <nav className="relative flex flex-col py-8 w-full h-full bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-16 pr-6">
                <a
                  className="ml-16 mr-auto text-xl text-blue-800 font-semibold leading-none"
                  href="#"
                >
                  <img src="images/Vision-white-1.svg" alt="" width={150} />
                </a>
              </div>
              <div>
                <ul>
                  <li className="mb-1">
                    <a
                      className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                      href="#"
                    >
                      Company
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                      href="#"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block pl-16 py-5 font-semibold text-blue-800 hover:bg-blue-50 rounded"
                      href="#"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto px-10">
                <div className="pt-6">
                  <a
                    className="block mb-2 py-4 text-center text-blue-800 font-semibold"
                    href="#"
                  >
                    Get estimate
                  </a>
                  <a
                    className="block py-4 text-center text-blue-800 leading-normal uppercase border-2 border-blue-800 hover:bg-blue-50 font-semibold"
                    href="#"
                  >
                    CONTACT
                  </a>
                </div>
                <p className="mt-6 mb-4 text-sm text-center text-blue-400">
                  <span>
                    © 2021 All rights reserved © Wireframes Corporation 2021
                  </span>
                </p>
              </div>
            </nav>
          </div>
        </section>
        <section className="relative py-20 2xl:py-40 bg-darkCoolGray-500 overflow-hidden">
          <div className="absolute h-40 w-40 bg-primary-500 bottom-0 right-0 -mr-20 -mb-20 rounded-full" />
          <div className="container px-4 mx-auto">
            <div>
              <div className="flex flex-wrap -mx-6 lg:-mx-8">
                <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-20 lg:mb-0">
                  <span className="flex mb-10 justify-center items-center w-20 h-20 bg-secondary-500 rounded-lg">
                    <svg
                      className="w-8 h-8"
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M22.6042 34.9999H2.1875C0.981458 34.9999 0 34.0185 0 32.8124V12.3958C0 11.1897 0.981458 10.2083 2.1875 10.2083H22.6042C23.8102 10.2083 24.7917 11.1897 24.7917 12.3958V32.8124C24.7917 34.0185 23.8102 34.9999 22.6042 34.9999ZM2.1875 11.6666C1.78646 11.6666 1.45833 11.9933 1.45833 12.3958V32.8124C1.45833 33.2149 1.78646 33.5416 2.1875 33.5416H22.6042C23.0052 33.5416 23.3333 33.2149 23.3333 32.8124V12.3958C23.3333 11.9933 23.0052 11.6666 22.6042 11.6666H2.1875Z"
                          fill="white"
                        />
                        <path
                          d="M34.2702 5.83333C33.8677 5.83333 33.541 5.50667 33.541 5.10417V3.64583C33.541 2.43979 32.5596 1.45833 31.3535 1.45833H29.8952C29.4927 1.45833 29.166 1.13167 29.166 0.729167C29.166 0.326667 29.4927 0 29.8952 0H31.3535C33.3646 0 34.9993 1.63625 34.9993 3.64583V5.10417C34.9993 5.50667 34.6727 5.83333 34.2702 5.83333Z"
                          fill="white"
                        />
                        <path
                          d="M6.56217 5.83333C6.15967 5.83333 5.83301 5.50667 5.83301 5.10417V3.64583C5.83301 1.63625 7.4678 0 9.47884 0H10.9372C11.3397 0 11.6663 0.326667 11.6663 0.729167C11.6663 1.13167 11.3397 1.45833 10.9372 1.45833H9.47884C8.2728 1.45833 7.29134 2.43979 7.29134 3.64583V5.10417C7.29134 5.50667 6.96467 5.83333 6.56217 5.83333Z"
                          fill="white"
                        />
                        <path
                          d="M24.0618 1.45833H16.7702C16.3677 1.45833 16.041 1.13167 16.041 0.729167C16.041 0.326667 16.3677 0 16.7702 0H24.0618C24.4643 0 24.791 0.326667 24.791 0.729167C24.791 1.13167 24.4643 1.45833 24.0618 1.45833Z"
                          fill="white"
                        />
                        <path
                          d="M31.3535 29.1666H29.8952C29.4927 29.1666 29.166 28.8399 29.166 28.4374C29.166 28.0349 29.4927 27.7083 29.8952 27.7083H31.3535C32.5596 27.7083 33.541 26.7268 33.541 25.5208V24.0624C33.541 23.6599 33.8677 23.3333 34.2702 23.3333C34.6727 23.3333 34.9993 23.6599 34.9993 24.0624V25.5208C34.9993 27.5303 33.3646 29.1666 31.3535 29.1666Z"
                          fill="white"
                        />
                        <path
                          d="M34.2702 18.9583C33.8677 18.9583 33.541 18.6316 33.541 18.2291V10.9374C33.541 10.5349 33.8677 10.2083 34.2702 10.2083C34.6727 10.2083 34.9994 10.5349 34.9994 10.9374V18.2291C34.9994 18.6316 34.6727 18.9583 34.2702 18.9583Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </span>
                  <div className="pb-px mb-12 bg-gray-500" />
                  <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">
                    Insight and Strategy{" "}
                  </h3>
                  <p className="text-lg text-gray-200">
                    Marketing strategies that can be delivered through digital
                    marketing
                  </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-20 lg:mb-0">
                  <span className="flex mb-10 justify-center items-center w-20 h-20 bg-secondary-500 rounded-lg">
                    <svg
                      className="w-8 h-8"
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M24.0625 18.9583C23.7402 18.9583 23.431 18.8927 23.1467 18.7615L17.5 16.1175L11.8592 18.7585C11.569 18.8927 11.2598 18.9583 10.9375 18.9583C9.73146 18.9583 8.75 17.9769 8.75 16.7708C8.75 16.4529 8.81417 16.1583 8.94833 15.8681L15.5079 1.28917C15.8419 0.510417 16.6265 0 17.5 0C18.3735 0 19.1581 0.510417 19.4965 1.30083L26.0546 15.874C26.1858 16.1583 26.25 16.4529 26.25 16.7708C26.25 17.9769 25.2685 18.9583 24.0625 18.9583ZM17.5 14.5833C17.605 14.5833 17.7115 14.6067 17.8092 14.6519L23.7592 17.4373C24.166 17.6225 24.7917 17.2856 24.7917 16.7708C24.7917 16.6629 24.7712 16.5754 24.7275 16.4763L18.1621 1.88854C17.9346 1.35771 17.061 1.36792 16.8423 1.87833L10.2754 16.4719C10.2287 16.5754 10.2083 16.6629 10.2083 16.7708C10.2083 17.2856 10.8092 17.6327 11.2467 17.4358L17.1908 14.6533C17.2885 14.6067 17.395 14.5833 17.5 14.5833Z"
                          fill="white"
                        />
                        <path
                          d="M17.4997 35C8.65488 35 1.45801 27.8031 1.45801 18.9583C1.45801 12.9194 4.7903 7.46227 10.154 4.71769C10.507 4.53685 10.9518 4.6754 11.1355 5.0356C11.3193 5.3929 11.1763 5.83331 10.8176 6.0156C5.94384 8.50936 2.91634 13.4691 2.91634 18.9583C2.91634 26.9996 9.45842 33.5417 17.4997 33.5417C25.5409 33.5417 32.083 26.9996 32.083 18.9583C32.083 13.4794 29.0613 8.51956 24.1963 6.0156C23.8376 5.83185 23.6961 5.39144 23.8813 5.03414C24.0665 4.67539 24.507 4.53539 24.8628 4.7206C30.2163 7.47394 33.5413 12.931 33.5413 18.9583C33.5413 27.8031 26.3445 35 17.4997 35Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </span>
                  <div className="pb-px mb-12 bg-gray-500" />
                  <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">
                    Organic Marketing
                  </h3>
                  <p className="text-lg text-gray-200">
                    Creating an organic level of awareness is beneficial all
                    stages of the marketing funnel
                  </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-10 lg:mb-0">
                  <span className="flex mb-10 justify-center items-center w-20 h-20 bg-secondary-500 rounded-lg">
                    <svg
                      className="w-8 h-8"
                      width={36}
                      height={35}
                      viewBox="0 0 36 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M32.25 35H5.25C3.183 35 1.5 33.3638 1.5 31.3542V3.64588C1.5 3.24338 1.836 2.91672 2.25 2.91672C2.664 2.91672 3 3.24338 3 3.64588V31.3542C3 32.5603 4.0095 33.5417 5.25 33.5417H31.5V6.56255C31.5 6.16005 31.836 5.83338 32.25 5.83338C32.664 5.83338 33 6.16005 33 6.56255V34.2709C33 34.6734 32.664 35 32.25 35Z"
                          fill="white"
                        />
                        <path
                          d="M32.25 7.29167H5.25C3.183 7.29167 1.5 5.65542 1.5 3.64583C1.5 1.63625 3.183 0 5.25 0H29.25C29.664 0 30 0.326667 30 0.729167V5.83333H32.25C32.664 5.83333 33 6.16 33 6.5625C33 6.965 32.664 7.29167 32.25 7.29167ZM5.25 1.45833C4.0095 1.45833 3 2.43979 3 3.64583C3 4.85187 4.0095 5.83333 5.25 5.83333H28.5V1.45833H5.25Z"
                          fill="white"
                        />
                        <path
                          d="M12.9868 27.7055C12.2338 27.7055 11.6158 27.4897 11.1718 27.0566C10.2898 26.1991 10.2808 24.6838 11.1478 22.7866C11.9158 21.1051 13.3018 19.2443 15.0478 17.5482C16.7938 15.8507 18.7063 14.5047 20.4358 13.7565C22.3858 12.9122 23.9443 12.9209 24.8278 13.7799C25.7098 14.6374 25.7188 16.154 24.8518 18.0499C24.0838 19.7313 22.6978 21.5922 20.9518 23.2882C19.2058 24.9857 17.2933 26.3318 15.5638 27.0799C14.5963 27.4955 13.7263 27.7055 12.9868 27.7055ZM23.0143 14.582C22.5043 14.582 21.8188 14.754 21.0448 15.088C19.4803 15.7647 17.7268 17.0043 16.1068 18.5778C14.4868 20.1513 13.2148 21.8561 12.5188 23.3772C11.9488 24.627 11.8378 25.6405 12.2323 26.024C12.6268 26.4076 13.6693 26.2997 14.9548 25.7455C16.5193 25.0688 18.2728 23.8293 19.8928 22.2557C21.5128 20.6822 22.7863 18.9774 23.4823 17.4549C24.0523 16.2051 24.1633 15.1916 23.7688 14.808C23.6113 14.6563 23.3503 14.582 23.0143 14.582Z"
                          fill="white"
                        />
                        <path
                          d="M23.0128 27.7054C22.2733 27.7054 21.4033 27.4969 20.4358 27.0784C18.7063 26.3317 16.7923 24.9842 15.0478 23.2867C13.3018 21.5892 11.9173 19.7298 11.1478 18.0484C10.2808 16.1525 10.2898 14.6359 11.1718 13.7784C12.0523 12.9209 13.6138 12.9121 15.5638 13.755C17.2933 14.5017 19.2073 15.8492 20.9518 17.5467C22.6978 19.2442 24.0823 21.1036 24.8518 22.785C25.7188 24.6823 25.7098 26.1975 24.8278 27.055C24.3838 27.4882 23.7658 27.7054 23.0128 27.7054ZM12.9853 14.5819C12.6478 14.5819 12.3898 14.6563 12.2323 14.8094C11.8378 15.1929 11.9488 16.2065 12.5188 17.4563C13.2148 18.9773 14.4898 20.6821 16.1083 22.2571C17.7268 23.8321 19.4803 25.0702 21.0463 25.7469C22.3318 26.3025 23.3743 26.4075 23.7688 26.0254C24.1633 25.6419 24.0523 24.6284 23.4823 23.3786C22.7863 21.8575 21.5113 20.1527 19.8928 18.5777C18.2743 17.0027 16.5208 15.7646 14.9548 15.0879C14.1808 14.754 13.4953 14.5819 12.9853 14.5819ZM11.7013 14.2932H11.7163H11.7013Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </span>
                  <div className="pb-px mb-12 bg-gray-500" />
                  <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">
                    Paid Media
                  </h3>
                  <p className="text-lg text-gray-200">
                    Performance marketing is about using the right approach and
                    the right message to get your audience
                  </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8">
                  <span className="flex mb-10 justify-center items-center w-20 h-20 bg-secondary-500 rounded-lg">
                    <svg
                      className="w-8 h-8"
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0618 13.1249C24.0618 12.8935 23.952 12.6758 23.766 12.5384C23.5797 12.4009 23.3394 12.3599 23.1183 12.428L14.3682 15.1203C14.0623 15.2144 13.8535 15.4972 13.8535 15.8173V21.536C13.4245 21.2878 12.9264 21.1457 12.3952 21.1457C10.7844 21.1457 9.47852 22.4515 9.47852 24.0624C9.47852 25.6733 10.7844 26.9791 12.3952 26.9791C14.0044 26.9791 15.3092 25.6758 15.3118 24.0671V24.0624V16.3557L22.6035 14.1122V20.0777C22.1745 19.8294 21.6765 19.6874 21.1452 19.6874C19.5343 19.6874 18.2285 20.9932 18.2285 22.6041C18.2285 24.2149 19.5343 25.5207 21.1452 25.5207C22.7545 25.5207 24.0592 24.2174 24.0618 22.6087V22.6041V13.1249ZM22.6035 22.6041C22.6035 21.7986 21.9506 21.1457 21.1452 21.1457C20.3397 21.1457 19.6868 21.7986 19.6868 22.6041C19.6868 23.4095 20.3397 24.0624 21.1452 24.0624C21.9506 24.0624 22.6035 23.4095 22.6035 22.6041ZM12.3952 22.6041C11.5898 22.6041 10.9368 23.257 10.9368 24.0624C10.9368 24.8678 11.5898 25.5207 12.3952 25.5207C13.2006 25.5207 13.8535 24.8678 13.8535 24.0624C13.8535 23.257 13.2006 22.6041 12.3952 22.6041Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.208 3.64577C8.19447 3.64577 6.56217 5.27807 6.56217 7.2916V8.0937C4.89804 8.43149 3.64551 9.90278 3.64551 11.6666V27.7083C3.64551 29.7218 5.27781 31.3541 7.29134 31.3541H27.708C29.7215 31.3541 31.3538 29.7218 31.3538 27.7083V11.6666C31.3538 9.90278 30.1013 8.43149 28.4372 8.0937V7.2916C28.4372 5.27807 26.8049 3.64577 24.7913 3.64577H10.208ZM26.9788 8.02077V7.2916C26.9788 6.08347 25.9994 5.1041 24.7913 5.1041H10.208C8.99988 5.1041 8.02051 6.08347 8.02051 7.2916V8.02077H26.9788ZM7.29134 9.4791C6.08321 9.4791 5.10384 10.4585 5.10384 11.6666V27.7083C5.10384 28.9163 6.08321 29.8958 7.29134 29.8958H27.708C28.9161 29.8958 29.8955 28.9163 29.8955 27.7083V11.6666C29.8955 10.4585 28.9161 9.4791 27.708 9.4791H7.29134Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div className="pb-px mb-12 bg-gray-500" />
                  <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">
                    Website creation
                  </h3>
                  <p className="text-lg text-gray-200">
                    Designing, building and optimising websites and apps that
                    perform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 2xl:py-40 bg-black overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="mb-10 max-w-xl mx-auto mb-24 text-center">
              <span className="text-lg font-bold text-[#E57926] ">
                How it works
              </span>
              <h2 className="mt-12 text-5xl lg:text-6xl text-white font-bold font-heading">
                Be bold and get results
              </h2>
            </div>
            <div className="relative px-8 lg:pr-0 lg:pl-12 2xl:pl-24 mb-14 lg:mb-40 bg-orange-500 rounded-xl overflow-hidden">
              <div className="w-full lg:w-1/3 pt-12 lg:py-12">
                <h3 className="mb-4 text-xl font-bold text-white">
                  How it work? Steps
                </h3>
                <p className="text-xl text-gray-300">
                  Our team is passionate about the success of your business and
                  aims to help you get the most out of your budget.{" "}
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
                      Get in touch
                    </h3>
                    <p className="text-lg text-gray-200">
                      Nothing will happen unless you will let us. Leave us your
                      contact and let's talk!
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
                      Let us understand your business
                    </h3>
                    <p className="text-lg text-gray-200">
                      We want to be at your side as you grow your business.
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
                      Let us do our magic
                    </h3>
                    <p className="text-lg text-gray-200">
                      We will propose activities that add real value to your
                      business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a
                className="inline-block px-12 py-5 text-white font-bold bg-primary-500 hover:bg-blue-600 rounded-full transition duration-200"
                href="#"
              >
                Works for me
              </a>
            </div>
          </div>
        </section>
        <section className="py-20 2xl:py-40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="max-w-xl mx-auto mb-12 lg:mb-16 text-center">
                <span className="text-lg text-primary-500 font-bold">
                  Our Works
                </span>
                <h2 className="mt-8 mb-16 text-5xl font-bold font-heading">
                  Get to know us by our works
                </h2>
              </div>
              <div className="lg:flex justify-center mb-16 mx-auto pb-6 border-b border-gray-50">
                <button className="w-full md:w-auto px-8 py-4 text-lg font-bold shadow rounded-lg">
                  Strategy
                </button>
                <button className="w-full md:w-auto px-8 py-4 text-lg rounded-lg">
                  Organic
                </button>
                <button className="w-full md:w-auto px-8 py-4 text-lg rounded-lg">
                  Performance
                </button>
                <button className="w-full md:w-auto px-8 py-4 text-lg rounded-lg">
                  Websites and apps
                </button>
              </div>
              <div className="flex flex-wrap mb-12 lg:mb-16 -m-6">
                <div className="w-full md:w-1/2 p-6">
                  <div className="flex flex-wrap -m-6">
                    <div className="w-full lg:w-1/2 p-6">
                      <img
                        className="w-full h-64 object-cover object-top"
                        src="https://images.unsplash.com/photo-1618005198920-f0cb6201c115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                        alt=""
                      />
                    </div>
                    <div className="w-full lg:w-1/2 p-6">
                      <img
                        className="w-full h-64 object-cover"
                        src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80"
                        alt=""
                      />
                    </div>
                    <div className="w-full p-6">
                      <img
                        className="w-full h-112 object-cover"
                        src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <div className="flex flex-wrap -m-6">
                    <div className="w-full p-6">
                      <img
                        className="w-full h-112 object-cover"
                        src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
                        alt=""
                      />
                    </div>
                    <div className="w-full lg:w-1/2 p-6">
                      <img
                        className="w-full h-64 object-cover"
                        src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&q=80"
                        alt=""
                      />
                    </div>
                    <div className="w-full lg:w-1/2 p-6">
                      <img
                        className="w-full h-64 object-cover"
                        src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 text-center">
                <a
                  className="inline-block py-4 px-12 text-white font-bold bg-primary-500 hover:bg-blue-600 rounded-full"
                  href="#"
                >
                  See all
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-20 pb-32 2xl:py-40 bg-gray-800 overflow-hidden">
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
                  className="inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-12 text-white font-bold bg-primary-500 hover:bg-blue-600 rounded-full transition duration-200"
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
        </section>
        <section className="py-20 2xl:py-40 bg-gray-800">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-24 text-center text-5xl font-bold font-heading text-white">
                Our Team
              </h2>
              <div className="flex flex-wrap justify-center -mx-4 mb-20">
                <div className="w-full lg:w-1/4 px-4">
                  <div>
                    <a
                      className="hidden lg:inline-block w-full p-10 bg-primary-500 hover:bg-blue-600 rounded-lg transition duration-200"
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
                </div>
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
                  <div className="relative lg:mt-52 inline-block w-full mb-8 p-10 bg-gray-600 rounded-lg transition duration-200">
                    <div
                      className="absolute top-0 -mt-6 right-0 mr-10 lg:left-0 lg:-ml-5 lg:mt-10 w-14 h-14 bg-gray-600"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      }}
                    />
                    <h3 className="mb-2 text-3xl text-white font-bold font-heading">
                      Maxi Svennson
                    </h3>
                    <p className="mb-4 text-lg text-white font-bold">
                      Social Media Manager
                    </p>
                    <a className="flex justify-end" href="#">
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
                    <div className="relative inline-block w-full mb-8 p-10 bg-gray-600 rounded-lg transition duration-200">
                      <div
                        className="absolute top-0 -mt-6 left-0 ml-10 w-14 h-14 bg-gray-600"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                      />
                      <h3 className="mb-2 text-3xl text-white font-bold font-heading">
                        Oliver Haller
                      </h3>
                      <p className="mb-4 text-lg text-white font-bold">
                        Co-Founder
                      </p>
                      <a className="flex justify-end" href="#">
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
              <div className="text-center">
                <a
                  className="inline-block py-4 px-12 border border-gray-200 hover:border-gray-50 rounded-full font-bold text-white"
                  href="#"
                >
                  More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="mb-14 text-center">
              <span className="text-lg text-blue-400 font-bold">
                What's new at Shuffle
              </span>
              <h2 className="mt-8 text-5xl font-bold font-heading text-white">
                Latest blog
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
                className="inline-block py-5 px-12 mr-4 bg-primary-500 hover:bg-blue-600 rounded-full text-white font-bold transition duration-200"
                href="#"
              >
                See all
              </a>
            </div>
          </div>
        </section>
        <section className="py-20 2xl:py-40 bg-gray-800">
          <div className="container mx-auto px-4 mb-12 md:mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <a
                className="inline-block mb-20 text-white text-xl font-bold"
                href="#"
              >
                <img src="images/Group-4.svg" alt="" width={200} />
              </a>
              <ul className="mb-12 md:mb-20 flex flex-wrap items-center justify-center space-x-6 md:justify-between text-lg">
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
              </ul>
              <div className="flex justify-center">
                <a
                  className="flex justify-center items-center w-12 h-12 mr-4 bg-gray-600 rounded-full"
                  href="#"
                >
                  <svg
                    className="h-4 w-4 text-white"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M17.0064 3.181e-08H0.992752C0.444397 0.00027469 -0.000137297 0.445084 3.181e-08 0.993576V17.0072C0.00027469 17.5556 0.445084 18.0001 0.993576 18H17.0064C17.5551 18.0001 17.9999 17.5555 18 17.0068C18 17.0067 18 17.0066 18 17.0064V0.992752C17.9997 0.444397 17.5549 -0.000137297 17.0064 3.181e-08Z"
                        fill="white"
                      />
                      <path
                        d="M12.4277 18.0001V11.0391H14.7744L15.126 8.31453H12.4277V6.57924C12.4277 5.79221 12.6462 5.25594 13.7748 5.25594H15.2051V2.82562C14.9562 2.79253 14.1025 2.71851 13.109 2.71851C11.0348 2.71851 9.61523 3.98413 9.61523 6.30939V8.31453H7.27734V11.0391H9.61523V18.0001H12.4277Z"
                        fill="#2D2D33"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  className="flex justify-center items-center w-12 h-12 mr-4 bg-gray-600 rounded-full"
                  href="#"
                >
                  <svg
                    className="h-4 w-4 text-white"
                    width={18}
                    height={18}
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
                <a
                  className="flex justify-center items-center w-12 h-12 bg-gray-600 rounded-full"
                  href="#"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    width={18}
                    height={16}
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2.41887C17.3306 2.7125 16.6174 2.90712 15.8737 3.00162C16.6388 2.54487 17.2226 1.82712 17.4971 0.962C16.7839 1.38725 15.9964 1.68763 15.1571 1.85525C14.4799 1.13413 13.5146 0.6875 12.4616 0.6875C10.4186 0.6875 8.77387 2.34575 8.77387 4.37863C8.77387 4.67113 8.79862 4.95237 8.85938 5.22012C5.7915 5.0705 3.07687 3.60013 1.25325 1.36025C0.934875 1.91263 0.748125 2.54488 0.748125 3.2255C0.748125 4.5035 1.40625 5.63637 2.38725 6.29225C1.79437 6.281 1.21275 6.10888 0.72 5.83775C0.72 5.849 0.72 5.86363 0.72 5.87825C0.72 7.6715 1.99912 9.161 3.6765 9.50412C3.37612 9.58625 3.04875 9.62562 2.709 9.62562C2.47275 9.62562 2.23425 9.61213 2.01038 9.56262C2.4885 11.024 3.84525 12.0984 5.4585 12.1332C4.203 13.1154 2.60888 13.7071 0.883125 13.7071C0.5805 13.7071 0.29025 13.6936 0 13.6565C1.63462 14.7106 3.57188 15.3125 5.661 15.3125C12.4515 15.3125 16.164 9.6875 16.164 4.81175C16.164 4.64862 16.1584 4.49113 16.1505 4.33475C16.8829 3.815 17.4982 3.16587 18 2.41887Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-lg text-white pt-12 px-4 border-t border-gray-500">
            <span>© 2021 Shuffle.</span>
            <span className="text-gray-300">All rights reserved.</span>
          </p>
        </section>
      </>
    </React.Fragment>
  );
}
