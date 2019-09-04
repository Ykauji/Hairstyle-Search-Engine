import React from 'react' 
import VerticalScrollingPictureGrid from './verticalScrollingPictureGrid'
import NavBar from '../launch-page/navBar'

class HairstylePage extends React.Component {
	constructor(props) {
		super(props) 
		this.state = {
			propsLoaded: false
		}
		this.changeInLikes = this.changeInLikes.bind(this);
	}
	
	componentDidMount() {
		this.setState({likes: this.props.location.state.likes},() => this.setState({propsLoaded: true}));
	}
	
	changeInLikes(change) {
		console.log('potato')
		this.setState((prev) => {
			return {likes: prev.likes + change}
		})
	}

	isFromLink(props) {
		console.log(props)
		const notFound = "N/A"
		if (!this.state.propsLoaded) return null;
		if (this.props.location.state !== undefined) {
			return (
				<VerticalScrollingPictureGrid name={this.props.location.state !== undefined && this.props.location.state.name !== undefined ? this.props.location.state.name : ''}
				 id={this.props.location.state.id !== undefined ? this.props.location.state.id : 0}
				 description={this.props.location.state.description !== undefined ? this.props.location.state.description : notFound} 
				 image={this.props.location.state.image !== undefined ? this.props.location.state.image : ''}
				 gender={this.props.location.state.gender !== undefined ? this.props.location.state.gender : notFound}
				 length={this.props.location.state.length !== undefined ? this.props.location.state.length : notFound}
				 thickness={this.props.location.state.thickness !== undefined ? this.props.location.state.thickness : notFound}
				 curliness={this.props.location.state.curliness !== undefined ? this.props.location.state.curliness : notFound}
				 color={this.props.location.state.color !== undefined ? this.props.location.state.color : notFound}
				 likes={this.state.likes}
				 changeInLikes={this.changeInLikes}
				 />
			)
		}
		return (
			<VerticalScrollingPictureGrid 
				 name=''
				 description=''
				 image=''
				 gender=''
				 length=''
				 thickness='' 
				 curliness='' 
				 color='' 
				 likes='' 
			/>
		)

	}

	render() {
		return (
			<div>
				<NavBar/>
				{this.isFromLink(this.props)}
			</div>
		)
	}
}

export default HairstylePage