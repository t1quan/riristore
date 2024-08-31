import PropTypes from "prop-types";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

function DefaultLayout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1">
				<div className="container flex flex-col gap-10 w-full">{children}</div>
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DefaultLayout;
