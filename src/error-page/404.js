import React from 'react'

// Props can be error message?
function NotFoundPage(props) {
	const textStyle = {
		color: 'black',
		textAlign: 'center'
	}
	return (
	<div>
		<h2 style={textStyle}>Page not found! 404.</h2>
	</div>
	)
}

export default NotFoundPage