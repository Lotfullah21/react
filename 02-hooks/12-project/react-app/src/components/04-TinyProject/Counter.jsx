const Counter = ({ subjects }) => {
	const newSubjects = subjects.filter((subject) => {
		return subject.done === false;
	});
	console.log(newSubjects);

	return (
		<div>
			<h1>you have {newSubjects.length} subjects left</h1>
		</div>
	);
};
export default Counter;
