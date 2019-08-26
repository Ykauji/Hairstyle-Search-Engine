import React from 'react'
import Grid from '@material-ui/core/Grid';
import './hairstyleGrid.css'
import HairstyleBox from './hairstyleBox'

// Formats 4 per line.
function HairstyleGrid(props) {
	// This should have as input an array of hairstyles to display. maybe only random 12? 
	const gridStyle = {
	    direction: "row",
	    justify: "center",
	    alignItems: "center",
	    position: 'relative',
	    top: '-75px',
	    spacing: '0',
	}
	
	const browseText = {
		color: 'black', 
		textAlign: 'center',
		position: 'relative',
		top: '-50px',
	}

	const hairBoxes = props.hairStyles.map(box => {
		return <HairstyleBox imageName={box.image} styleName={box.styleName}/>
	})

	return (
		<div>
			<Grid className='parent' justify='space-evenly' style={gridStyle} container>
				{hairBoxes}
			</Grid>
		</div>
	)
}

export default HairstyleGrid