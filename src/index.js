import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
	BrowserRouter,
	Route,
	Link
} from 'react-router-dom'

import { Provider } from 'react-redux'
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>

	</Provider>,
	document.getElementById('root'));


