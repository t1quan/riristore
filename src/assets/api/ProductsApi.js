import axios from "axios";

const productsUrl = "https://fakestoreapi.in/api/products";

const productsApi = {
	getAllProducts: async () => {
		try {
			const response = await axios.get(`${productsUrl}`);
			return response.data;
		} catch (err) {
			console.error("Error fetching products:", err);
			throw err;
		}
	},

	getSingleProduct: async (id) => {
		try {
			const response = await axios.get(`${productsUrl}/${id}`);
			return response.data;
		} catch (err) {
			console.error(`Error fetching product with ID ${id}:`, err);
			throw err;
		}
	},

	getAllCategories: async () => {
		try {
			const response = await axios.get(`${productsUrl}/category`);
			return response.data;
		} catch (err) {
			console.error('Error fetching categories:', err);
			throw err;
		}
	},

	getProductsOfCategory: async (category) => {
		try {
			const response = await axios.get(`${productsUrl}/category/?type=${category}`);
			return response.data;
		} catch (err) {
			console.error(`Error fetching products of ${category}:`, err);
			throw err;
		}
	},
};

export { productsApi };
