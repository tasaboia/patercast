import React from "react";

export default function Zoom() {
  return (
    <section class="relative">
      <div class="relative z-10 overflow-hidden pt-16">
        <div class="container px-4 mx-auto">
          <div class="text-center">
            <div class="relative max-w-max mx-auto">
              <img
                class="mx-auto transform hover:scale-105 transition ease-in-out duration-1000"
                src="assets/flaro-assets/images/headers/dashboard.png"
                alt=""
              />
              <img
                class="hidden xl:block absolute -left-52 top-16"
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
