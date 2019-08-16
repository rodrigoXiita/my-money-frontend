import React from 'react'
import ReactDom from 'react-dom'

import App from './main/app'
import Reducers from './main/reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'



const store = createStore(Reducers)
ReactDom.render(
  <Provider store={store}>
      <App/>
  </Provider>
, document.getElementById('app'));
