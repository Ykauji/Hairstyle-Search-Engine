import React from 'react';
import Slide from './slide'
import LeftArrow from './leftArrow'
import RightArrow from './rightArrow'

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1535&q=80",
        "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1542905538-96a3f185f597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1468488718849-422a2a5efc03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1559294850-1a7f808bba02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      ],
      currentIndex: 0,
      translateValue: 0,
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      this.setState(prevState => ({
        currentIndex: this.state.images.length-1,
        translateValue: (-(this.state.images.length-2) * this.slideWidth()),
      }));
      return;
    }
    console.log(this.slideWidth());
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth()),
    }));
  }
  
  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    console.log(this.state.translateValue);
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  
  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  
  render() {

    return (
      <div className="slider">
        <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
        }}>

				{
          this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))
        }
        </div>

        <RightArrow goToNextSlide={this.goToNextSlide}/>
        <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
        
      </div>
    );
  }

}

export default Slider