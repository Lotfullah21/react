import HigherOrderComponent from "./hoc";

const Counter2 = ({ count, handleClick }) => {
	return (
		<div>
			<span>Counter2: </span>
			<button className="btn" onClick={handleClick}>
				clicked {count} times
			</button>
		</div>
	);
};
export default HigherOrderComponent(Counter2);
