import { Card } from "../Card";
import "./productList.css";

export function ProductList({ products }) {
	console.log(products);
	return (
		<div className="product-list">
			{products.length > 0
				? products.map((product) => (
						<Card key={product._id} product={product} />
				  ))
				: "No Products Matched"}
		</div>
	);
}
