/* eslint-disable react/prop-types */

import { RiAddLine } from "@remixicon/react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
	const { id, price, title, image, brand, discount } = product;
	const normalPrice = parseFloat(price).toFixed(2);
	const discountPrice = parseFloat(price - (price * discount) / 100).toFixed(2);

	return (
		<div key={id} className="rounded-lg overflow-hidden p-1.5 sm:p-3 ring-1 ring-gray-700 bg-gray-900 shadow hover:bg-gray-800 transition-all duration-300 group">
			<div className="rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-white p-2">
				<Link to={`/products/${id}`}>
					<img src={image} alt="" className="group-hover:scale-105 transition-all duration-300" />
				</Link>
			</div>
			<div className="pt-3">
				<span className="capitalize text-gray-500 text-sm">{brand}</span>
				<Link to={`/products/${id}`}>
					<h3 className="mt-1 font-medium cursor-pointer hover:text-primary transition-all duration-300 line-clamp-2">{title}</h3>
				</Link>
				<div className="flex justify-between items-end mt-3 mb-0.5 sm:mb-0">
					<div className="flex gap-x-2 sm:gap-x-3 items-baseline">
						{discount ? (
							<>
								<span className="leading-none">${discountPrice}</span>
								<span className="text-sm text-gray-500 line-through leading-none">${normalPrice}</span>
							</>
						) : (
							<span className="leading-none">${normalPrice}</span>
						)}
					</div>
					<button className="bg-primary rounded-md text-gray-900 flex items-center justify-center hover:opacity-70 transition-all duration-300 ">
						<RiAddLine />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;
