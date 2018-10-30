import { AuthState } from './reducers/auth'
import { RouteComponentProps } from 'react-router'
import { ApiState } from './reducers'

export type AuthProps = {
  auth: AuthState
}

export type ApiProps = {
  api: ApiState
}

export type Coords = {
  latitude: number
  longitude: number
  zoom: number
}

export type DependenciesContainerType = RouteComponentProps &
  AuthProps &
  ApiProps
