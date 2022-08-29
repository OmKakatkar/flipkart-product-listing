import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleDown,
	faCartShopping,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./header.css";

export function Header() {
	return (
		<header className="header">
			<div className="inline-flex logo">
				<img
					src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
					alt="flipkart logo"
					className="logo-image"
				/>
				<div>
					<span className="logo-text">
						Explore <span>Plus</span>
					</span>
					<img
						src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
						alt=""
						className="logo-icon"
					></img>
				</div>
			</div>
			<div className="inline-flex search">
				<input
					type="search"
					placeholder="Search for products, brands and more"
				/>
				<FontAwesomeIcon
					icon={faSearch}
					className="search-icon"
				></FontAwesomeIcon>
			</div>
			<nav className="inline-flex navigation">
				<button>Login</button>
				<div>
					<span>More</span>
					<FontAwesomeIcon
						icon={faAngleDown}
						className="more-icon"
					></FontAwesomeIcon>
				</div>
				<Link to="/cart">
					<FontAwesomeIcon
						icon={faCartShopping}
						className="cart-icon"
					></FontAwesomeIcon>
					<span>Cart</span>
				</Link>
			</nav>
		</header>
	);
}
