import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cardlist from './CardList'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots'

ReactDOM.render(<Cardlist robots={robots} />, document.getElementById('root'));
registerServiceWorker();
