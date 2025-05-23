import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { albunsArray } from "./assets/database/Albuns.js";
import { showsArray } from "./assets/database/Shows.js";
import Album from "./pages/Album";
import Albuns from "./components/Albuns";
import Fotos from "./components/Fotos";
import Biography from "./components/Biography";
import Shows from "./components/Shows";
import NotFound from "./pages/NotFound";

const Layout = () => {
	return (
		<div>
			<span className="flex justify-center">
				<Header />
			</span>
			<Outlet />
			<Footer />
		</div>
	);
};

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route
							path="/pages/:id"
							element={<Album itemsArray={albunsArray} />}
						/>
						<Route
							path="/albuns"
							element={<Albuns itemsArray={albunsArray} />}
						/>
						<Route path="/fotos" element={<Fotos />} />
						<Route path="/biography" element={<Biography />} />
						<Route path="/shows" element={<Shows itemsArray={showsArray} />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
