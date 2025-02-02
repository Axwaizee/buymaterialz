import React from "react";
import ContactForm from "./ContactForm";
import AboutUs from "./AboutUs";
import ScrollElement from "./scroll-element";

export default function AboutContactUs() {
	return (
		<>
			{/* About Us Section */}
			<div id="AboutUs">
				<ScrollElement direction="center">
					<AboutUs />
				</ScrollElement>
			</div>
			{/* Contact Form Section */}
			<div
				id="ContactUs"
				className="lg:flex items-center justify-center overflow-hidden"
			>
				<ScrollElement direction="center" className="sm:w-full md:w-1/2">
					<ContactForm />
				</ScrollElement>
			</div>
		</>
	);
}
