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
	}
	
	const browseText = {
		color: 'black', 
		textAlign: 'center',
		position: 'relative',
		top: '-50px',
	}

	return (
		<div>
			<Grid className='parent' justify='space-evenly' style={gridStyle} container>
				<HairstyleBox imageName='menhair.jpeg' styleName='Men medium length'/>
				<HairstyleBox imageName='shortoo2.jpg' styleName='Asian Pobajaka'/>
				<HairstyleBox imageName='longhairmen.jpg' styleName='Mojava Paroom'/>
				<HairstyleBox imageName='hair4.jpg' styleName='Mojava Paroom'/>
			</Grid>
		</div>
	)
}

export default HairstyleGrid