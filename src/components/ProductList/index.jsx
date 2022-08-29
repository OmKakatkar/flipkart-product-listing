import { Link } from "react-router-dom";
import { Card } from "../Card";
import "./productList.css";

export function ProductList({ products, setCart, cart }) {
	return (
		<div className="product-list">
			{products.length > 0
				? products.map((product) => (
						<Card key={product._id} product={product}>
							{cart.filter((prod) => prod._id === product._id).length > 0 ? (
								<button>
									<Link to="cart">Go to Cart</Link>
								</button>
							) : (
								<button
									onClick={() =>
										setCart((prev) => [...prev, { ...product, quantity: 1 }])
									}
								>
									Add to Cart
								</button>
							)}
						</Card>
				  ))
				: "No Products Matched"}
		</div>
	);
}
