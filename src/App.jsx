import "./App.css";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Albuns from "./components/Albuns";
import Fotos from "./components/Fotos";
import Destaque from "./components/Destaque";
import Biography from "./components/Biography";
import Shows from "./components/Shows";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<main className="main__container">
				<section className="bg__image main__texts">
					<h1 className="main__title">Jão</h1>
					<p className="main__paragraph">
						Cantor e compositor, é um dos maiores nomes da música pop brasileira
						atual
					</p>
					<button className="main__button">
						Explorar <FontAwesomeIcon icon={faChevronRight} />
					</button>
				</section>
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
			<Footer />
		</>
	);
}

export default App;
