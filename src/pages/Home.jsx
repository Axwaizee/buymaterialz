import React from "react";
import AutoStartSlider from "../components/AutoStartSlider";
import ContactForm from "../components/ContactForm";
import MarqueeText from "../components/MarqueeText";
import AboutContactUs from "../components/AboutContactUs";

export default function Home() {
	return (
		<>
			<AutoStartSlider />
			<AboutContactUs />
			{/* <MarqueeText
				text1="Buy Materials at Reasonable Price."
				text2="All types of Raw Materials available."
			/> */}
		</>
	);
}
