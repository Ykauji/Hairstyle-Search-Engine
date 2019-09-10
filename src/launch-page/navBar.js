import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SearchBar from 'material-ui-search-bar'
import Grid from '@material-ui/core/Grid';
import './navBar.css'

class NavBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		const titleStyle = {
		textAlign: 'left',
		top: '-3%',
		left: '5%',
		position: 'fixed',
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
			fontSize: '10px',
			position: 'fixed',
			top: '21px',
			right: '13%',
			paddingLeft: '20px',
			paddingRight: '20px',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold',
			float: 'left',
		}
		// could have resued this!
		const register = {
			textAlign: 'center',
			fontSize: '10px',
			position: 'fixed',
			top: '21px',
			right: '3%',
			paddingLeft: '20px',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold',
			float: 'left',
		}
		const men = {
			fontSize: '15px',
			position: 'fixed',
			top: '20px',
			left: '20%',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold',
			paddingLeft: '20px',
		}
		const women = {
			textAlign: 'center',
			fontSize: '15px',
			position: 'fixed',
			top: '20px',
			left: '30%',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold',
			paddingLeft: '20px',
			paddingRight: '20px',
		}
		
		const searchBar = {
			position: 'fixed', 
			maxWidth: '300px',
			width: '20vw',
			height: '40px',
			top: '15px',
			right: '30%',
			paddingLeft: '5px',
			paddingRight: '20px',
			float: 'left',
		}
		
		return (
			<Grid container className="parent" display="flex" align-content="flex-start" direction="row" height='100px' spacing={5}>
				<Link to="/" style={{color: '#F5F5DC'}}>
						<h4 style={titleStyle}>InStyle</h4>
				</Link>

				<Link to={{pathname: "/hairstyles", 
					state: {
						gender: 'male',
					}}} 
					className="child">
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