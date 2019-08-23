import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ToDoItem from './ToDoItem'
import ImageHeader from './launch-page/imageHeader'
import BottomBar from './launch-page/bottomBar'
import NavBar from './launch-page/navBar'

ReactDOM.render(
	<div className="todo-list">
		<NavBar />
		<ImageHeader />
		<BottomBar />
	</div>


	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
