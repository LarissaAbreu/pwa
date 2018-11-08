import * as React from 'react'
import { connect } from 'react-redux'

import { DependenciesContainerType } from '../types'
import DependenciesContainer from './DependenciesContainer'
import { compose } from 'recompose'

type S = DependenciesContainerType
type Props = S

type ComponentAuthenticated = React.ComponentType

const AuthenticationContainer = Component => {
  class Authentication extends React.Component<Props, S> {
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

  const mapStateToProps = (state): S => state

  return compose<Props, S>(
    connect<Props>(mapStateToProps),
    DependenciesContainer
  )(Authentication)
}

export default AuthenticationContainer
