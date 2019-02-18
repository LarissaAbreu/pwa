import { combineReducers, Reducer } from 'redux'

import { auth, AuthState } from './auth'
import { geolocation, LocationState } from './location'

export interface ApplicationState {
  auth: AuthState
  geolocation: LocationState
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth,
  geolocation
})

export default reducers
