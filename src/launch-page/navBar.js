import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
	constructor() {
		super();
	}
	render() {
		const titleStyle = {
		textAlign: 'center',
		top: '-23px',
		left: '-1.9%',
		fontSize: '25px',
		position: 'absolute',
		width: '100%',
		height: '100%',
		};

		const scissorIcon = {
			position: 'absolute',
			height: '55px',
			width: '55px',
			transform: 'rotate(270deg)',
			left: '49.75%',
			top: '0px',

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
			color: '#F5F5DC',
			fontWeight: 'bold'
		}

		const register = {
			textAlign: 'center',
			fontSize: '15px',
			position: 'absolute',
			top: '15px',
			right: '50px',
			padding: '0px',
			margin: '0px',
			color: '#F5F5DC',
			fontWeight: 'bold',
		}


		return (
			<div style={{height: '50px', backgroundColor:'#272e3b', width: '100%', marginLeft: 'auto', marginRight: 'auto',position:'relative',top:'0px'}}>
				<div>
					<Link to="/" style={{color: '#F5F5DC'}}>
						<h4 style={titleStyle}>InStyle</h4>
						<img src= './scissors.png' style={scissorIcon} />
					</Link>
				</div>
			
				<img src="./menu.jpg" style={menu}/>
				<Button style={login}>Login</Button>
				<Button style={register}>Register</Button>
			</div>
		)
	}
}

export default NavBar