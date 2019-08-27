import React from 'react'
import {Dimensions} from 'react';
import Button from '@material-ui/core/Button';
import Slider from './image-slider/slider'

class ImageHeader extends React.Component {
	constructor() {
		super();
	}
	render() {
		const imageText = {
		position: 'absolute',
		color: '#EFEFEF',
		textAlign: 'center',
		width: '100%',
		top: '50px',
		}

		const spanStyle = {
		   color: 'white', 
		   font: 'bold 24px/45px Helvetica, Sans-Serif',
		   letterSpacing: '-1px',
		   background: 'rgb(0, 0, 0)', /* fallback color */
		   background: 'rgba(0, 0, 0, 0.4)',
		   padding: '10px',
		}

		const freeTrialButton = {
			color: 'rgba(239, 239, 239, 1)',
			width: '300px',
			height: '65px',
			background: 'rgba(135, 255, 255, .5)',
			top: '-250px',
			left: '40%',
			justifyContent: 'center',
			textAlign: 'center',
			font: 'bold 24px/45px Helvetica, Sans-Serif',
		}
		/*<img src={this.props.image} alt="jiji is a fool" style={{width: '85%',height: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />*/
		return (
				<div className="food-image">
					<Slider />
					<h1 style={imageText}><span style={spanStyle}>{this.props.overlayText}</span></h1>
					<div style={{margin: 'auto'}}>
						<Button variant="contained" style={freeTrialButton}>Register Now!</Button>
					</div>

				</div>
		)
	}
}
export default ImageHeader