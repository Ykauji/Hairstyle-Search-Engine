import React from 'react' 
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box'

class HairstyleBox extends React.Component {
	constructor() {
		super();

	}

	

	render() {
		const textStyle = {
			color: 'black', 
			textAlign: 'center',
			position: 'relative',
			fontFamily: 'Helvitica',
			fontSize: '10px',
			fontStyle: 'italic',
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
		return (
			<div>
				<Box border={1} borderColor='#D0D0D0' borderRadius={16} overflow='hidden' width='300px' height='400px'>
					<img src={this.props.imageName} alt="hair" width='100%' height='100%'/>
				</Box> 
				<h1 style={textStyle}><span style={spanStyle}>{this.props.styleName}</span></h1>
			</div>
		)
	}
}

export default HairstyleBox