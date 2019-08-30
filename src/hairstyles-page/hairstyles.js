import React from 'react'
import NavBar from '../launch-page/navBar'
import DropdownGrid from './dropdown-grid/dropdownGrid'

class HairstylePage extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div>
				<NavBar />
				<DropdownGrid />
			</div>
		)
	}
}

export default HairstylePage