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
			  <h1 style={textStyle}>{this.props.name ? this.props.name : 'No name'}</h1>
			  <h6 style={textStyle}>
				<p>{this.props.description ? this.props.description : 'No description'}
			  	</p>
			  </h6>

			  	<h2 style={textStyle}>Hair Traits:</h2>
			  	<h5 style={textStyle}>Gender: {this.props.gender}</h5>
			  	<h5 style={textStyle}>Length: {this.props.length}</h5>
			  	<h5 style={textStyle}>Thickness: {this.props.thickness}</h5>
			  	<h5 style={textStyle}>Curliness: {this.props.curliness}</h5>
			  	<h5 style={textStyle}>Color: {this.props.color}</h5>

				
				<h2 style={textStyle}>Stylist Tips:</h2>
			  	<h6 style={textStyle}>Great for round faces!</h6>
			  	<h6 style={textStyle}>Recommended for people with curly hair</h6>
			  	<h6 style={textStyle}>High maintainence!</h6>

		

			  
			</div>
			<div className='otherContent'>
			  <img style={imageStyle} src={this.props.image}/>
			  <img style={imageStyle} src="https://images.unsplash.com/photo-1497470288371-3a7b5a82a048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
			  <img style={imageStyle} src="https://images.unsplash.com/photo-1519678446913-040d6fcbf3d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="shom"/>
			  <img style={imageStyle} src="https://images.unsplash.com/photo-1512232207266-d100b35fd4de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
			</div>
		</div>
		)
	}
}

export default VerticalScrollingPictureGrid