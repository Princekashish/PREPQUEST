"use client";
import React from "react";
import { Download, ScanEye, ScanSearch, Smartphone } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  useGSAP(() => {
    gsap.to("#feature", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#feature",
        start: "top 85%",
        // scrub: 4,
        toggleActions: "restart  none none none",
      },
    });
    gsap.to("#act", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#act",
        start: "top 85%",
        toggleActions: "restart  reverse restart  reverse",
      },
    });
    gsap.to("#box", {
      y: 0,
      opacity:1,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#box",
        start: "top 85%",
        toggleActions: "restart  none none none",
      },
    });
  }, []);

  const features = [
    {
      icon: <ScanSearch />,
      text: "Search Functionality",
      para: "Easily search for previous year question papers by entering keywords or filters",
      id: "box1", // Assigning a unique ID for the first box
    },
    {
      icon: <Download />,
      text: "Download Options",
      para: "Download question papers in PDF format for offline access and study",
      id: "box2", // Assigning a unique ID for the second box
    },
    {
      icon: <ScanEye />,
      text: "Subject-wise Categorization",
      para: "Browse question papers based on specific subjects for targeted study material",
      id: "box3", // Assigning a unique ID for the third box
    },
    {
      icon: <Smartphone />,
      text: "User-Friendly Interface",
      para: "Navigate the website effortlessly with a simple and intuitive design",
      id: "box4", // Assigning a unique ID for the fourth box
    },
  ];

  return (
    <div className="font-sf-pro  ">
      <div className="p-5 flex flex-col justify-center items-center md:mt-20">
        <div
          id="feature"
          className="flex flex-col justify-center items-center gap-3 opacity-0 translate-y-10 "
        >
          <h3 className="uppercase text-xs font-medium md:text-2xl lg:text-sm">Features</h3>
          <h1 className="capitalize text-2xl font-bold tracking-wider md:text-5xl lg:text-4xl">
            Explore our Features
          </h1>
          <p className="mt-3 text-sm tracking-tight text-center md:text-2xl lg:text-lg">
            Discover how our platform can assist you in finding previous year
            question papers easily
          </p>
        </div>
        <div
          id="box"
          className= " mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-5 p-5 translate-y-20 opacity-0"
        >
          {features.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-center  items-center bg-[#e9e7de] rounded-xl p-5   hover:shadow-md md:h-[230px] md:w-[400px] lg:h-[200px] lg:w-[600px]"
            >
              <div className="mb-2 flex gap-3 lg:gap-5 items-center justify-center ">
                {item.icon}
                <h2 className="text-lg font-semibold md:text-3xl lg:text-lg">{item.text}</h2>
              </div>
              <p className="text-sm mt-1 md:text-center md:text-xl lg:text-sm">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        id="act"
        className="h-[40vh] md:h-[25vh] lg:h-[50vh] flex flex-col justify-center items-center p-5 opacity-0 translate-y-20"
      >
        <h1 className="text-lg font-semibold text-center lg:text-2xl lg:font-bold   md:text-5xl ">
          Access a Wide Range of <br className="hidden md:block lg:hidden  "/> Previous Year Question Papers
        </h1>
        <div className=" flex flex-col justify-center items-center md:mt-10 lg:mt-0">
          <p className="text-sm mt-3 text-center lg:p-5 lg:font-thin  md:text-2xl lg:text-lg">
            Prepare for your exams effectively by practicing with authentic
            previous year question papers. Our platform offers a{" "}
            <br className="hidden lg:block" /> comprehensive collection of
            question papers from various educational boards and universities.
            Enhance your exam <br className="hidden lg:block" /> preparation and
            boost your confidence by solving these papers.
          </p>
          <button className=" bg-[#d15109] md:text-3xl lg:text-sm text-white px-8 py-2 rounded-full tracking-wide shadow-xl font-semibold mt-5">
            Explore Papers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
