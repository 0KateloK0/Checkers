import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// this logic is from stack overflow
const apps = {
	game: () => import('./game.js'),
	main: () => import('./main.js'),
	login: () => import('./login.js')
}

function renderAppInEl (el) {
	if (apps[el.id]) {
		apps[el.id]().then(({default: App}) => {
			if (App)
				ReactDOM.render( <App {...el.dataset}/>, el )
		})
	}
}


document.querySelectorAll('.__react-root').forEach(renderAppInEl);