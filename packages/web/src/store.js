import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'

import localforage from 'localforage'

import { reactReduxFirebase } from 'react-redux-firebase'

import reducers from './reducers/index'
const middlewares = applyMiddleware(thunk)

const firebaseConfig = {
  userProfile: 'users',
  updateProfileOnLogin: false,
  logErrors: false,
  profileParamsToPopulate: [['role:roles']]
}

const persistConfig = {
  key: 'root',
  storage: localforage
}

const combinedReducers = persistReducer(persistConfig, reducers)

const store = createStore(combinedReducers, middlewares)

const persistedStore = persistStore(store)

export { store, persistedStore }
