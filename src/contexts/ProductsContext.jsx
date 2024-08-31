import PropTypes from "prop-types";

import { useState } from "react";
import { productsApi } from "../assets/api/ProductsApi";
import { createContext } from "react";
import { useEffect } from "react";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const allProducts = await productsApi.getAllProducts();
				setProducts(allProducts.products);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);

	const singleProduct = async (id) => {
		try {
			const data = await productsApi.getSingleProduct();
			return data.product;
		} catch (err) {
			setError(err);
		}
	};

	const productData = { products, singleProduct, loading, error };

	return <ProductsContext.Provider value={productData}>{children}</ProductsContext.Provider>;
}

ProductsProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ProductsProvider;
