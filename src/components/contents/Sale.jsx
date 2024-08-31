import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductItem from "../common/ProductItem";
import { RiArrowRightSLine } from "@remixicon/react";

function Sale() {
	const { products } = useContext(ProductsContext);

	const saleProducts = products.filter((product) => product.onSale);

	return (
		<section className="mt-5">
			<div>
				<div className="mb-5 flex flex-col md:flex-row md:justify-between items-center md:items-end gap-4">
					<div>
						<h2 className="relative text-2xl lg:text-3xl font-semibold text-center md:text-left mb-1.5">
							On <span className="text-primary">Sale</span>
						</h2>

						<p className="text-gray-400 text-center md:text-left">Best Sale Product This Week!</p>
					</div>

					<button className="text-gray-400 transition-all duration-300 flex items-center gap-2 ring-1 ring-gray-700 hover:bg-gray-700 rounded-md px-2 py-1">
						See more
						<RiArrowRightSLine className="w-4 sm:w-5" />
					</button>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">
					{saleProducts.map((product) => {
						if (product.popular) {
							return <ProductItem key={product.id} product={product} />;
						}
					})}
				</div>
			</div>
		</section>
	);
}

export default Sale;
