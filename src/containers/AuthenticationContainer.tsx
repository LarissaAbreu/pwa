import * as React from 'react'

import { connect } from 'react-redux'
import { ComponentType } from './types'
import { AuthState } from '../reducers/auth'

type AuthenticationState = {
  auth: AuthState
  history: any
}

type AuthenticationProps = AuthenticationState

type ComponentAuthenticated = ComponentType

const AuthenticationContainer = (
  Component: ComponentType
): ComponentAuthenticated => {
  class Authentication extends React.Component<
    AuthenticationProps,
    AuthenticationState
  > {
    componentDidMount(): void {
      const { auth, history } = this.props

      if (!auth.authenticated) {
        history.push('/')
      }
    }

    render(): React.ReactNode {
      const { auth } = this.props

      return auth.authenticated ? <Component {...this.props} /> : null
    }
  }

  const mapStateToProps = (state: AuthenticationState) => state

  return connect(mapStateToProps)(Authentication)
}

export default AuthenticationContainer
