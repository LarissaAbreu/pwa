import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const middlewares = applyMiddleware(thunk)

const persistConfig = {
  key: 'root',
  storage,
  debug: true
}

const combinedReducers = persistReducer(persistConfig, reducers)

const store = createStore(combinedReducers, composeWithDevTools(middlewares))

const persistedStore = persistStore(store)

export { store, persistedStore }
