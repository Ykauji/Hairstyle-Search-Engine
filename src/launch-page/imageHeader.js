import React from 'react'
import {Dimensions} from 'react';
import Button from '@material-ui/core/Button';
import Slider from './image-slider/slider'
import { Link } from 'react-router-dom'

class ImageHeader extends React.Component {
	constructor() {
		super();
	}
	render() {
		const imageText = {
		position: 'relative',
		color: '#EFEFEF',
		textAlign: 'center',
		width: '100%',
		top: '-200px',
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
			width: '100%',
			height: '8vh',
			background: 'rgba(135, 255, 255, .7)',
			justifyContent: 'center',
			textAlign: 'center',
			font: 'bold 20px/40px Helvetica, Sans-Serif',
		}
		const buttonDiv = {
			position: 'relative',
			margin: 'auto',
			width: '25%',
			marginTop: '-100px',
		}
		/*<img src={this.props.image} alt="jiji is a fool" style={{width: '85%',height: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />*/
		return (
				<div className="food-image">
					<Slider />
					{/*<h6 style={imageText}><span style={spanStyle}>{this.props.overlayText}</span></h6>}*/}
					<div style={{margin: 'auto'}}>
						<Link to='/hairstyles' style={{ textDecoration: 'none' }}>
							<div style={buttonDiv}>
							<Button variant="contained" style={freeTrialButton}>Browse Now!</Button>
							</div>
						</Link>
					</div>

				</div>
		)
	}
}
export default ImageHeader