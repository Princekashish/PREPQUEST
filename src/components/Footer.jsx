"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  useGSAP(() => {
    gsap.to("#udt", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.25,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#udt",
        start: "top 85%",
        toggleActions: "restart  reverse restart  reverse",
      },
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  console.log(isSubmitted);

  const contact = [
    {
      icon: <Mail />,
      email: "princekashish136@gmail.com",
    },
    {
      icon: <MapPin />,
      email: "Delhi-VIPS",
    },
    {
      icon: <Phone />,
      email: "123-456-789",
    },
  ];

  return (
    <div className="font-sf-pro p-5 h-[55vh] lg:h-[40vh]  md:h-[25vh] text-black">
      <div className="flex flex-col justify-center items-center md:flex-row md:gap-8 lg:gap-0">
        <h1 className="capitalize text-2xl font-bold tracking-tight text-center hidden lg:block">
          Find Previous Year Question Papers
        </h1>
        <h1 className="capitalize text-2xl font-bold tracking-tight text-center lg:hidden md:text-5xl lg:text-2xl">
          PREPQUEST
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 lg:p-8 md:flex-row " >
          {contact.map((item, i) => (
            <div key={i} className="">
              <div className="flex gap-3">
                <h1 className="pt-2 ">{item.icon}</h1>
                <h1 className="pt-2 md:text-xl lg:text-sm">{item.email}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-white rounded-t-full p-5 mt-5 h-full w-full flex flex-col justify-center items-center ">
       <div id="udt"  className="opacity-0 translate-y-20 md:opacity-100 lg:opacity-0">
       <h1 className="text-xl font-semibold text-center lg:tracking-wider capitalize p-5 lg:p-0 md:text-3xl lg:text-lg">
          Stay updated, subscribe now
        </h1>
        {isSubmitted ? (
          <p className="capitalize p-3 text-xs font-extralight">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email here *"
              className="px-5 outline-none border-b p-8 w-full"
              required
            />
            <button
              type="submit"
              className="bg-[#d15109] text-white px-8 py-2 rounded-full shadow-xl mt-5 md:text-xl lg:text-sm"
            >
              Subscribe
            </button>
          </form>
        )}
       </div>
      </div>
    </div>
  );
}

export default Footer;
