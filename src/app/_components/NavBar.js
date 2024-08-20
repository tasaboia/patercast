import Link from "next/link";
import React from "react";

export default function NavBar({ children }) {
  return (
    <div>
      <nav className=" w-full h-16 px-8 xl:p items-center flex bg-black justify-between z-50">
        <Link className="w-20" href={"/"}>
          <img src="/assets/logo.png" alt="" />
        </Link>

        <Link
          href={"form"}
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Pesquisa
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
