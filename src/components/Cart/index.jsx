import { Card } from "../Card";
import "./cart.css";

export function Cart({ cart, setCart, setWishlist }) {
	console.log(cart);

	const totalPrice = cart.reduce(
		(acc, curr) => (acc += Number(curr.price) * curr.quantity),
		0
	);
	const totalDiscount = cart.reduce(
		(acc, curr) =>
			(acc += Math.round((Number(curr.price) * Number(curr.discount)) / 100)) *
			curr.quantity,
		0
	);
	const totalCartItems = cart.reduce((acc, curr) => (acc += curr.quantity), 0);

	function increaseQuantity(product) {
		setCart((prev) =>
			prev.map((prod) =>
				prod._id === product._id
					? { ...prod, quantity: prod.quantity + 1 }
					: { ...prod }
			)
		);
	}

	// function decreaseQuantity(product) {
	// 	setCart((prev) =>
	// 		prev.map((prod) =>
	// 			prod._id === product._id
	// 				? { ...prod, quantity: prod.quantity - 1 }
	// 				: { ...prod }
	// 		)
	// 	);
	// }

	function addToWishlist(product) {
		delete product.quantity;
		setWishlist((prev) => [...prev, product]);
		removeItem(product);
	}

	function removeItem(product) {
		setCart((prev) => prev.filter((prod) => prod._id !== product._id));
	}
	return (
		<div className="product-list cart">
			<div>
				<h2>Cart Summary</h2>
				<div className="cart-summary">
					<div>
						Price: <span>{totalPrice}</span>
					</div>
					<div>
						Discount: <span>{totalDiscount}</span>
					</div>
					<div>
						Total Items: <span>{totalCartItems}</span>
					</div>
					<div>
						Total Price: <span>{totalPrice - totalDiscount}</span>
					</div>
				</div>
			</div>
			<div className="cart-items">
				{cart.length > 0
					? cart.map((product) => (
							<Card key={product._id} product={product}>
								<div>{product.quantity}</div>
								<button
									onClick={() => {
										increaseQuantity(product);
									}}
								>
									Add +1
								</button>
								{/* <button
									onClick={() => {
										decreaseQuantity(product);
									}}
								>
									Remove -1
								</button> */}
								<button onClick={() => addToWishlist(product)}>
									Save for Later
								</button>
								<button onClick={() => removeItem(product)}>Remove Item</button>
							</Card>
					  ))
					: "Cart is empty"}
			</div>
		</div>
	);
}
