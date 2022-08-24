export function getFilteredProducts(products, filters) {
	let filteredProducts = products;
	if (filters.sortBy !== "") {
		filteredProducts = getSortedProducts(products, filters.sortBy);
	}
	if (filters.size !== "") {
		filteredProducts = sortBySize(filteredProducts, filters.size);
	}
	if (filters.idealFor !== "") {
		filteredProducts = filterByIdealFor(filteredProducts, filters.idealFor);
	}
	if (filters.brands !== "") {
		filteredProducts = filteredByBrand(filteredProducts, filters.brands);
	}
	return filteredProducts;
}

function getSortedProducts(products, type) {
	switch (type) {
		case "High to Low":
			return [...products].sort((a, b) => Number(b.price) - Number(a.price));
		case "Low to High":
			return [...products].sort((a, b) => Number(a.price) - Number(b.price));
		default:
			return products;
	}
}

function sortBySize(products, size) {
	switch (size) {
		case "S":
			return products.filter(
				(product) => product.size && product.size.includes("S")
			);
		case "M":
			return products.filter(
				(product) => product.size && product.size.includes("M")
			);

		case "L":
			return products.filter(
				(product) => product.size && product.size.includes("L")
			);

		case "XL":
			return products.filter(
				(product) => product.size && product.size.includes("XL")
			);

		default:
			return products;
	}
}

function filterByIdealFor(products, gender) {
	switch (gender) {
		case "Men":
			return products.filter((product) => product.gender === "Men");
		case "Women":
			return products.filter((product) => product.gender === "Women");
		default:
			return products;
	}
}

function filteredByBrand(products, brand) {
	return products.filter((product) => product.brand === brand);
}
