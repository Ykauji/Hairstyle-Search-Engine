import React from 'react'
import Grid from '@material-ui/core/Grid';
import './hairstyleGrid.css'
import HairstyleBox from './hairstyleBox'

function HairstyleGrid(props) {
	// This should have as input an array of hairstyles to display. maybe only random 12? 
	const gridStyle = {
	    direction: "row",
	    justify: "center",
	    alignItems: "center",
	}

	return (
		<div>
			<Grid className='parent' justify='space-evenly' style={gridStyle} container>
				<HairstyleBox imageName='menhair.jpeg' styleName='Men medium length'/>
				<HairstyleBox imageName='shortoo2.jpg' styleName='Asian Pobajaka'/>
				<HairstyleBox imageName='menhair.jpeg' styleName='Mojava Paroom'/>
				<HairstyleBox imageName='menhair.jpeg' styleName='Mojava Paroom'/>
			</Grid>
		</div>
	)
}

export default HairstyleGrid