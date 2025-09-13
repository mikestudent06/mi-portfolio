"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import Image from "next/image";
import { FocusCards } from "./ui/testimnials-focus-cards";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="heading mb-4">
            Quelques mots des{" "}
            <span className="text-purple">clients satisfaits</span>
          </h1>
        </div>

        {/* Testimonials Cards */}
        <div className="mb-20">
          <FocusCards cards={testimonials} />
        </div>

        {/* Companies Section */}
        <div className="text-center">
          {/* <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-12">
            Ils nous font confiance
          </h3> */}

          {/* Companies Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {companies.map((company) => (
              <div
                key={company.id}
                className="group flex items-center justify-center p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:scale-105 min-h-[100px] w-full"
              >
                <div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative">
                    <Image
                      src={company.img}
                      alt={company.name}
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={company.nameImg}
                      alt={company.name}
                      width={company.id === 4 || company.id === 5 ? 80 : 120}
                      height={company.id === 4 || company.id === 5 ? 30 : 40}
                      className="h-6 w-auto md:h-8 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Decorative Element */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-500"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
