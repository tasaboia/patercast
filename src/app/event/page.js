import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "../_components/form";
import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import CallToAction from "./components/call-to-action";
import Zoom from "./components/zoom";
import Footer from "../_components/footer";

export default function Event() {
  return (
    <div>
      <Hero />
      <AboutUs />
      {/* <Zoom /> */}
      <CallToAction />
      {/* <Footer /> */}
    </div>
  );
}
