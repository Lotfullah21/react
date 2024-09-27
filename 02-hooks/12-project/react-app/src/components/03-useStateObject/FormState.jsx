import { useState } from "react";

const FormState = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});
	return (
		<>
			<label>First Name</label>
			<input
				value={formData.firstName}
				onChange={(e) =>
					setFormData({ ...formData, firstName: e.target.value })
				}></input>
			<label>Last Name</label>
			<input
				value={formData.lastName}
				onChange={(e) =>
					setFormData({ ...formData, lastName: e.target.value })
				}></input>
			<label>Email</label>
			<input
				value={formData.email}
				onChange={(e) =>
					setFormData({ ...formData, email: e.target.value })
				}></input>

			<div>
				<ul>
					<h4>Info: </h4>
					<li>first name:{formData.firstName}</li>
					<li>last name:{formData.lastName}</li>
					<li>email:{formData.email}</li>
				</ul>
			</div>
		</>
	);
};
export default FormState;
