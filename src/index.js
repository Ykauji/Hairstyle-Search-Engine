import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Load pages.
import LaunchPage from './launch-page/launchPage'
import NotFoundPage from './error-page/404'
import HairstylesPage from './hairstyles-page/hairstyles'
import HairstylePage from './hairstyle-page/hairstylePage'

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

const env = process.env.NODE_ENV || 'development';

const client = new ApolloClient({
		uri: env !== 'development' ? 'https://morning-eyrie-90580.herokuapp.com/graphql' : 'http://localhost:5000/graphql',
});




ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<Switch>
				<Route exact path="/" component={LaunchPage}/>
				<Route exact path="/404" component={NotFoundPage}/>
				<Route path='/hairstyles' component={HairstylesPage}/>
				<Route path='/hairstyle' component={HairstylePage}/>
				<Redirect to="/404"/>
			</Switch>
		</Router>
	</ApolloProvider>


	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
