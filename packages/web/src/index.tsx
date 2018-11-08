import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import App from './App'

import { store, persistedStore } from './store'

// import * as icomoon from './statics/fonts/icomoon.woff'

import { createGlobalStyle } from '@ondetempico/shared'

createGlobalStyle`
  @font-face {
    font-style: normal;
    font-weight: normal;
    font-family: icomoon;
    src: url('statics/fonts/icomoon.woff');
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
