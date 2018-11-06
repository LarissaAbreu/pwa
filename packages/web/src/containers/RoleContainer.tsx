import * as React from 'react'
import { connect } from 'react-redux'

import { DependenciesContainerType } from '../types'
import { ComponentType } from 'react'

type RoleState = DependenciesContainerType

type RoleProps = RoleState

const RoleContainer = (Component: ComponentType<RoleProps>) => {
  class Role extends React.Component<RoleProps, RoleState> {
    componentDidMount(): void {
      const { auth, history } = this.props

      if (!auth.isAdmin) {
        history.push('/spots/list')
      }
    }

    render(): React.ReactNode {
      return <Component {...this.props} />
    }
  }

  const mapStateToProps = (state: RoleState) => state

  return connect<RoleProps>(mapStateToProps)(Role)
}

export default RoleContainer
