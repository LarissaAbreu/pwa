import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { store, persistedStore } from './store/store'
import { createGlobalStyle } from './theme'

const GlobalStyle = createGlobalStyle`
  @keyframes bounce {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
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
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
