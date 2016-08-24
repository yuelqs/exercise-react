import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Basic from './page/Basic';
import Moral from './page/Moral';

// Render the main component into the dom
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Moral}></IndexRoute>
			<Route path="basic" component={Basic}></Route>
		</Route>
	</Router>
	,document.getElementById('app'));
