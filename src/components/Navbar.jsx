import React from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Home", path: "/" },
	{ name: "About Us", path: "/#AboutUs" },
	{ name: "Contact", path: "/#ContactUs" },
];

const renderHeader = (
	<Link
		to="/"
		className="-m-1.5 p-1.5 flex gap-4 justify-between items-center"
	>
		<span className="sr-only">BuyMaterialz</span>
		<img
			alt="BuyMaterialz logo"
			src={logo}
			className="h-12 w-auto"
		/>
		<div className="ml-1 text-2xl font-bold ">
			<span className="block">BuyMaterialz</span>
			{/* <span className="block font-normal text-xs">Model Village 5th Mile, Chümoukedima</span> */}
			</div>
	</Link>
);

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="">
			<header className="inset-x-0 top-0 text-black ">
				<nav
					aria-label="Global"
					className="flex items-center justify-between p-6 lg:px-8"
				>
					<div className="flex justify-between items-center lg:flex-1">
						{renderHeader}
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center text-black rounded-md p-2.5"
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<ul className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item, idx) => (
							<li key={idx}>
								<a
									href={item.path}
									className="hover:underline text-sm/6 font-semibold"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden"
				>
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white-theme px-6 py-6 sm:max-w-sm sm:ring-1 ">
						<div className="flex items-center  justify-between">
							{renderHeader}
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 text-black rounded-md p-2.5 "
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									aria-hidden="true"
									className="size-6"
								/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y ">
								<ul className="space-y-2 py-6">
									{navigation.map((item, idx) => (
										<li
											key={idx}
											onClick={() =>
												setMobileMenuOpen(false)
											}
										>
											<Link
												to={item.path}
												className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-theme-white hover:bg-gray-300"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
			</header>
		</div>
	);
}
