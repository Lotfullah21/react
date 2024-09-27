const Button = () => {
	const clickHandler = () => {
		console.log("Button clicked");
	};
	const mouseHoverHandler = () => {
		console.log("mouse hovered");
	};

	return (
		<>
			<button onClick={clickHandler}>Click here</button>
			<button onMouseMove={mouseHoverHandler}>Click here</button>
		</>
	);
};
export default Button;
