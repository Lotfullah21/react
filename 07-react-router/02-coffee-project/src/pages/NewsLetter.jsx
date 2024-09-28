import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const dummyUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
	try {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		const response = await axios.post(dummyUrl, data);
		toast.success(response.data.msg);
		return redirect("/");
	} catch (error) {
		toast.error(error?.response?.data?.msg);
		// Crucial to have a return, otherwise it will redirect to the error page.
		return error;
	}
};

const NewsLetter = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<Form className="form" method="POST">
			<h3 style={{ textAlign: "center" }}>Submit your email</h3>

			<div className="form-row">
				<label htmlFor="name" className="form-label">
					name
				</label>
				<input
					type="text"
					name="name"
					placeholder="Name"
					id="name"
					className="form-input"
					required></input>
			</div>
			<div className="form-row">
				<label htmlFor="lastName" className="form-label">
					last name
				</label>
				<input
					type="text"
					name="lastName"
					placeholder="last name"
					id="lastName"
					className="form-input"
					required></input>
			</div>
			<div className="form-row">
				<label htmlFor="email" className="form-label">
					email
				</label>
				<input
					type="email"
					name="email"
					placeholder="email"
					id="email"
					defaultValue="test@test.com"
					className="form-input"
					required></input>
			</div>
			<button type="submit" className="btn btn-block" disabled={isSubmitting}>
				{isSubmitting ? "submitting" : "submit"}
			</button>
		</Form>
	);
};
export default NewsLetter;
