import React from "react";

export default function NavBar() {
  return (
    <nav className="relative py-8 px-4 xl:px-10 bg-primary-500 flex justify-center">
      <div className="w-28">
        <img src="/assets/logo.png" alt="" />
      </div>
      {/* <div className="flex justify-between items-center">
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

        <div className="hidden lg:block">
          <a
            className="inline-block py-3 px-8 text-sm text-white hover:text-blue-50 uppercase font-semibold border-2 border-white"
            href="#"
          >
            Contato
          </a>
        </div>
      </div> */}
    </nav>
  );
}
