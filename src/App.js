"use client";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ReactLenis } from "lenis/react";

function App() {
	return (
		<ReactLenis root>
			<Router>
				<ScrollToTop />
				<div className="flex flex-col max-h-dvh">
					<Navbar />
					<main className="flex-grow">
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</ReactLenis>
	);
}

export default App;
