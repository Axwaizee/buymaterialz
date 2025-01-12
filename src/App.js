import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

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
			</div>
		</Router>
	);
}

export default App;
