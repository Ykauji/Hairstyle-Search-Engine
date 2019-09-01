import React from 'react'
import './hairstyle-page.css'
import Button from '@material-ui/core/Button';

class VerticalScrollingPictureGrid extends React.Component {
	constructor() {
		super(); 
	}

	render() {
		const textStyle = {
			color: 'black',
			textAlign: 'center',
		}
		const imageStyle = {
			width: '100%',
		}

		return(
		<div>
			<div className='mainNavigation'>
			  <h1 style={textStyle}>Hairstyle-Name</h1>
			  <h6 style={textStyle}>
				<p>Description here Lorem ipsum dolor sit amet, consectetur
				    <br />adipiscing elit. Vivamus ante magna, malesuada
				    <br />nec ligula eget, hendrerit porttitor mauris.
				    <br />Praesent in.
			  	</p>

			  	<h1>Hair Traits:</h1>
			  	<h3>Gender: Male</h3>
			  	<h3>Length: Long</h3>
			  	<h3>Thickness: Thick</h3>
			  	<h3>Curliness: Curly</h3>
			  	<h3>Color: Black</h3>
			  </h6>

				
			<h6 style={textStyle}>
				<h2>Stylist Tips:</h2>
			  	<h3>Great for round faces!</h3>
			  	<h3>Recommended for people with curly hair</h3>
			  	<h3>High maintainence!</h3>
			</h6>

		

			  
			</div>
			<div className='otherContent'>
			  <img style={imageStyle} src="https://images.unsplash.com/photo-1497470288371-3a7b5a82a048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
			  <img style={imageStyle} src="https://images.unsplash.com/photo-1519678446913-040d6fcbf3d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="shom"/>
			  <img style={imageStyle} src="https://images.unsplash.com/photo-1512232207266-d100b35fd4de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
			</div>
		</div>
		)
	}
}

export default VerticalScrollingPictureGrid