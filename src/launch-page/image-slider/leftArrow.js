import React from 'react'
import './arrows.css'

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
		<p><i className="arrow left"></i></p>
    </div>
  );
}

export default LeftArrow;