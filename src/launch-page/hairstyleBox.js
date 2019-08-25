import React from 'react' 
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box'

class HairstyleBox extends React.Component {
	constructor() {
		super();

	}

	render() {
		return (
			<Box border={1} borderColor='#D0D0D0'>
				<img src={this.props.imageName} alt="hair" width='300px' height='300px'/>
				<h4 style={{color: 'black', textAlign: 'center'}}>{this.props.styleName}</h4>
			</Box>
		)
	}
}


export default HairstyleBox