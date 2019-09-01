import React from 'react' 
import VerticalScrollingPictureGrid from './verticalScrollingPictureGrid'
import NavBar from '../launch-page/navBar'

class HairstylePage extends React.Component {
	constructor() {
		super() 

	}

	render() {
		return (
			<div>
				<NavBar/>
				<VerticalScrollingPictureGrid />
			</div>
		)
	}
}

export default HairstylePage