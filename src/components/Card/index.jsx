import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export function Card() {
	return (
		<div className="card">
			<div className="card-image">
				<img
					src="https://rukminim1.flixcart.com/image/495/594/l05lx8w0/jean/o/m/x/32-mss22mjn029-metronaut-original-imagcy8ddggwhutf.jpeg?q=50"
					alt="Full name"
				/>
			</div>
			<FontAwesomeIcon icon={faHeart} className="card-icon"></FontAwesomeIcon>
			<div className="card-brand">Brand Name</div>
			<div className="inline-flex card-name">
				<span>Full name</span>
				<img
					src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
					alt="Flipkart Assured"
				/>
			</div>
			<div className="card-price">
				<span>₹500</span>
				<span className="original-price">₹1,999</span>
				<span className="discount">72% off</span>
			</div>
		</div>
	);
}
