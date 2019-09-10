import React from 'react'

import ImageHeader from './imageHeader'
import BottomInfo from './bottomInfo'
import NavBar from './navBar'
import HairstyleGrid from './hairstyleGrid'
import Slider from './image-slider/slider'

class LaunchPage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div style={{backgroundColor: '#FFFFFF'}}>
				<NavBar />
				<div style={{position: 'relative', top: '75px'}}>
					<ImageHeader image='./hairombre.jpeg' overlayText=''/>
				</div>
				<BottomInfo/>
			</div>
		)
	}
}

export default LaunchPage