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

const line = {
	color: '#000000',
	width: '25%',
	backgroundColor: '#000000',
	height: .05,
	position: 'relative',
	top: '-100px',
	borderColor : '#000000',
}

const gridMale = [
{
	image: 'menhair.jpeg',
	styleName: 'Men medium length',
},
{
	image: 'shortoo2.jpg',
	styleName: 'Men medium length',
},
{
	image: 'longhairmen.jpg',
	styleName: 'Men medium length',
},
{
	image: 'hair4.jpg',
	styleName: 'Men medium length',
}];

const gridFemale = [
{
	image: 'jiji1.png',
	styleName: 'Men medium length',
},
{
	image: 'jiji2.png',
	styleName: 'Men medium length',
},
{
	image: 'jiji3.png',
	styleName: 'Men medium length',
},
{
	image: 'jiji4.png',
	styleName: 'Men medium length',
}];

ReactDOM.render(
	<div className="todo-list">
		<NavBar />
		<ImageHeader image='./hairombre.jpeg' overlayText='Find the hairstyle of your dreams!'/>
		<HairstyleGrid hairStyles={gridMale}/>
		<BottomBar />
		<HairstyleGrid hairStyles={gridFemale}/>
		<BottomBar />
		<div style={{width: '100%', height: '200px',backgroundColor: '#EFEFEF', position: 'relative', top: '-100px',}}> 
			<h1 style={{color: 'black',textAlign: 'center'}}>This is a test!</h1>
		</div>
		
	</div>


	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
