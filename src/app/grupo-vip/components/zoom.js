import React from "react";

export default function Zoom() {
  return (
    <section className="relative">
      <div className="relative z-10 overflow-hidden pt-16">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <div className="relative max-w-max mx-auto">
              <img
                className="mx-auto transform hover:scale-105 transition ease-in-out duration-1000"
                src="assets/flaro-assets/images/headers/dashboard.png"
                alt=""
              />
              <img
                className="hidden xl:block absolute -left-52 top-16"
                src="assets/flaro-assets/images/headers/card.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
