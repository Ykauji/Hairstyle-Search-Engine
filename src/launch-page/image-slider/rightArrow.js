import React from 'react'
import './arrows.css'

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <p><i className="arrow right"></i></p>
    </div>
  );
}

export default RightArrow;