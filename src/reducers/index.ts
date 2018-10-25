import { combineReducers, Reducer } from 'redux'

import { firebaseReducer } from 'react-redux-firebase'
import { auth, AuthState } from './auth'
import { location, LocationState } from './location'
import { spot, SpotState } from './spot'

export type ApiState = {
  profile
}

export interface ApplicationState {
  auth: AuthState
  location: LocationState
  spot: SpotState
  api: ApiState
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth,
  location,
  spot,
  api: firebaseReducer
})

export default reducers
