import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("btn-secondary");
	const [color1, setColor1] = useState("btn-secondary");
	const [color2, setColor2] = useState("btn-secondary");

	function changeColor() {
		setColor("btn-success");
		if (color1 === "btn-warning" || color2 === "btn-danger") {
			setColor1("btn-secondary");
			setColor2("btn-secondary");
		}
	}
	function changeColor1() {
		setColor1("btn-warning");
		if (color === "btn-success" || color2 === "btn-danger") {
			setColor("btn-secondary");
			setColor2("btn-secondary");
		}
	}

	function changeColor2() {
		setColor2("btn-danger");
		if (color === "btn-success" || color1 === "btn-warning") {
			setColor("btn-secondary");
			setColor1("btn-secondary");
		}
	}

	return (
		<div className="container d-flex flex-column">
			<h1 className="text-center my-5">Traffic Light</h1>
			<button
				type="button"
				className={`btn ${color} my-2`}
				onClick={changeColor}>
				Boom! Green Light!
			</button>
			<button
				type="button"
				className={`btn ${color1} my-2`}
				onClick={changeColor1}>
				Wow! Yellow Light!
			</button>
			<button
				type="button"
				className={`btn ${color2} my-2`}
				onClick={changeColor2}>
				Awesome! Red Light!
			</button>
		</div>
	);
};

export default Home;
