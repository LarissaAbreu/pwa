import { AuthState } from '../reducers/auth'

export type ComponentType = React.ComponentClass | React.StatelessComponent

export type AuthProps = {
  auth: AuthState
}
