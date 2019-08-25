import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Should reorganize this as single launch-page item.
import ImageHeader from './launch-page/imageHeader'
import BottomBar from './launch-page/bottomBar'
import NavBar from './launch-page/navBar'
import HairstyleGrid from './launch-page/hairstyleGrid'

ReactDOM.render(
	<div className="todo-list">
		<NavBar />
		<ImageHeader image='./hairombre.jpeg' overlayText='Find the hairstyle of your dreams!'/>
		<hr style={{
		    color: '#000000',
		    width: '25%',
		    backgroundColor: '#000000',
		    height: .05,
		    position: 'relative',
		    top: '-100px',
		    borderColor : '#000000'}}
		/>

		<HairstyleGrid />
		<BottomBar />
	</div>


	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
