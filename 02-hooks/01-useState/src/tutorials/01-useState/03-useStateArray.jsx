import { useState } from "react";
import { data } from "../data";

const Practice = () => {
	const [colleges, setCollege] = useState(data);

	const handleClick = (rank) => {
		// Whenever we click on a button, return a new list of items whose ranks are different than the one we just clicked.
		const newCollege = colleges.filter((college) => {
			if (college.rank !== rank) {
				return true;
			}
		});
		setCollege(newCollege);
	};

	const handleClickAll = () => {
		setCollege([]);
	};

	return (
		<div>
			{colleges.map((college) => {
				const { name, rank } = college;
				return (
					<div key={rank}>
						<h2>{name}</h2>
						<h3>{rank}</h3>
						<button className="btn" onClick={() => handleClick(rank)}>
							clear
						</button>
					</div>
				);
			})}

			<button
				style={{ marginTop: "3rem" }}
				className="btn"
				onClick={handleClickAll}>
				clear all
			</button>
		</div>
	);
};
export default Practice;
