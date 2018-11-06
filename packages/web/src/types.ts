import { AuthState } from './reducers/auth'
import { RouteComponentProps } from 'react-router'

export type AuthProps = {
  auth: AuthState
}

export type Coords = {
  latitude: number
  longitude: number
  zoom: number
}

export type FetchedUser = {
  displayName: string
  email: string
  photoURL: string
  role: string
  uid: string
}

export type DependenciesContainerType = RouteComponentProps & AuthProps
