import React from 'react'

import ImageHeader from './imageHeader'
import BottomBar from './bottomBar'
import NavBar from './navBar'
import HairstyleGrid from './hairstyleGrid'
import Slider from './image-slider/slider'

class LaunchPage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<NavBar />
				<ImageHeader image='./hairombre.jpeg' overlayText=''/>
				<HairstyleGrid/>
				<BottomBar />
			</div>
		)
	}
}

export default LaunchPage