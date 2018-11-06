import * as React from 'react'
import { connect } from 'react-redux'

import { DependenciesContainerType } from '../types'
import DependenciesContainer from './DependenciesContainer'
import { compose } from 'recompose'

type AuthenticationState = DependenciesContainerType
type AuthenticationProps = AuthenticationState

type ComponentAuthenticated = React.ComponentType

const AuthenticationContainer = <P extends object>(
  Component: ComponentAuthenticated
): ComponentAuthenticated => {
  class Authentication extends React.Component<
    AuthenticationProps,
    AuthenticationState
  > {
    componentDidMount(): void {
      const { auth, history } = this.props

      if (!auth.isAuthenticated) {
        history.push('/')
      }
    }

    render(): React.ReactNode {
      const { auth } = this.props

      return auth.isAuthenticated ? <Component {...this.props} /> : null
    }
  }

  const mapStateToProps = (state: AuthenticationState): AuthenticationState =>
    state

  return compose(
    connect(mapStateToProps),
    DependenciesContainer
  )(Authentication)
}

export default AuthenticationContainer
