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
import Slider from './launch-page/image-slider/slider'

// Client to connect w/ GraphQL API
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});


// Query for hairstyles


// Random line. 
const line = {
	color: '#000000',
	width: '25%',
	backgroundColor: '#000000',
	height: .05,
	position: 'relative',
	top: '-100px',
	borderColor : '#000000',
}

// Test data.
const gridMale = [
{
	image: 'menhair.jpeg',
	name: "Men's short",
},
{
	image: 'shortoo2.jpg',
	name: "Men's short",
},
{
	image: 'longhairmen.jpg',
	name: "Men's Long Hair",
},
{
	image: 'hair4.jpg',
	name: 'Men medium length',
}];

const gridFemale = [
{
	image: 'jiji1.png',
	name: 'Fools medium length',
},
{
	image: 'jiji2.png',
	name: 'Fool style',
},
{
	image: 'jiji3.png',
	name: 'The fool',
},
{
	image: 'jiji4.png',
	name: 'The cat',
}];

ReactDOM.render(
	<ApolloProvider client={client}>
		<div className="todo-list">
			<NavBar />
			<ImageHeader image='./hairombre.jpeg' overlayText='Find the hairstyle of your dreams!'/>
			<HairstyleGrid hairStyles={gridFemale}/>
			<BottomBar />
			<HairstyleGrid hairStyles={gridFemale}/>
			<BottomBar />
			<div style={{width: '100%', height: '200px',backgroundColor: '#EFEFEF', position: 'relative', top: '-100px',}}> 
				<h1 style={{color: 'black',textAlign: 'center'}}>This is a test!</h1>
			</div>
		</div>
	</ApolloProvider>


	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
