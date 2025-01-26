import React from "react";
import ScrollBaseAnimation from "./text-marquee";
function MarqueeText({ text1 = "", text2 = "" }) {
	return (
		<>
			<div className="h-fit my-10 grid place-content-center text-black">
				<ScrollBaseAnimation
					delay={500}
					baseVelocity={-3}
					clasname="font-bold tracking-[-0.07em] leading-[90%] my-2"
				>
					{text1}
				</ScrollBaseAnimation>
				<ScrollBaseAnimation
					delay={500}
					baseVelocity={3}
					clasname="font-bold tracking-[-0.07em] leading-[90%] my-2"
				>
					{text2}
				</ScrollBaseAnimation>
			</div>
		</>
	);
}
export default MarqueeText;
