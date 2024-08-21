import ReactDOM from "react-dom/client";
import "./index.css";
const Courses = () => {
	return (
		<section className="section">
			<Course></Course>
			<Course></Course>
			<Course></Course>
			<Course></Course>
		</section>
	);
};

const Course = () => {
	return (
		<article className="course">
			<Image></Image>
			<Title></Title>
			<Duration></Duration>
		</article>
	);
};

const Title = () => {
	return <h2>Artificial Intelligence</h2>;
};

const Duration = () => {
	return <h4>5 Months</h4>;
};

const Image = () => {
	return (
		<img
			src="https://online.stanford.edu/sites/default/files/styles/widescreen_large/public/2024-06/Technical-Fundamentals-of-Generative-AI_XFM110.jpg?h=8abcec71&itok=2mIFkkVi"
			alt="machine learning"
		/>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Courses></Courses>);
