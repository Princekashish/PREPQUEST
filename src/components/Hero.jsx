"use client";
import { useGSAP } from "@gsap/react";
import { MoveRight } from "lucide-react";
import React, { useEffect } from "react";
import { gsap } from "gsap";


function Hero() {
  useGSAP(() => {
    gsap.to("#mtext", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      ease: "power2.inOut",
    });
    gsap.to("#mrtext", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      ease: "power2.inOut",
     
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row  lg:justify-around h-[80vh] md:h-1/2 lg:h-screen gap-10 items-center font-sf-pro ">
      <div className="p-5  gap-10 flex flex-col justify-center items-center  ">
        <div className=" gap-5 flex flex-col justify-center items-center ">
          <h1 className="capitalize text-3xl md:text-7xl lg:text-4xl font-bold lg:tracking-wider ">
            Unlock Success
          </h1>
          <p id="mtext" className="capitalize opacity-0 translate-y-10 md:text-3xl lg:text-sm">
            Enhance Learning Journey
          </p>
          <button
            id="mtext"
            className="bg-[#d15109] opacity-0 text-white px-8 py-2 rounded-full shadow-xl hover:bg-black duration-500 md:text-2xl lg:text-sm"
          >
            Explore
          </button>
        </div>
        <div className="lg:block hidden justify-center lg:h-[50vh] items-center ">
          <video
            src="/Image/vdo.mp4"
            autoPlay
            loop
            muted
            className="w-full h-[100%] max-w-md object-cover rounded-t-full pointer-events-none"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex justify-center lg:hidden items-center">
          <video
            src="/Image/vdosmall.mp4"
            autoPlay
            loop
            muted
            className="w-[100%] max-w-md object-cover rounded-xl pointer-events-none"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="p-5 text-center space-y-3 ">
        <img
          src="https://images.pexels.com/photos/2440970/pexels-photo-2440970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="hidden lg:block w-[500px] h-[500px] rounded-2xl pointer-events-none"
        />
        <h1  className="capitalize text-xl font-semibold tracking-tight md:text-5xl lg:text-xl">
          Find Previous Year Question Papers
        </h1>
        <p className="font-light md:text-3xl lg:text-sm">Ace your exams with ease</p>
        <div id="mrtext" className="flex justify-center items-center  gap-3 opacity-0  translate-y-20">
          <button className="bg-black text-white textwhite px-8 py-3 rounded-full shadow-xl capitalize tracking-tighter hover:bg-orange-600 duration-500 md:text-3xl lg:text-sm">
            Get started
          </button>
          <button className="flex justify-center gap-1 items-center px-8 hover:bg-black hover:text-white py-2 rounded-full shadow-xl capitalize tracking-tighter md:text-3xl lg:text-sm">
            learn more <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
