import { AuthState } from './reducers/auth'
import {RouteComponentProps} from "react-router";

export type AuthProps = {
  auth: AuthState
}

export type DependenciesContainerType = RouteComponentProps & AuthProps

