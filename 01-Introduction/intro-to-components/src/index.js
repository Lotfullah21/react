import ReactDOM from "react-dom/client";
import subjects from "./courses";
import Course from "./course";
import "./index.css";

const Courses = () => {
	const handleClick = () => {
		console.log("Click here, I am coming from parent.");
	};
	return (
		<>
			<h2 style={{ textAlign: "center", paddingTop: "4rem", fontSize: "2rem" }}>
				Courses offered by Hooshmandlab
			</h2>
			<section className="section">
				{subjects.map((subject, idx) => {
					return (
						<Course
							{...subject}
							key={subject.id}
							number={idx + 1}
							handleClick={handleClick}></Course>
					);
				})}
			</section>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Courses></Courses>);
