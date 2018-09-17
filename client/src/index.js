import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './services/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
