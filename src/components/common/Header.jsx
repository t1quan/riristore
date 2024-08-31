import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { RiMenu3Line, RiShoppingBag4Line, RiUser3Line } from "@remixicon/react";
import CustomBtn from "./CustomBtn";
import { ModalContext } from "../../contexts/ModalContext";
import { modalTypes } from "../modal/ModalTypes";

function Header() {
	const { handleShowModal } = useContext(ModalContext);

	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const renderAuthButtons = () => {
		if (isDesktop) {
			return (
				<div className="flex items-center gap-3">
					<CustomBtn padding="md" onClick={() => handleShowModal(modalTypes.login)}>
						Login
					</CustomBtn>
					<CustomBtn className="text-primary ring-primary hover:opacity-70" variant="outline" padding="md" onClick={() => handleShowModal(modalTypes.signup)}>
						Sign Up
					</CustomBtn>
				</div>
			);
		} else {
			return (
				<CustomBtn padding="mdSquare" variant="outline" onClick={() => handleShowModal(modalTypes.login)}>
					<RiUser3Line className="w-5 h-5" />
				</CustomBtn>
			);
		}
	};

	return (
		<header className="sticky top-0 z-50 w-full backdrop-blur border-b border-gray-700 bg-gray-900/75">
			<div className="container">
				<div className="flex items-center justify-between gap-3 h-14">
					<div className="flex gap-5">
						<Link to="/" className="font-bold text-xl text-gray-200">
							RIRI<span className="text-primary">STORE</span>
						</Link>
						<div className="hidden lg:flex"></div>
					</div>
					<div className="flex items-center gap-3">
						{renderAuthButtons()}
						<CustomBtn padding="mdSquare" variant="outline" onClick={() => handleShowModal(modalTypes.login)}>
							<RiShoppingBag4Line className="w-5 h-5" />
						</CustomBtn>
						<CustomBtn className="lg:hidden" padding="mdSquare" variant="outline" onClick={() => handleShowModal(modalTypes.login)}>
							<RiMenu3Line className="w-5 h-5" />
						</CustomBtn>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
