//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";

let digitone, digittwo, digitthree, digitfour, digitfive, digitsix;

function SecondsCounter() {
	return (
		<div id="app">
			<div class="counter">
				<div class="clock-img">
					<i class="fas fa-clock" />
				</div>
				<div>{digitone}</div>
				<div>{digittwo}</div>
				<div>{digitthree}</div>
				<div>{digitfour}</div>
				<div>{digitfive}</div>
				<div>{digitsix}</div>
			</div>
		</div>
	);
}
let digitcounter = 0;
setInterval(function() {
	digitone = Math.floor((digitcounter / 100000) % 10);
	digittwo = Math.floor((digitcounter / 10000) % 10);
	digitthree = Math.floor((digitcounter / 1000) % 10);
	digitfour = Math.floor((digitcounter / 100) % 10);
	digitfive = Math.floor((digitcounter / 10) % 10);
	digitsix = Math.floor((digitcounter / 1) % 10);
	digitcounter++;
	//console.log(digitone, digittwo, digitthree, digitfour, digitfive, digitsix);
	ReactDOM.render(
		<SecondsCounter
			digitone
			digittwo
			digitthree
			digitfour
			digitfive
			digitsix
		/>,
		document.querySelector("#app")
	);
}, 1000);
