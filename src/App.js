import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
	handleTitleClick() {
		alert("Title clicked!");
	}

	render() {
		return React.createElement("div", {}, [
			React.createElement(
				"h1",
				{ onClick: this.handleTitleClick },
				"Adopt Me!"
			),
			React.createElement(Pet, {
				name: "Luna",
				animal: "Dog",
				breed: "Havanese"
			}),
			React.createElement(Pet, {
				name: "Pepper",
				animal: "Bird",
				breed: "Cockatiel"
			}),
			React.createElement(Pet, {
				name: "Doink",
				animal: "Cat",
				breed: "Mix"
			})
		]);
	}
}

render(
	React.createElement(App),
	document.getElementById("root")
);