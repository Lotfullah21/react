const ModeToggler = () => {
	let darkMode = true;
	const darkModeOn = <h1>Dark mode on</h1>;
	const lightMode = <h1>Dark mode off</h1>;

	const darkModeHandler = () => {
		darkMode = !darkMode;
		console.log(darkMode);
	};

	return (
		<div>
			<button onClick={darkModeHandler}>Toggle mode</button>
			{darkMode ? darkModeOn : lightMode}
		</div>
	);
};
export default ModeToggler;
