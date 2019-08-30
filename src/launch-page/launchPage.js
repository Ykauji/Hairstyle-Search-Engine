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
				<ImageHeader image='./hairombre.jpeg' overlayText='Find the hairstyle of your dreams!'/>
				<HairstyleGrid/>
				<BottomBar />
				<HairstyleGrid/>
				<BottomBar />
				<div style={{width: '100%', height: '200px',backgroundColor: '#EFEFEF', position: 'relative', top: '-100px',}}> 
					<h1 style={{color: 'black',textAlign: 'center'}}>This is a test!</h1>
				</div>
			</div>
		)
	}
}

export default LaunchPage