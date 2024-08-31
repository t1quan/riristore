import { RiTwitterFill, RiInstagramLine, RiLinkedinFill, RiSkypeFill } from "@remixicon/react";
import { Link } from "react-router-dom";

const menuFooter = [
	{ path: "/", title: "Privacy Policy" },
	{ path: "/", title: "Terms and condition" },
	{ path: "/", title: "Support" },
	{ path: "/", title: "FAQS" },
];

function Footer() {
	return (
		<footer className="bg-gray-800 mt-12 border-t border-gray-700 pt-10">
			<div className="container">
				<div>
					<h2 className="text-2xl font-semibold text-center">
						Our <span className="text-primary">Newsletter</span>
					</h2>
					<p className="text-center mt-3">Join our list and get 15% off your first purchase! Don’t worry we don’t spam</p>

					<form action="" className="py-6 mb-3">
						<div className="flex justify-center mx-auto max-w-lg">
							<input
								type="email"
								name="email"
								placeholder="Your email address..."
								className="bg-transparent px-3.5 py-2.5 ring-1 ring-inset ring-gray-700 placeholder-gray-500 rounded-l-md text-sm w-full border-0 focus:outline-none"
							/>
							<button
								type="submit"
								className="bg-primary focus:outline-none font-medium text-sm flex items-center justify-center whitespace-nowrap gap-x-2.5 transition-all duration-300 px-3.5 py-2.5 text-gray-900 hover:opacity-70 rounded-r-md"
							>
								Subcribe
							</button>
						</div>
					</form>
				</div>

				<div className="flex flex-col lg:flex-row gap-5 items-center justify-between py-6 border-t border-gray-700/65">
					<div className="flex gap-5 items-center uppercase text-sm lg:order-3 flex-1 lg:justify-end">
						<a href="#" target="_blank" className="">
							<RiTwitterFill />
						</a>
						<a href="#" target="_blank" className="">
							<RiInstagramLine />
						</a>
						<a href="#" target="_blank" className="">
							<RiLinkedinFill />
						</a>
						<a href="#" target="_blank" className="">
							<RiSkypeFill />
						</a>
					</div>
					<div className="flex gap-x-5 lg:gap-x-6 gap-y-3 items-center uppercase text-sm lg:order-2 flex-2 flex-wrap justify-center">
						{menuFooter.map((item, i) => {
							return (
								<Link key={i} to={item.path} className="hover:text-primary hover:underline transition">
									{item.title}
								</Link>
							);
						})}
					</div>
					<p className="text-sm lg:order-1 flex-1">
						TrndcqunStore By <span className="text-gray-400">Duc Quan</span>.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
