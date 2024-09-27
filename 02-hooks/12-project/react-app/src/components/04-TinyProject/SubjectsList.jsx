const SubjectsList = ({ subjects, setSubjects }) => {
	const handleDone = (subject) => {
		const updatedSubjects = subjects.map((newSubject) => {
			return newSubject.name === subject.name
				? { ...newSubject, done: !newSubject.done }
				: newSubject;
		});
		setSubjects(updatedSubjects);
	};
	return (
		<div className="card">
			{subjects.map((subject) => {
				return (
					<div key={subject.name}>
						<h3>{subject.name}</h3>
						<button onClick={() => handleDone(subject)}>
							{subject.done ? "finished" : "in process"}
						</button>
					</div>
				);
			})}
		</div>
	);
};
export default SubjectsList;
