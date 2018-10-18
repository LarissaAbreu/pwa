import * as React from 'react'

import { connect } from 'react-redux'
import { AuthProps } from './types'
import { RouteComponentProps } from 'react-router'

type RoleState = RouteComponentProps & AuthProps

type RoleProps = RoleState

const RoleContainer = (Component: React.ComponentType<RoleProps>) => {
  class Role extends React.Component<RoleProps> {
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
