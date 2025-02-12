import React from "react";
import Carousel, { Slider, SliderContainer } from "./carousel.tsx";

export default function AutoStartSlider() {
  const OPTIONS = { loop: true };

  return (
    <Carousel
      options={OPTIONS}
      isAutoPlay={true}
      className="w-full relative mb-16"
    >
      <SliderContainer>
        <Slider className="w-full">
          {/* On mobile, maintain 16:9 ratio; on medium screens and above use a fixed height */}
          <div
            className="w-full aspect-[16/9] md:h-[90dvh] bg-cover bg-center"
            style={{ backgroundImage: "url('./images/c1.jpg')" }}
          />
        </Slider>
        <Slider className="w-full">
          <div
            className="w-full aspect-[16/9] md:h-[90dvh] bg-cover bg-center"
            style={{ backgroundImage: "url('./images/c2.jpg')" }}
          />
        </Slider>
        <Slider className="w-full">
          <div
            className="w-full aspect-[16/9] md:h-[90dvh] bg-cover bg-center"
            style={{ backgroundImage: "url('./images/c3.jpg')" }}
          />
        </Slider>
        <Slider className="w-full">
          <div
            className="w-full aspect-[16/9] md:h-[90dvh] bg-cover bg-center"
            style={{ backgroundImage: "url('./images/c4.jpg')" }}
          />
        </Slider>
      </SliderContainer>
      <div
        className="absolute z-3 flex flex-col items-center text-white font-medium text-2xl md:text-3xl m-5 rounded-xl p-5"
        style={{
          fontFamily: '"Roboto", serif',
          top: "45%",
          left: "65%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="whitespace-nowrap">Get In Touch</span>
        <a
          href="/#ContactUs"
          className="inline-block bg-blue-500 text-xl text-white mt-3 py-1 px-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Enquiry
        </a>
      </div>
    </Carousel>
  );
}
