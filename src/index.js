import * as serviceWorker from './serviceWorker';

import React from 'react'
import ReactDom from 'react-dom'

import Reducers from './main/reducers'
import {applyMiddleware ,createStore} from 'redux'
import Promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import AuthOrApp from "./main/AuthOrApp";


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(Promise, multi, thunk)(createStore)(Reducers, devTools)
ReactDom.render(
    <Provider store={store}>
        <AuthOrApp/>
    </Provider>
    , document.getElementById('app'));


serviceWorker.unregister();
