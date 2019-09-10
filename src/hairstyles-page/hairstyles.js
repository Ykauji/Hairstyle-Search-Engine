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
		this.setState((oldValues) => {
			return {[event.target.name]: event.target.value}
		});
	}

	componentDidMount() {
		if (!this.props.location.state) return;
		this.setState((prev) => {
			return {gender: this.props.location.state.gender}
		})
	}

	componentDidUpdate(prevProps, prevState) {
	  if (!this.props.location.state) return;
	  if (prevState.gender !== this.props.location.state.gender) {
	    this.setState({gender: this.props.location.state.gender})
  	  }
	}

	render() {
		const browseText = {
			color: 'black',
			textAlign: 'center',
		}
		
		const gridStyle = {
			position: 'relative',
			top: '40px',
			margin: 'auto',
		}
		const gridStyle2 = {
			position: 'relative',
			top: '205px',
			margin: 'auto',
		}

		return (
			<div>
				<NavBar />
				<div style={gridStyle}>
					<DropdownGrid parentState={this.state} handleDropdownChange={this.handleDropdownChange.bind(this)}/>
				</div>
				<div style={gridStyle2}>
					<HairstyleGrid queryState={this.state}/>
				</div>
			</div>
		)
	}
}

export default HairstylesPage