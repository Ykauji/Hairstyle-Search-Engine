import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SearchBar from 'material-ui-search-bar'

class NavBar extends React.Component {
	constructor() {
		super();
	}

	render() {
		const titleStyle = {
		textAlign: 'left',
		top: '-30px',
		left: '10%',
		fontSize: '25px',
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
			textAlign: 'center',
			fontSize: '15px',
			position: 'absolute',
			top: '15px',
			left: '350px',
			padding: '0px',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold',
		}
		const women = {
			textAlign: 'center',
			fontSize: '15px',
			position: 'absolute',
			top: '15px',
			left: '450px',
			padding: '0px',
			margin: '0px',
			color: '#181818',
			fontWeight: 'bold',
		}
		
		const searchBar = {
			position: 'absolute', 
			maxWidth: '400px',
			height: '80%',
			top: '10%',
			right: '20%',
		}
		
		return (
			<div style={{height: '50px', backgroundColor:'#FFFFFF', width: '100%', marginLeft: 'auto', marginRight: 'auto',position:'relative',top:'0px'}}>
				<Link to="/" style={{color: '#F5F5DC'}}>
						<h4 style={titleStyle}>InStyle</h4>
				</Link>

				<Link to={{pathname: "/hairstyles", 
					state: {
						gender: 'male',
					}}} 
					style={{color: '#F5F5DC'}}>
					<Button style={men}>Mens</Button>
				</Link>

				<Link to={{pathname: "/hairstyles", 
					state: {
						gender: 'female',
					}}} 
					style={{color: '#F5F5DC'}}>
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
			</div>
		)
	}
}

export default NavBar