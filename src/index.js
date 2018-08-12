import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Index from './reducers/Index';

const initialState = {
    filters:{
        year:'ALL',
        segment:'ALL',
        name:'ALL'
    }
};
const store = createStore(Index,initialState,applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
