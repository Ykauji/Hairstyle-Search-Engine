import React from 'react'
import Grid from '@material-ui/core/Grid';
import './hairstyleGrid.css'
import HairstyleBox from './hairstyleBox'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const HAIRSTYLE_QUERY = gql`
	query HairstyleQuery {
		hairstyles {
			name
			image
		}
	}
`;

// Formats 4 per line.
class HairstyleGrid extends React.Component {
	constructor() {
		super();
	}

	render() {
		// This should have as input an array of hairstyles to display. maybe only random 12? 
		const gridStyle = {
		    direction: "row",
		    justify: "center",
		    alignItems: "center",
		    position: 'relative',
		    top: '-75px',
		    justify: 'space-evenly'
		}
		
		const browseText = {
			color: 'black', 
			textAlign: 'center',
			position: 'relative',
			top: '-50px',
		}
		/*
		const hairBoxes = this.props.hairStyles.map((box,i) => {
			return <HairstyleBox imageName={box.image} styleName={box.name} key={i}/>
		})	*/

		return (
			<div>
				<Grid className='parent' style={gridStyle} container>
				<Query query={HAIRSTYLE_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <h4>Loading...</h4>
						if (error) console.log(error); 
						console.log(data.image);
						return <React.Fragment> 
							{
								data.hairstyles.map(hair => (
									<HairstyleBox imageName={hair.image} styleName={hair.name}/>
								))
							}
						</React.Fragment>
					}}
				</Query>
					
				</Grid>
			</div>
		)
	}
}

export default HairstyleGrid