import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const variantClass = {
	primary: "bg-primary text-gray-900",
	secondary: "bg-secondary text-white",
	outline: "ring-1 ring-inset ring-gray-700",
	danger: "bg-red-500 text-white",
	success: "bg-green-500 text-white",
};

const paddingClass = {
	xs: "px-1 py-0.5",
	sm: "px-1.5 py-1",
	md: "px-2.5 py-1.5",
	mdSquare: "px-1.5 py-1.5",
	lg: "px-3.5 py-2.5",
	xl: "px-4 py-3",
	"2xl": "px-5 py-3.5",
};

function CustomBtn({ children, to, href, type, onClick, className = "", variant = "primary", padding = "lg", ...rest }) {
	const TagBtn = to ? Link : href ? "a" : "button";
	const commonClass = `${className} ${variantClass[variant]} ${paddingClass[padding]} rounded-md focus:outline-none font-medium text-sm shadow-sm flex items-center justify-center whitespace-nowrap w-full gap-x-2.5 hover:opacity-70 transition-all duration-300`;

	return (
		<TagBtn {...(type && { type })} {...(to && { to })} {...(href && { href })} onClick={onClick} className={commonClass} {...rest}>
			{children}
		</TagBtn>
	);
}

CustomBtn.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string,
	href: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
	variant: PropTypes.oneOf(Object.keys(variantClass)),
	padding: PropTypes.oneOf(Object.keys(paddingClass)),
};

export default CustomBtn;
