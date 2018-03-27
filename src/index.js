import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Link} from 'react-router-dom'
//Redux需要用到的
import { createStore ,applyMiddleware ,compose } from 'redux'
import { counter } from "./index.redux";
import { Provider } from 'react-redux'


import reducers from './reducer'
import './config'
//Redux需要用到的
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
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);


