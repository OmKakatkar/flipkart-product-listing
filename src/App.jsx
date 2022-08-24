import { useState } from "react";
import { Filters, Header, ProductList } from "./components";
import data from "./database.json";
import "./App.css";

function App() {
	const [filteredProducts, setFilteredProducts] = useState(data.products);

	return (
		<div className="app">
			<Header />
			<ProductList products={filteredProducts} />
			<Filters setProducts={setFilteredProducts} products={data.products} />
		</div>
	);
}

export default App;
