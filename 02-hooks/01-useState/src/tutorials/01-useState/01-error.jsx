const Error = () => {
	let count = 0;
	const handleClick = () => {
		count = count + 1;
		console.log(count);
	};
	return (
		<>
			<h1>{count}</h1>
			<button onClick={handleClick} className="btn">
				Increase
			</button>
		</>
	);
};

export default Error;
