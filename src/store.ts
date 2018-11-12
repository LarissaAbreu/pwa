import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'

import localforage from 'localforage'

import reducers from './reducers/index'
const middlewares = applyMiddleware(thunk)

const persistConfig = {
  key: 'root',
  storage: localforage
}

const combinedReducers = persistReducer(persistConfig, reducers)

const store = createStore(combinedReducers, middlewares)

const persistedStore = persistStore(store)

export { store, persistedStore }
