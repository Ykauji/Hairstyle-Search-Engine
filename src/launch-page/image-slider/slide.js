import React from 'react'

const Slide = ({image}) => {
	const sliderStyle = {
	position: 'relative',
    backgroundImage: `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    display: 'inline-block',
	height: '100%',
	width: '100%',
	}
  	return <div style={sliderStyle} className="slide"></div>
}

export default Slide