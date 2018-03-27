import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Link} from 'react-router-dom'
//Redux需要用到的
import { createStore } from 'redux'
import { counter } from "./index.redux";
import { Provider } from 'react-redux'
//Redux需要用到的
const store = createStore(
	counter,
	// 触发 redux-devtools
	window.devToolsExtension ? window.devToolsExtension() : undefined
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>

	</Provider>,
	document.getElementById('root'));


