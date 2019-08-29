import React from 'react' 
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';

class HairstyleBox extends React.Component {
	constructor() {
		super();

	}

	clickImage() {
		console.log("clicked!");
	}

	render() {
		const textStyle = {
			color: 'black', 
			textAlign: 'center',
			position: 'relative',
			fontFamily: 'Helvitica',
			fontSize: '15px',
			fontStyle: 'italic',
			position: 'relative',
			top: '-25px',
		}

		const spanStyle = {
		   color: 'white', 
		   font: 'bold 20px/42px Helvetica, Sans-Serif',
		   letterSpacing: '-1px',
		   background: 'rgb(0, 0, 0)', /* fallback color */
		   background: 'rgba(0, 0, 0, 0.4)',
		   padding: '10px',
		   width: '100%',
		   position: 'relative',
		   top: '-53px',
		}
		
		const borderBox = {
			width: '225px',
			height: '350px',
		
		}

		const boxStyle = {
			backgroundColor: 'rgba(240,240,240,.1)'
		}

		return (
			<div style={borderBox}>
				<Box border={1} borderColor='#D0D0D0' borderRadius={16} overflow='hidden' width='225px' height='275px' style={boxStyle}>
						<img src={this.props.imageName} alt="hair" width='100%' height='85%' onClick={this.clickImage}/>
						<h6 style={textStyle}>{this.props.styleName}</h6>
				</Box> 
				
			</div>
		)
	}
}

export default HairstyleBox