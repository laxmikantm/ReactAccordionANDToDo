import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Accordion from './Accordion';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Accordion />, document.getElementById('root'));


serviceWorker.unregister();
