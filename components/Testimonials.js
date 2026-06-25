"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Anthony Gilfred",
    role: "Head of Product Development",
    image: "/common/client1.webp",
    text:
      "The game we launched with GameIgnix has been an absolute hit! We've worked with several game development companies in the past, but none have shown the level of expertise they bring. Their certified developers are true experts, and their attention to detail from gameplay mechanics to visuals is exceptional. We are already excited to start planning our next project with them."
  },
  {
    name: "Emily Thomson",
    role: "Project Manager",
    image: "/common/client1.webp",
    text:
      "The team at GameIgnix is nothing short of amazing. Impressed with how quickly they understood our concept and delivered beyond our expectations in every way. The game went on to receive thousands of downloads within a few days of its launch. We couldn’t be happier with the results. Would love to recommend GameIgnix to anyone."
  },
  {
    name: "David Fitzgibbon",
    role: "Lead Designer",
    image: "/common/client1.webp",
    text:
      "We’ve been working with GameIgnix for over a year now, and their expertise is undeniable. We approached them to create a multiplayer battle royale game, and this team nailed it. The realistic graphics blew us away, and the game remains smooth and stable, even with a large number of players in action. GameIgnix is a good company to collaborate with, and we trust it completely for our future projects."
  },
  {
    name: "Sophia Williams",
    role: "Creative Director",
    image: "/common/client1.webp",
    text:
      "This team has been proactive, responsive, and available at all times to attend to our queries during the whole development process. They consistently met every deadline, and the game was ready on time. What impressed me most about working with this team was their technical expertise coupled with a deep understanding of player psychology. Found a reliable partner for the long term!"
  }
];


export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="testimsc">
      <div className="container">
        <div className="text-center cm-head2">
          <h2 className="inline-block w-fit mx-auto my-4 px-0 md:px-10 text-[24px] md:text-[35px] leading-[32px] md:leading-[1.5] tracking-0 md:tracking-[2px] text-white [-webkit-text-stroke:1px_#ff8600] text-center relative max-w-full md:max-w-[90%] box-border font-bold uppercase before:content-[''] before:absolute before:top-[20px] before:w-[71px] before:h-[20px] before:left-0 before:-translate-x-full  before:bg-none md:before:bg-[url('/common/head-sep.webp')] before:bg-no-repeat before:bg-center before:bg-contain after:content-[''] after:absolute after:top-[20px] after:w-[71px] after:h-[20px] after:right-0 after:translate-x-full after:bg-none md:after:bg-[url('/common/head-sep.webp')] after:bg-no-repeat after:bg-center after:bg-contain">
            Trusted By Happy Clients
          </h2>
          <p className="font-semibold cm-stit text-orange italic">
            Dedicated Partner For Leading Brands and Startups
          </p>
          <p className="lead text-gray-400">
            Our success is driven by strong, long-lasting relationships that we have built with game developers, studios, and businesses of 
            all sizes, delivering exceptional gaming solutions that exceed expectations.
          </p>
        </div>
        <div className="testim-wrapper relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop
          speed={500}
          navigation={{
            prevEl: ".slick-prev",
            nextEl: ".slick-next"
          }}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex + 1)
          } className="testimonial-slider"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="testimonial">
              <div className="testimonial-inner">
                <div className="testimonial-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="max-w-full h-auto flex-shrink-0"
                />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    {item.text}
                  </p>
                  <p className="testimonial-author">
                    <strong>{item.name}</strong>
                    <br />
                    <span className="designation">{item.role}</span>
                  </p>                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-arrows-wrapper flex justify-center items-center gap-4 mt-6">                   
          <button className="slick-prev slick-arrow" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"
             strokeLinejoin="round" className="w-8 h-8">
              <path d="M10 4l-6 6 6 6" />
              <path d="M5 10h15" />
            </svg>
          </button>
          <span className="testimonial-counter text-white">
            {activeIndex}/{testimonials.length}
          </span>
          <button className="slick-next slick-arrow" type="button">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"
             strokeLinejoin="round" className="w-8 h-8">
              <path d="M10 4l6 6-6 6" />
              <path d="M1 10h15" />
           </svg>            
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
