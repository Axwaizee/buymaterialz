import ScrollElement from "./scroll-element";
import { cn } from "./utils";
import React, { useRef, useState } from "react";
export default function ContactForm() {
	const boxWrapper = useRef(null);
	const [isHovered, setIsHovered] = useState(false);
	const [mousePosition, setMousePosition] = React.useState({
		x: null,
		y: null,
	});
	React.useEffect(() => {
		const updateMousePosition = (ev) => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);
	const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
	const handleMouemove = ({ currentTarget, clientX, clientY }) => {
		let { left, top } = currentTarget.getBoundingClientRect();
		const x = clientX - left;
		const y = clientY - top;
		setOverlayColor({ x, y });
	};
	return (
		<ScrollElement viewport={{ amount: 0.3, margin: "0px 0px 0px 0px" }}>
			<div className="relative lg:w-4/5 sm:w-full mx-auto  bg-black lg:p-8 p-4  rounded-md">
				<div
					onMouseMove={handleMouemove}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					ref={boxWrapper}
					className={cn(
						"group relative rounded-lg w-full  p-[2px] bg-[#eeeeee15] overflow-hidden  mx-auto"
					)}
				>
					{isHovered && (
						<div
							className="pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 "
							style={{
								background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              rgba(255, 255, 255, 0.068),
              transparent 80%
            )
          `,
							}}
						/>
					)}

					<div
						className="absolute opacity-0 group-hover:opacity-100 z-10 inset-0 bg-fixed rounded-lg"
						style={{
							background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff76 0%,transparent 20%,transparent) fixed `,
						}}
					></div>
					<div className="relative w-full z-10  lg:px-8 px-4 py-6 rounded-lg text-white bg-cover bg-black h-full mx-auto [background:linear-gradient(45deg,#000000,#040404,#080808)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.blue.500)_86%,_theme(colors.blue.300)_90%,_theme(colors.blue.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
						<>
							<h1 className="text-3xl text-center pt-2 font-medium tracking-tight ">
								Contact Form
							</h1>
							<form className="space-y-6 my-6">
                                {/* Name */}
                                <div className="w-full">
                                    <label htmlFor="name" className="block text-lg font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-900 w-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md p-3 border border-gray-700 text-white"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="w-full">
                                    <label htmlFor="email" className="block text-lg font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-900 w-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md p-3 border border-gray-700 text-white"
                                        required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="w-full">
                                    <label htmlFor="phone" className="block text-lg font-medium">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="bg-gray-900 w-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md p-3 border border-gray-700 text-white"
                                        required
                                    />
                                </div>

                                {/* Identity */}
                                <div className="w-full">
                                    <label htmlFor="identity" className="block text-lg font-medium">
                                        Identity
                                    </label>
                                    <select
                                        id="identity"
                                        className="bg-gray-900 w-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md p-3 border border-gray-700 text-white"
                                        required
                                    >
                                        <option value="" className="hidden" disabled selected></option>
                                        <option value="Dealer">Dealer</option>
                                        <option value="Distributor">Distributor</option>
                                        <option value="Contractor">Contractor</option>
                                        <option value="Individual">Individual</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Requirements */}
                                <div className="w-full">
                                    <label htmlFor="requirements" className="block text-lg font-medium">
                                        Requirements
                                    </label>
                                    <select
                                        id="requirements"
                                        className="bg-gray-900 w-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md p-3 border border-gray-700 text-white"
                                    >
                                        <option value="" className="hidden" disabled selected></option>
                                        <option value="Cement">Cement</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="w-full">
                                    <label htmlFor="message" className="block text-lg font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="bg-gray-900 w-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md p-3 border border-gray-700 text-white"
                                        placeholder="Write your message here..."
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="w-full text-center">
                                    <button
                                        type="submit"
                                        className="bg-white hover:bg-slate-200 focus:outline-none focus:ring-4 focus:bg-slate-200 text-black font-semibold py-3 px-6 rounded-md shadow-lg"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
						</>
					</div>
				</div>
			</div>
		</ScrollElement>
	);
}
