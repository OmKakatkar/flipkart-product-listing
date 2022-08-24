import "./filters.css";

export function Filters() {
	return (
		<aside className="filters">
			<h2>Filters</h2>
			<button>Clear Filters</button>
			<div className="filter-container">
				<h3>Sort By</h3>
				<div className="filter-options">
					<label htmlFor="sortBy">
						<input type="radio" name="sortBy" />
						High to Low
					</label>
					<label htmlFor="sortBy">
						<input type="radio" name="sortBy" />
						Low to High
					</label>
				</div>
			</div>

			<div className="filter-container">
				<h3>Size</h3>
				<div className="filter-options">
					<label htmlFor="size">
						<input type="radio" name="size" />S
					</label>
					<label htmlFor="size">
						<input type="radio" name="size" />M
					</label>
					<label htmlFor="size">
						<input type="radio" name="size" />L
					</label>
					<label htmlFor="size">
						<input type="radio" name="size" />
						XL
					</label>
				</div>
			</div>

			<div className="filter-container">
				<h3>Brand</h3>
				<div className="filter-options">
					<label htmlFor="brand">
						<input type="radio" name="brand" />
						Brands
					</label>
				</div>
			</div>

			<div className="filter-container">
				<h3>Ideal For</h3>
				<div className="filter-options">
					<label htmlFor="idealFor">
						<input type="radio" name="idealFor" />
						Men
					</label>
					<label htmlFor="idealFor">
						<input type="radio" name="idealFor" />
						Women
					</label>
				</div>
			</div>
		</aside>
	);
}
