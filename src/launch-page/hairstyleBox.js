import React from 'react' 
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import './hairstyleGrid.css'

class HairstyleBox extends React.Component {
	constructor() {
		super();
		this.state = {
			stylistId : 0,
			name : "potato",
			image : "tomato",

		}
	}

	clickImage() {
		console.log("rerouting to stylistId!");
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

		const boxStyle = {
			backgroundColor: 'rgba(240,240,240,.1)'
		}

		return (
			<div>
				<Box border={1} borderColor='#D0D0D0' borderRadius={16} overflow='hidden' width='225px' height='275px' style={boxStyle}>
						<img src={this.props.imageName} alt="hair" width='100%' height='85%' onClick={this.clickImage}/>
						<h6 style={textStyle}>{this.props.styleName}</h6>
				</Box> 
				
			</div>
		)
	}
}

export default HairstyleBox