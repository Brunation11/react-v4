import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Adopt Me!</h1>
				<Pet
					name="Luna"
					animal="Dog"
					breed="Havanese"
				/>
				<Pet
					name="Pepper"
					animal="bird"
					breed="Cockatiel"
				/>
				<Pet
					name="Doink"
					animal="Cat"
					breed="Mix"
				/>
			</div>
		)
	}
}

render(
	React.createElement(App),
	document.getElementById("root")
);
