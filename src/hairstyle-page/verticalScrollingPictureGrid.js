import React from 'react'
import './hairstyle-page.css'
import Button from '@material-ui/core/Button';
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from "react-apollo";

const ADD_LIKES = gql`
mutation AddLikes($id: Int!) {
	addLike(id: $id) {
		id
		likes
	}
}
`;

class VerticalScrollingPictureGrid extends React.Component {
	constructor(props) {
		super(); 
		this.state = {
			likes: 0,
			liked: false,
		}
		this.likeClicked = this.likeClicked.bind(this);
	}
	// Should set up state here. 
	componentDidMount() {
	    this.setState({ likes: this.props.likes });
	    window.scrollTo(0,0)
  	}

	likeClicked() {
		if (this.state.liked === false) {
			this.setState(prev => {
				return {likes: prev.likes + 1}
			})
			this.setState(() => {
				return {liked: true}
			})
			this.props.changeInLikes(1)
			this.props.client.mutate( {
				mutation: gql` 
					mutation AddLikes($id: Int!) {
						addLike(id: $id) {
							id
							likes
						}
					}`,
				variables: {
					id: this.props.id
				}
			})
			.then(res => {
				console.log(res)
			}) 
			.catch(error => {console.log("Error: ",error)});
		} else {
			this.setState(() => {
				return {liked: false}
			})
			this.setState(prev => {
				return {likes: prev.likes-1}
			})
			this.props.client.mutate( {
				mutation: gql` 
					mutation SubtractLikes($id: Int!) {
						subtractLike(id: $id) {
							id
							likes
						}
					}`,
				variables: {
					id: this.props.id
				}
			})
			.then(res => {
				console.log(res)
			}) 
			.catch(error => {console.log("Error: ",error)});
		}
	}

	render() {
		const textStyle = {
			color: 'black',
			textAlign: 'center',
		}
		const imageStyle = {
			width: '100%',
		}
		const likeButton = {
			position: 'relative',
			background: '#181818',
			justifyContent: 'center',
			textAlign: 'center',
			color:'white',
			font: 'bold 16px/30px Helvetica, Sans-Serif',
			margin: '0 auto',
			display: 'block',
			width: '45%',
			height: '15%',
		}

		const favoriteButton = {
			position: 'relative',
			background: '#EFEFEF',
			justifyContent: 'center',
			textAlign: 'center',
			color:'black',
			font: 'bold 16px/30px Helvetica, Sans-Serif',
			margin: 'auto',
			marginTop: '10px',
			display: 'block',
			width: '45%',
			height: '15%',
		}

		return(
		<div>
			<div className='mainNavigation'>
			  <h1 style={textStyle}>{this.props.name ? this.props.name : 'No name'}</h1>
			  <h6 style={textStyle}>{this.state.likes} people like this hairstyle!</h6>
			  <h5 style={textStyle}>
				<p>{this.props.description ? this.props.description : 'No description'}
			  	</p>
			  </h5>
				
			  	<h2 style={textStyle}>Hair Traits:</h2>
			  	<h5 style={textStyle}>Gender: {this.props.gender}</h5>
			  	<h5 style={textStyle}>Length: {this.props.length}</h5>
			  	<h5 style={textStyle}>Thickness: {this.props.thickness}</h5>
			  	<h5 style={textStyle}>Curliness: {this.props.curliness}</h5>
			  	<h5 style={textStyle}>Color: {this.props.color}</h5>
				

				<div width='100%' margin='auto'>
					<Button id="like-button" variant="contained" onClick={this.likeClicked} style={likeButton}>{!this.state.liked ? 'Like!' : 'You liked this!'}</Button>
				</div>

				<div width='100%' margin='auto'>
					<Button variant="contained" style={favoriteButton}>Favorite!</Button>
				</div>


				<h2 style={textStyle}>Stylist Tips:</h2>
			  	<h6 style={textStyle}>Great for round faces!</h6>
			  	<h6 style={textStyle}>Recommended for people with curly hair</h6>
			  	<h6 style={textStyle}>High maintainence!</h6>
				
		

			  
			</div>
			<div className='otherContent'>
			  <img style={imageStyle} src={this.props.image}/>
			  <img style={imageStyle} src="https://images.unsplash.com/photo-1497470288371-3a7b5a82a048?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
			  <img style={imageStyle} src="https://images.unsplash.com/photo-1519678446913-040d6fcbf3d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="shom"/>
			  <img style={imageStyle} src="https://images.unsplash.com/photo-1512232207266-d100b35fd4de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
			</div>
		</div>
		)
	}
}

export default withApollo(VerticalScrollingPictureGrid)