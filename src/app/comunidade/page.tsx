"use client";

import About from "../_components/about/IndexSectionAbout10";
import ExclusiveContent from "../_components/exclusiveContent/exclusive-content";
import FAQS from "../_components/faqs/faqs";
import CTA from "../_components/features/CTA";
import Hero from "../_components/headers/Hero";
import Product from "../_components/newsletter/product";
import Pricing from "../_components/pricing/pricing";
import Team from "../_components/team/team";
import Testimonials from "../_components/testimonials/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Product />
      <About />
      <CTA />
      <ExclusiveContent />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQS />
    </div>
  );
}
