const Course = ({ img, title, duration, handleClick, number }) => {
	return (
		<article className="course">
			<img src={img} />
			<h2>{title}</h2>
			<h5 className="number">{number}</h5>
			<button onClick={handleClick}>click me</button>
			<h3>{duration}</h3>
		</article>
	);
};
export default Course;
