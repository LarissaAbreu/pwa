import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'
import App from './App'

import { store, persistedStore } from './store'

import icomoon from './statics/fonts/icomoon.woff'

injectGlobal`
  @font-face {
    font-style: normal;
    font-weight: normal;
    font-family: icomoon;
    src: url(${icomoon});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
