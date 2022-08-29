import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export function Card({ product, children }) {
	return (
		<div className="card">
			<div className="card-image">
				<img src={product.image} alt={product.name} />
			</div>
			<FontAwesomeIcon icon={faHeart} className="card-icon"></FontAwesomeIcon>
			<div className="card-brand">{product.brand}</div>
			<div className="inline-flex card-name">
				<span>{product.name}</span>
				<img
					src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
					alt="Flipkart Assured"
				/>
			</div>
			<div className="card-price">
				<span>
					₹
					{Math.round(product.price - (product.price * product.discount) / 100)}
				</span>
				<span className="original-price">₹{product.price}</span>
				<span className="discount">{product.discount}% off</span>
			</div>
			{product.size && <div>Size : {product.size.join(", ")}</div>}
			{children}
		</div>
	);
}
