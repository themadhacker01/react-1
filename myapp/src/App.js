import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import './App.css';

class App extends Component {

	state = {
		ninjas: [
			{ name: 'Ryu', age: 30, belt: 'black', id: 1 },
			{ name: 'Yoshi', age: 25, belt: 'green', id: 2}
		]
	}

	addNinja = (newNinja) => {
		let lastNinja = this.state.ninjas[ this.state.ninjas.length - 1]
		newNinja.id = lastNinja.id + 1
		console.log(newNinja)

		let newNinjas = [...this.state.ninjas, newNinja]
		console.log(newNinjas)

		this.setState({
			ninjas: newNinjas
		})
	}

	deleteNinja = (id) => {
		console.log(id)
		let newNinjas = this.state.ninjas.filter(ninja => {
			return (ninja.id != id)
		})

		this.setState({
			ninjas: newNinjas
		})
	}

	render() {
		return (
			<div className="App">
				<h1>My react app</h1>
				<p>Welcome!</p>

				<AddNinja addNinja={ this.addNinja } />
				<br />
				<Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja } />
			</div>
		);
	}
}

export default App;
