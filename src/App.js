import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
	return (
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
	);
}

export default App;
