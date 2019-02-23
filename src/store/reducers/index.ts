import { combineReducers, Reducer } from 'redux'

import { auth, AuthState } from './auth'

export interface ApplicationState {
  auth: AuthState
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth
})

export default reducers
