import universities from "../../assets/universities";
import { useState } from "react";

const TinyApp = () => {
	// Initialize with the full list of universities
	const [filteredUniversities, setFilteredUniversities] =
		useState(universities);

	const handleChange = (e) => {
		const value = e.target.value.toLowerCase();
		const newUniversities =
			value.length > 0
				? universities.filter((university) =>
						university.field.toLowerCase().includes(value)
				  )
				: universities;

		setFilteredUniversities(newUniversities);
	};

	return (
		<div>
			<input
				type="text"
				name="search"
				placeholder="Search by field"
				onChange={handleChange}
			/>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Field</th>
						<th>Cost of Living</th>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
					{filteredUniversities.map((university) => (
						<tr key={university.id}>
							<td>{university.name}</td>
							<td>{university.field}</td>
							<td>{university.costOfLiving}</td>
							<td>{university.city}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TinyApp;
