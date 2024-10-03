import HigherOrderComponent from "./hoc";

const Counter1 = ({ count, handleClick }) => {
	return (
		<div>
			<span>Counter1: </span>
			<button className="btn" onClick={handleClick}>
				clicked {count} times
			</button>
		</div>
	);
};

export default HigherOrderComponent(Counter1);
