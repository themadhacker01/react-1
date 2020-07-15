import React, { Component } from 'react';
import './App.css';

const Ninjas = (props) => {	
	
	const { ninjas, deleteNinja } = props;
	
	const ninjaList = ninjas.map(ninja => {
		return (
			<div className="ninjas" key={ ninja.id }>
				<div>Name: { ninja.name }</div>
				<div>Age: { ninja.age }</div>
				<div>Belt: { ninja.belt }</div>
				<div>Id: { ninja.id }</div>
				<button onClick={ () => { deleteNinja(ninja.id) } }>Delete</button>
				<br /><br />
			</div>
		)
	});

	return(
		<div className="ninja-list">
			{ ninjaList }
		</div>
	);
}

export default Ninjas;