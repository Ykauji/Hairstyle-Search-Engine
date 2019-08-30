import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Load pages.
import LaunchPage from './launch-page/launchPage'
import NotFoundPage from './error-page/404'
import HairstylePage from './hairstyles-page/hairstyles'

// Client to connect w/ GraphQL API
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

// React Router DOM 
import {
	BrowserRouter as Router, 
	Route, 
	Switch, 
	Link, 
	Redirect,
} from 'react-router-dom'


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

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<Switch>
				<Route exact path="/" component={LaunchPage}/>
				<Route exact path="/404" component={NotFoundPage}/>
				<Route path='/hairstyles' component={HairstylePage}/>
				<Redirect to="/404"/>
			</Switch>
		</Router>
	</ApolloProvider>


	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
