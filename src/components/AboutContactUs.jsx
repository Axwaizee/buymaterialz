import React from "react";
import ContactForm from "./ContactForm";
import AboutUs from "./AboutUs";
import ScrollElement from "./scroll-element";

export default function AboutContactUs() {
	return (
		<>
			{/* About Us Section */}
			<div className="lg:grid lg:grid-cols-2 lg:gap-12 py-16 bg-white-theme">
				<div className="lg:flex items-center justify-center">
					<ScrollElement direction="left">
						<AboutUs />
					</ScrollElement>
				</div>

				{/* Contact Form Section */}
				<div id="ContactUs" className="lg:flex items-center justify-center overflow-hidden">
					<ScrollElement direction="right" className='w-full'>
						<ContactForm />
					</ScrollElement>
				</div>
			</div>
		</>
	);
}
