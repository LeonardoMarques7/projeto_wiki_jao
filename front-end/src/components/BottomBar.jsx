import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const BottomBar = () => {
	return (
		<nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around py-3 shadow-lg">
			<button className="flex flex-col items-center">
				<FontAwesomeIcon icon={faHome} size={24} />
				<span className="text-xs">Home</span>
			</button>
			<button className="flex flex-col items-center">
				<FontAwesomeIcon icon={faHeart} size={24} />
				<span className="text-xs">Favoritos</span>
			</button>
			<button className="flex flex-col items-center">
				<FontAwesomeIcon icon={faUser} size={24} />
				<span className="text-xs">Perfil</span>
			</button>
		</nav>
	);
};

export default BottomBar;
