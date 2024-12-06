import React from "react";

export default function IndexSectionNewsletter9() {
  return (
    <React.Fragment>
      <>
        <section className="py-24 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="py-14 bg-gray-900 bg-opacity-30 rounded-6xl">
              <div className="md:max-w-2xl mx-auto text-center px-4">
                <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                  Nightsable Card
                </span>
                <h2 className="font-heading mb-6 text-5xl text-white tracking-5xl">
                  Industry insights you wan`t delete. Delivered to your inbox
                  weekly
                </h2>
                <p className="mb-12 text-gray-300 max-w-lg mx-auto">
                  Join 10,000 founders, get early access to Nightsable features,
                  and learn how to squeeze every drop of revenue
                </p>
              </div>
              <div className="px-4">
                <div className="flex flex-wrap md:max-w-xl mx-auto -m-2">
                  <div className="w-full md:flex-1 p-2">
                    <div className="md:max-w-xl mx-auto border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                      <input
                        className="px-6 py-4 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent"
                        type="text"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-auto p-2">
                    <a
                      className="inline-block px-14 py-4 font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                      href="#"
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
