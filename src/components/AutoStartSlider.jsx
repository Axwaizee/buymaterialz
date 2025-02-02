import React from "react";
import Carousel, { Slider, SliderContainer } from "./carousel.tsx";
export default function AutoStartSlider() {
	const OPTIONS = { loop: true };
	return (
		<>
			<>
				<Carousel
					options={OPTIONS}
					isAutoPlay={true}
					className="w-full relative mb-16"
				>
					<SliderContainer>
						<Slider className="w-full">
							<div className="h-[90dvh] w-full bg-cover bg-[url('./images/c1.jpg')]"></div>{" "}
						</Slider>
						<Slider className="w-full">
							<div className="h-[90dvh] w-full bg-cover bg-[url('./images/c2.jpg')]"></div>{" "}
						</Slider>
						<Slider className="w-full">
							<div className="h-[90dvh] w-full bg-cover bg-[url('./images/c3.jpg')]"></div>{" "}
						</Slider>
						<Slider className="w-full">
							<div className="h-[90dvh] w-full bg-cover bg-[url('./images/c4.jpg')]"></div>{" "}
						</Slider>
					</SliderContainer>
					<div
						className="bottom-0 right-0 absolute z-3 flex flex-col items-center backdrop-blur-sm font-medium text-xl m-5 rounded-xl p-5"
						style={{
							background:
								"repeating-radial-gradient(#ffffff, transparent 100px)",
						}}
					>
						<span>Get in</span>
						<span>Touch Now</span>
						<a
							href="/#ContactUs"
							class="inline-block bg-blue-500 text-white mt-2 py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
						>
							Enquiry
						</a>
					</div>
				</Carousel>
			</>
		</>
	);
}
