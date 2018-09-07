import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'
import App from './App'

import { store, persistedStore } from './store'

injectGlobal`
  @font-face {
    font-style: normal;
    font-weight: normal;
    font-family: 'icomoon';
    src: url('../statics/fonts/icomoon.eot');
    src: url('../statics/fonts/icomoon.eot#iefix') format('embedded-opentype'),
        url('../statics/fonts/icomoon.ttf') format('truetype'),
        url('../statics/fonts/icomoon.woff') format('woff'),
        url('../statics/fonts/icomoon.svg#icomoon') format('svg');
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
