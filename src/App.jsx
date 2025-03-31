import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Albuns from "./components/Albuns";
import Fotos from "./components/Fotos";
import Destaque from "./components/Destaque";
import Biography from "./components/Biography";
import Shows from "./components/Shows";

function App() {
	return (
		<>
			<Header />
			<main className="main__container">
				{/* Home */}
				<Home />
				{/* Álbuns */}
				<Albuns />
				{/* Galeria de Fotos */}
				<Fotos />
				{/* Destaques  */}
				<Destaque />
				{/* Biografia */}
				<Biography />
				{/* Shows */}
				<Shows />
			</main>
		</>
	);
}

export default App;
