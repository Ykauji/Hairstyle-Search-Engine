import React from 'react'
import {Dimensions} from 'react';
import Button from '@material-ui/core/Button';

class ImageHeader extends React.Component{
	constructor() {
		super();
	}
	render() {
		const imageText = {
		position: 'absolute',
		color: '#EFEFEF',
		textAlign: 'center',
		width: '100%',
		top: '200px',
		}

		const spanStyle = {
		   color: 'white', 
		   font: 'bold 48px/90px Helvetica, Sans-Serif',
		   letterSpacing: '-1px',
		   background: 'rgb(0, 0, 0)', /* fallback color */
		   background: 'rgba(0, 0, 0, 0.4)',
		   padding: '15px',
		}

		const freeTrialButton = {
			color: 'rgba(239, 239, 239, 1)',
			width: '500px',
			height: '100px',
			background: 'rgba(135, 255, 255, .7)',
			top: '-675px',
			left:'450px',
			font: 'bold 24px/45px Helvetica, Sans-Serif',
		}

		return (
				<div class="food-image">
					<img src={this.props.image} alt="jiji is a fool" style={{width: '100%'}} />
					<h1 style={imageText}><span style={spanStyle}>{this.props.overlayText}</span></h1>
					<div width='50px'>
						<Button variant="contained" style={freeTrialButton}>Register Now!</Button>
					</div>

				</div>
		)
	}
}
export default ImageHeader