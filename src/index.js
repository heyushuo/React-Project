import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Link} from 'react-router-dom'
//Redux需要用到的
import { createStore ,applyMiddleware ,compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
//Redux需要用到的
import Login from "./container/login/login";
import Register from "./container/register/register";
import AuthRoute from "./component/authroute/authroute"
//reducer用来处理action和state的，需要放在createStore里
import reducers from './reducer'
import './config'


const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Route path='/login' component={Login} ></Route>
				<Route path='/register' component={Register} ></Route>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);


