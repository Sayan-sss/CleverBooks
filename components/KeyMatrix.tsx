"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { matrix } from "@/data";

const KeyMatrix = () => {
  return (
    <section id="" className="py-20">
      <div className="flex flex-col  items-center max-lg:mt-10">
        <StickyScroll content={matrix} />
      </div>
    </section>
  );
};

export default KeyMatrix;
