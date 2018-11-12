import { combineReducers, Reducer } from 'redux'

import { auth, AuthState } from './auth'
import { geolocation, LocationState } from './location'
import { spot, SpotState } from './spot'

export interface ApplicationState {
  auth: AuthState
  geolocation: LocationState
  spot: SpotState
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth,
  geolocation,
  spot
})

export default reducers
