import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative flex py-20 2xl:py-40  bg-darkCoolGray-500 overflow-hidden justify-center items-center ">
      <div className="absolute h-40 w-40 bg-primary-500 bottom-0 right-0 -mr-20 -mb-20 rounded-full" />

      <div className="container flex   flex-col md:flex-col lg:flex-row w-full  ">
        <div className="lg:px-10 py-10 lg:py-0 flex justify-center items-center lg:h-full ">
          <iframe
            width="650"
            height="365"
            src="https://www.youtube.com/embed/Qrw_B5OjH3E?si=BN-GSdT2eVKksJFT?autoplay=0&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <motion.div
          className="   flex lg:items-center "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="flex flex-wrap -mx-6 lg:-mx-8 p-10">
            <div className="w-full md:w-1/2 lg:w-1/3  px-6 lg:px-8 mb-20 lg:mb-0">
              <span className="flex mb-5 justify-center items-center lg:w-10 lg:h-10 w-20 h-20 bg-secondary-500 rounded-lg">
                <svg
                  className="w-6 h-6"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.9642 13.8226C22.9603 13.7638 22.9508 13.7055 22.936 13.6484L20.6313 7.51135C21.0508 7.24006 21.3957 6.86818 21.6347 6.42956C21.8738 5.99095 21.9993 5.49952 22 5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4C20.7348 4 20.4804 4.10536 20.2929 4.29289C20.1054 4.48043 20 4.73478 20 5C19.9999 5.22285 19.9254 5.43929 19.7884 5.61499C19.6513 5.79069 19.4595 5.91559 19.2433 5.96987C19.0272 6.02416 18.7991 6.00472 18.5953 5.91465C18.3915 5.82457 18.2235 5.66902 18.1182 5.47266C17.8616 5.01717 17.4863 4.63972 17.0324 4.38042C16.5784 4.12111 16.0627 3.98965 15.54 4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4H8.46C7.93731 3.98965 7.42158 4.12111 6.96762 4.38042C6.51366 4.63972 6.13844 5.01717 5.88184 5.47266C5.77647 5.66902 5.60855 5.82457 5.40471 5.91465C5.20088 6.00472 4.97281 6.02416 4.75668 5.96987C4.54054 5.91559 4.34872 5.79069 4.21165 5.61499C4.07457 5.43929 4.00008 5.22285 4 5C4 4.73478 3.89464 4.48043 3.70711 4.29289C3.51957 4.10536 3.26522 4 3 4C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5C2.00065 5.49952 2.12621 5.99095 2.36525 6.42956C2.60429 6.86818 2.94922 7.24006 3.36865 7.51135L1.064 13.6484C1.04921 13.7055 1.03977 13.7638 1.03581 13.8226C1.01825 13.8805 1.00626 13.9399 1 14C1 14.0093 1.00269 14.0178 1.00275 14.0271C1.00305 14.0403 1.00575 14.0524 1.00665 14.0655C1.02222 15.1144 1.4498 16.115 2.197 16.8512C2.94421 17.5874 3.95105 18.0001 5 18.0001C6.04895 18.0001 7.05579 17.5874 7.803 16.8512C8.5502 16.115 8.97778 15.1144 8.99335 14.0655C8.9942 14.0524 8.99695 14.0403 8.99725 14.0271C8.99731 14.0178 9 14.0093 9 14C8.99376 13.9399 8.98178 13.8805 8.96423 13.8226C8.96027 13.7638 8.95083 13.7055 8.93604 13.6484L6.62866 7.50421C7.05242 7.23377 7.40114 6.86085 7.64258 6.41992C7.72984 6.2842 7.85137 6.1739 7.99489 6.10017C8.13841 6.02644 8.29885 5.99189 8.46 6H11V20H8C7.73478 20 7.48043 20.1054 7.29289 20.2929C7.10536 20.4804 7 20.7348 7 21C7 21.2652 7.10536 21.5196 7.29289 21.7071C7.48043 21.8946 7.73478 22 8 22H16C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21C17 20.7348 16.8946 20.4804 16.7071 20.2929C16.5196 20.1054 16.2652 20 16 20H13V6H15.54C15.7011 5.9919 15.8616 6.02646 16.0051 6.10018C16.1486 6.17391 16.2701 6.2842 16.3574 6.41992C16.5988 6.86085 16.9475 7.23377 17.3713 7.50421L15.064 13.6484C15.0492 13.7055 15.0398 13.7638 15.0358 13.8226C15.0182 13.8805 15.0063 13.9399 15 14C15 14.0093 15.0027 14.0178 15.0028 14.0271C15.0031 14.0403 15.0057 14.0524 15.0066 14.0655C15.0222 15.1144 15.4498 16.115 16.197 16.8512C16.9442 17.5874 17.951 18.0001 19 18.0001C20.049 18.0001 21.0558 17.5874 21.803 16.8512C22.5502 16.115 22.9778 15.1144 22.9933 14.0655C22.9942 14.0524 22.997 14.0403 22.9972 14.0271C22.9973 14.0178 23 14.0093 23 14C22.9938 13.9399 22.9818 13.8805 22.9642 13.8226ZM5 8.85553L6.5564 13H3.4436L5 8.85553ZM6.72266 15C6.54618 15.3011 6.29479 15.5515 5.99293 15.7267C5.69107 15.9019 5.34901 15.9961 5 16C4.64903 15.9999 4.30428 15.9074 4.00036 15.7319C3.69644 15.5563 3.44405 15.3039 3.26855 15H6.72266ZM19 8.85553L20.5564 13H17.4436L19 8.85553ZM19 16C18.649 15.9999 18.3043 15.9074 18.0004 15.7319C17.6964 15.5563 17.4441 15.3039 17.2686 15H20.7227C20.5462 15.3011 20.2948 15.5515 19.9929 15.7267C19.6911 15.9019 19.349 15.9961 19 16Z"
                    fill="white"
                  />
                </svg>
              </span>
              <div className="pb-px mb-12 bg-gray-500" />
              <h3 className="mt-12 mb-8 text-sm font-bold font-heading text-white">
                Paternidade & Valores
              </h3>
              <p className="text-sm text-gray-200">
                O Patercast se concentra em promover os valores da paternidade e
                redescobrir aspectos esquecidos da masculidade
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-6 lg:px-8 mb-20 lg:mb-0">
              <span className="flex mb-5 justify-center items-center lg:h-10 w-20 h-20 bg-secondary-500 rounded-lg">
                <svg
                  className="w-6 h-6"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.47 18.82L21.47 14.96L18.32 3.37C18.2519 3.11434 18.0853 2.89607 17.8567 2.763C17.628 2.62992 17.3559 2.59289 17.1 2.66L13.23 3.66C13.1376 3.55764 13.0251 3.47549 12.8995 3.4187C12.7739 3.36191 12.6379 3.33171 12.5 3.33H2.5C2.23478 3.33 1.98043 3.43536 1.79289 3.62289C1.60536 3.81043 1.5 4.06478 1.5 4.33V20.33C1.5 20.5952 1.60536 20.8496 1.79289 21.0371C1.98043 21.2246 2.23478 21.33 2.5 21.33H12.5C12.7652 21.33 13.0196 21.2246 13.2071 21.0371C13.3946 20.8496 13.5 20.5952 13.5 20.33V12.33L15.7 20.55C15.7586 20.7682 15.8893 20.9601 16.0709 21.0944C16.2525 21.2288 16.4742 21.2977 16.7 21.29C16.7864 21.2998 16.8736 21.2998 16.96 21.29L21.79 20C21.9177 19.9659 22.0374 19.9067 22.1421 19.8261C22.2468 19.7454 22.3344 19.6448 22.4 19.53C22.5055 19.3088 22.5302 19.0576 22.47 18.82ZM6.47 19.37H3.47V17.37H6.47V19.37ZM6.47 15.37H3.47V9.37H6.47V15.37ZM6.47 7.37H3.47V5.37H6.47V7.37ZM11.47 19.37H8.47V17.37H11.47V19.37ZM11.47 15.37H8.47V9.37H11.47V15.37ZM11.47 7.37H8.47V5.37H11.47V7.37ZM13.72 5.63L16.62 4.85L17.14 6.78L14.24 7.56L13.72 5.63ZM16.31 15.29L14.76 9.49L17.66 8.71L19.21 14.51L16.31 15.29ZM17.31 19.15L16.79 17.22L19.69 16.44L20.21 18.37L17.31 19.15Z"
                    fill="white"
                  />
                </svg>
              </span>
              <div className="pb-px mb-12 bg-gray-500" />
              <h3 className="mt-12 mb-8 text-sm font-bold font-heading text-white">
                Abordagem interdisciplinar
              </h3>
              <p className="text-sm text-gray-200">
                A abordagem interdisciplinar inclui literatura, arte,
                espiritualidade e experiencias pessoais para atingir seu
                objetivo
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-6 lg:px-8 mb-10 lg:mb-0">
              <span className="flex mb-5 justify-center items-center lg:h-10 w-20 h-20 bg-secondary-500 rounded-lg">
                <svg
                  className="w-6 h-6"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1801 10.19C19.4608 10.0598 18.7311 9.99624 18.0001 10C17.5801 10 17.1701 10 16.7601 10.08C16.2497 9.39888 15.5982 8.83605 14.8501 8.43C15.4927 7.72825 15.8494 6.81148 15.8501 5.86C15.8501 4.83626 15.4435 3.85446 14.7196 3.13057C13.9957 2.40668 13.0139 2 11.9901 2C10.9664 2 9.98459 2.40668 9.2607 3.13057C8.53681 3.85446 8.13013 4.83626 8.13013 5.86C8.13087 6.81148 8.48759 7.72825 9.13013 8.43C8.38653 8.83816 7.73606 9.39668 7.22013 10.07C6.83013 10 6.42013 10 6.00013 10C5.26856 10.0028 4.5388 10.0731 3.82013 10.21C3.58718 10.2526 3.3769 10.3765 3.22673 10.5596C3.07657 10.7427 2.99627 10.9732 3.00013 11.21V19.46C2.99989 19.6069 3.03203 19.7521 3.09425 19.8852C3.15647 20.0182 3.24725 20.136 3.36013 20.23C3.4723 20.3246 3.60391 20.3933 3.74563 20.4313C3.88734 20.4694 4.03568 20.4757 4.18013 20.45C4.77854 20.3197 5.3879 20.246 6.00013 20.23C7.93723 20.2279 9.8323 20.7947 11.4501 21.86L11.5801 21.91C11.7128 21.9676 11.8555 21.9982 12.0001 22C12.0956 21.9988 12.1902 21.9819 12.2801 21.95H12.3501L12.4801 21.9C14.1134 20.8073 16.0351 20.2259 18.0001 20.23C18.6111 20.2328 19.2204 20.2931 19.8201 20.41C19.9646 20.4357 20.1129 20.4294 20.2546 20.3913C20.3964 20.3533 20.528 20.2846 20.6401 20.19C20.753 20.096 20.8438 19.9782 20.906 19.8452C20.9682 19.7121 21.0004 19.5669 21.0001 19.42V11.17C20.9993 10.9366 20.9168 10.7109 20.7671 10.5319C20.6173 10.353 20.4097 10.232 20.1801 10.19ZM12.0001 4C12.4686 4.03442 12.9067 4.2448 13.2264 4.58888C13.5461 4.93297 13.7238 5.38529 13.7238 5.855C13.7238 6.32471 13.5461 6.77703 13.2264 7.12112C12.9067 7.4652 12.4686 7.67558 12.0001 7.71C11.5317 7.67558 11.0936 7.4652 10.7739 7.12112C10.4541 6.77703 10.2764 6.32471 10.2764 5.855C10.2764 5.38529 10.4541 4.93297 10.7739 4.58888C11.0936 4.2448 11.5317 4.03442 12.0001 4ZM11.0001 19.33C9.43281 18.6055 7.7268 18.2302 6.00013 18.23C5.67013 18.23 5.34013 18.23 5.00013 18.28V12C5.8387 11.9062 6.68595 11.923 7.52013 12.05H7.63013C8.82173 12.269 9.96361 12.7027 11.0001 13.33V19.33ZM12.0001 11.6C11.5555 11.3435 11.0945 11.1163 10.6201 10.92H10.5601C10.2301 10.79 9.90013 10.66 9.56013 10.56C10.2544 10.0074 11.1128 9.70132 12.0001 9.69C12.8851 9.69561 13.7432 9.99455 14.4401 10.54C13.5912 10.805 12.7732 11.1604 12.0001 11.6ZM19.0001 18.28C16.9468 18.0737 14.8756 18.4189 13.0001 19.28V13.28C14.0385 12.6688 15.1811 12.2552 16.3701 12.06H16.5701C17.3741 11.9348 18.191 11.9146 19.0001 12V18.28Z"
                    fill="white"
                  />
                </svg>
              </span>
              <div className="pb-px mb-12 bg-gray-500" />
              <h3 className="mt-12 mb-8 text-sm font-bold font-heading text-white">
                Sociedade Transformada
              </h3>
              <p className="text-sm text-gray-200">
                A visão é transformar a sociedade por meio da paternidade,
                inspirando os homens a abraçar seu papel com amor, sabedoria e
                propósito, com foco na família.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}