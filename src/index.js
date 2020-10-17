import React from 'react';
import ReactDOM from 'react-dom';
import { JournalApp } from './JournalApp.jsx';
import "./styles/styles.scss";

ReactDOM.render(
	<React.StrictMode>
		<JournalApp />
	</React.StrictMode>,
	document.getElementById('root')
);
