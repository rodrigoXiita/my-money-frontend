import React from 'react'
import ReactDom from 'react-dom'

import App from './main/app'
import Reducers from './main/reducers'
import {applyMiddleware ,createStore} from 'redux'
import Promise from 'redux-promise'
import {Provider} from 'react-redux'



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
                 window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(Promise)(createStore)(Reducers, devTools)
ReactDom.render(
  <Provider store={store}>
      <App/>
  </Provider>
, document.getElementById('app'));
