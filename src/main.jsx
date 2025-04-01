import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Album from "./pages/Album.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<App />} />
				<Route path="/albums/:name" element={<Album />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
