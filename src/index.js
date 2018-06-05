import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Card from './Card';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import CardList from './CardList';
import { robots } from './robots';

ReactDOM.render(
  <CardList robots={robots}/>
  , document.getElementById('root'));
registerServiceWorker();
