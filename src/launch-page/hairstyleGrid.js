import React from 'react'
import Grid from '@material-ui/core/Grid';
import './hairstyleGrid.css'
import HairstyleBox from './hairstyleBox'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

// One big query so I can pass down instead of requerying. 
let HAIRSTYLE_QUERY = gql`
	query HairstyleQuery(
	$id: Int, 
	$name: String, 
	$length: String,
	$gender: String,
	$thickness: String, 
	$color: String, 
	$perm: String,
	) {
		hairstyles(
		id: $id,
		name: $name,
		length: $length,
		gender: $gender,
		thickness: $thickness,
		color: $color,
		perm: $perm,
		){
			id
			description
			name
			image
			likes 
			length
			gender 
			thickness 
			color
			perm
			stylist {
				id
				name
				image
				description
			}
		}
	}
`;


// Formats 4 per line.
class HairstyleGrid extends React.Component {
	constructor() {
		super();
		// Sets query parameters. Should do this in parent!
		this.state = {
			id: undefined,
			name: undefined,
			description: undefined,
			image: undefined,
			likes: undefined,
			length: undefined,
			gender: undefined, 
			thickness: undefined, 
			color: undefined,
			perm: undefined,
		}
	}
	// Rebuilds query on state change.

	render() {
		// This should have as input an array of hairstyles to display. maybe only random 12? 
		const divStyle = {
		    margin: 'auto', 
			width: '80%',
		}
		
		const browseText = {
			color: 'black', 
			textAlign: 'center',
			position: 'relative',
			top: '-50px',
		}
		
		return (
			<div style={divStyle}>
				<Grid className='parent' container spacing={3}>
					<Query query={HAIRSTYLE_QUERY} variables={this.props.queryState || {}}>
						{({ loading, error, data }) => {
							if (loading) return <h4>Loading...</h4>
							if (error) console.log(error); 
							console.log(HAIRSTYLE_QUERY);
								return data.hairstyles.map((hair,i) => (
										<HairstyleBox imageName={hair.image} styleName={hair.name}  key={i}/>
								))
						}}
					</Query>
					
				</Grid>
			</div>
		)
	}
}

export default HairstyleGrid