/*
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
*/


import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes/routes';

if ( process.env.NODE_ENV !== 'production') {
	window.React = React;
}

ReactDOM.render(Routes, document.getElementById('root'));

