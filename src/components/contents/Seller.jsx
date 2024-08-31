import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductItem from "../common/ProductItem";

function Seller() {
	const { products } = useContext(ProductsContext);

	console.log(products);

	const popularProducts = products.filter((product) => product.popular);
	const limitedProducts = popularProducts.filter((product, i) => i < 10);

	return (
		<section className="my-5">
			<div>
				<div className="mb-5 flex flex-col justify-between items-center gap-4">
					<div className="text-center max-w-lg">
						<h2 className="relative text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">
							Best <span className="text-primary">Seller</span>
						</h2>
						<p className="text-gray-400">Best Seller Product This Week!</p>
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
					{limitedProducts.map((product) => {
						if (product.popular) {
							return <ProductItem key={product.id} product={product} />;
						}
					})}
				</div>
			</div>
		</section>
	);
}

export default Seller;
