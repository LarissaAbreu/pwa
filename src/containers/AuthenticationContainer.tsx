import * as React from 'react'
import { connect } from 'react-redux'

import { DependenciesContainerType } from '../types'
import { DependenciesContainer } from './DependenciesContainer'
import { compose } from 'recompose'

type State = DependenciesContainerType
type Props = State

export const AuthenticationContainer = Component => {
  class Authentication extends React.Component<Props, State> {
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

  const mapStateToProps = (state): State => state

  return compose<Props, State>(
    connect<Props>(mapStateToProps),
    DependenciesContainer
  )(Authentication)
}
