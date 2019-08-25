import React from 'react'
import Button from '@material-ui/core/Button';

function NavBar() {

	const titleStyle = {
		textAlign: 'center',
		top: '-20px',
		left: '-40px',
		fontSize: '30px',
		position: 'absolute',
		width: '100%',
		height: '100%',
	};

	const scissorIcon = {
		position: 'absolute',
		height: '75px',
		width: '75px',
		transform: 'rotate(270deg)',
		left: '700px',
		top: '0px',

	}

	const menu = {
		position: 'absolute',
		height: '40px',
		width: '50px',
		left: '15px',
		top: '20px',

	}
	
	const login = {
		textAlign: 'center',
		fontSize: '20px',
		position: 'absolute',
		top: '22px',
		right: '175px',
		padding: '0px',
		margin: '0px',
		color: '#F5F5DC',
		fontWeight: 'bold'
	}

	const register = {
		textAlign: 'center',
		fontSize: '20px',
		position: 'absolute',
		top: '22px',
		right: '40px',
		padding: '0px',
		margin: '0px',
		color: '#F5F5DC',
		fontWeight: 'bold',
	}


	return (
		<div style={{height: '75px', backgroundColor:'#272e3b', width: '100%'}}>
			<h4 style={titleStyle}>InStyle</h4>
			<img src= './scissors.png' style={scissorIcon} />
			<img src="./menu.jpg" style={menu}/>
			<Button style={login}>Login</Button>
			<Button style={register}>Register</Button>
		</div>
	)
}

export default NavBar