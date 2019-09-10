import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SearchBar from 'material-ui-search-bar'
import Grid from '@material-ui/core/Grid';
import './hairstyleGrid.css'

class NavBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		const titleStyle = {
		textAlign: 'left',
		top: '-30px',
		left: '10%',
		position: 'absolute',
		color: '#181818',
		fontFamily: 'Helvitica Neue',
		fontSize: '30px',
		fontStyle: 'italic',
		};

		const scissorIcon = {
			position: 'relative',
			height: '55px',
			width: '55px',
			transform: 'rotate(270deg)',
			left: '15.3%',
			top: '3px',

		}

		const menu = {
			position: 'absolute',
			height: '33px',
			width: '45px',
			left: '5px',
			top: '8px',

		}
		
		const login = {
			textAlign: 'center',
			fontSize: '15px',
			position: 'absolute',
			top: '15px',
			right: '180px',
			padding: '0px',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold'
		}
		// could have resued this!
		const register = {
			textAlign: 'center',
			fontSize: '15px',
			position: 'absolute',
			top: '15px',
			right: '50px',
			padding: '0px',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold',
		}
		const men = {
			fontSize: '15px',
			position: 'absolute',
			top: '10px',
			left: '20%',
			padding: '0px',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold',
		}
		const women = {
			textAlign: 'center',
			fontSize: '15px',
			position: 'absolute',
			top: '10px',
			left: '30%',
			padding: '0px',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold',
		}
		
		const searchBar = {
			position: 'absolute', 
			maxWidth: '300px',
			width: '20vw',
			height: '35px',
			top: '10px',
			right: '40%',
		}
		
		return (
			<Grid container display="flex" direction="row" height='100px' spacing={1}>
				<Link to="/" style={{color: '#F5F5DC'}}>
						<h4 style={titleStyle}>InStyle</h4>
				</Link>

				<Link to={{pathname: "/hairstyles", 
					state: {
						gender: 'male',
					}}} 
					style={men}>
					<Button style={men}>Mens</Button>
				</Link>

				<Link to={{pathname: "/hairstyles", 
					state: {
						gender: 'female',
					}}} 
					style={women}>
					<Button style={women}>Women</Button>
				</Link>

				<MuiThemeProvider>
					<SearchBar 
						onChange={() => console.log('onChange')} 
						onRequestSearch={() => console.log('request!')} 
						style={searchBar} />
				</MuiThemeProvider>

				<Button style={login}>Login</Button>
				<Button style={register}>Register</Button>
			</Grid>
		)
	}
}

export default NavBar