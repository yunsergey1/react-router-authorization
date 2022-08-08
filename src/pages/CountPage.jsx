import { Link } from "react-router-dom";
import React from "react";

function CountPage() {
	const [counter, setCounter] = React.useState(0);
	const decrement = () => setCounter(counter - 1);

	const [colored, setColored] = React.useState(false);

	const styles = {
		color: colored ? "tomato" : "#000",
	};

	let renderCount = React.useRef(1);

	React.useEffect(() => {
		renderCount.current++;
		console.log(renderCount);
	});
	return (
		<>
			<h2 style={styles}>Счетчик: {counter}</h2>
			<button onClick={() => setCounter(counter + 1)}>Добавить</button>
			<button onClick={decrement}>Убрать</button>
			<button onClick={() => setColored((prev) => !prev)}>Меняем цвет букв</button>
			<h2>Количество рендеров компонента: {renderCount.current}</h2>
		</>
	);
}

export default CountPage;
