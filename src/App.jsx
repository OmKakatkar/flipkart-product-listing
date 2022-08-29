import { useState } from "react";
import { Cart, Header, ProductList } from "./components";
import data from "./database.json";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [cart, setCart] = useState([]);
	const [, setWishlist] = useState([]);

	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<ProductList
								products={data.products}
								setCart={setCart}
								cart={cart}
							/>
						}
					/>
					<Route
						path="/cart"
						element={
							<Cart cart={cart} setCart={setCart} setWishlist={setWishlist} />
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
