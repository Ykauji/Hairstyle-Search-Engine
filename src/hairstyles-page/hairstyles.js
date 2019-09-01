import React from 'react'
import NavBar from '../launch-page/navBar'
import DropdownGrid from './dropdown-grid/dropdownGrid'
import HairstyleGrid from '../launch-page/hairstyleGrid'

class HairstylesPage extends React.Component {
	constructor() {
		super();
		this.state = {
			id: undefined,
			name: undefined,
			description: undefined,
			image: undefined,
			likes: undefined,
			length: undefined,
			gender: undefined, 
			thickness: undefined, 
			color: undefined,
			perm: undefined,
		}
	}

	handleDropdownChange(event) {
		console.log("poatto");
		this.setState((oldValues) => {
			return {[event.target.name]: event.target.value}
		});
	}
	
	render() {
		const browseText = {
			color: 'black',
			textAlign: 'center',
		}

		const gridStyle = {
			position: 'relative',
			top: '110px',
		}

		return (
			<div>
				<NavBar />
				<h2 style={browseText}>Browse Hairstyles!</h2>
				<DropdownGrid parentState={this.state} handleDropdownChange={this.handleDropdownChange.bind(this)}/>
				<div style={gridStyle}>
					<HairstyleGrid queryState={this.state}/>
				</div>
			</div>
		)
	}
}

export default HairstylesPage