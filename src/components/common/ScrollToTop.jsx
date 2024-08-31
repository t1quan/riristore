import { useEffect, useState } from "react";
import CustomBtn from "./CustomBtn";
import { RiArrowUpSLine } from "@remixicon/react";

function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY >= 350);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<CustomBtn onClick={scrollToTop} padding="sm" className={`fixed right-4 max-w-max opacity-80 transition-all duration-300 ${isVisible ? "bottom-4" : "-bottom-2/4"}`}>
			<RiArrowUpSLine className="w-6" />
		</CustomBtn>
	);
}

export default ScrollToTop;
