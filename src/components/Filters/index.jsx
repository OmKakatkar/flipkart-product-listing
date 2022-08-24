import { useEffect, useState } from "react";
import { getFilteredProducts } from "../../utils/filter-helper";
import "./filters.css";

export function Filters({ setProducts, products }) {
	const initialFilters = {
		sortBy: "",
		size: "",
		brands: "",
		idealFor: "",
	};
	const [filters, setFilters] = useState(initialFilters);
	const brands = Array.from(new Set(products.map(({ brand }) => brand)));

	useEffect(() => {
		setProducts(getFilteredProducts(products, filters));
	}, [setProducts, products, filters]);

	return (
		<aside className="filters">
			<h2>Filters</h2>
			<button
				onClick={() => {
					setFilters(initialFilters);
				}}
			>
				Clear Filters
			</button>
			<div className="filter-container">
				<h3>Sort By</h3>
				<div className="filter-options">
					<label htmlFor="H2L">
						<input
							type="radio"
							name="sortBy"
							id="H2L"
							onChange={() =>
								setFilters((prev) => ({ ...prev, sortBy: "High to Low" }))
							}
							checked={filters && filters.sortBy === "High to Low"}
						/>
						High to Low
					</label>
					<label htmlFor="L2H">
						<input
							type="radio"
							name="sortBy"
							id="L2H"
							onChange={() =>
								setFilters((prev) => ({ ...prev, sortBy: "Low to High" }))
							}
							checked={filters && filters.sortBy === "Low to High"}
						/>
						Low to High
					</label>
				</div>
			</div>

			<div className="filter-container">
				<h3>Size</h3>
				<div className="filter-options">
					<label htmlFor="S">
						<input
							type="radio"
							name="size"
							id="S"
							onChange={() => setFilters((prev) => ({ ...prev, size: "S" }))}
							checked={filters && filters.size === "S"}
						/>
						S
					</label>
					<label htmlFor="M">
						<input
							type="radio"
							name="size"
							id="M"
							onChange={() => setFilters((prev) => ({ ...prev, size: "M" }))}
							checked={filters && filters.size === "M"}
						/>
						M
					</label>
					<label htmlFor="L">
						<input
							type="radio"
							name="size"
							id="L"
							onChange={() => setFilters((prev) => ({ ...prev, size: "L" }))}
							checked={filters && filters.size === "L"}
						/>
						L
					</label>
					<label htmlFor="XL">
						<input
							type="radio"
							name="size"
							id="XL"
							onChange={() => setFilters((prev) => ({ ...prev, size: "XL" }))}
							checked={filters && filters.size === "XL"}
						/>
						XL
					</label>
				</div>
			</div>

			<div className="filter-container">
				<h3>Brand</h3>
				<div className="filter-options">
					{brands.map((brand) => (
						<label htmlFor={brand} key={brand}>
							<input
								type="radio"
								name="brand"
								id={brand}
								onChange={() =>
									setFilters((prev) => ({ ...prev, brands: brand }))
								}
								checked={filters && filters.brands === brand}
							/>
							{brand}
						</label>
					))}
				</div>
			</div>

			<div className="filter-container">
				<h3>Ideal For</h3>
				<div className="filter-options">
					<label htmlFor="Men">
						<input
							type="radio"
							name="idealFor"
							id="Men"
							onChange={() =>
								setFilters((prev) => ({ ...prev, idealFor: "Men" }))
							}
							checked={filters && filters.idealFor === "Men"}
						/>
						Men
					</label>
					<label htmlFor="Women">
						<input
							type="radio"
							name="idealFor"
							id="Women"
							onChange={() =>
								setFilters((prev) => ({ ...prev, idealFor: "Women" }))
							}
							checked={filters && filters.idealFor === "Women"}
						/>
						Women
					</label>
				</div>
			</div>
		</aside>
	);
}
