import * as React from 'react'
import { connect } from 'react-redux'

import { Dependencies } from '../types'

type State = Dependencies
type Props = State

export const Role = (
  Component: React.ComponentType<Props>
): React.ComponentClass<Props> => {
  class Role extends React.Component<Props, State> {
    componentDidMount(): void {
      const { auth, history } = this.props

      if (!auth.isAdmin) {
        history.push('/')
      }
    }

    render(): React.ReactNode {
      return <Component {...this.props} />
    }
  }

  const mapStateToProps = state => state

  return connect(mapStateToProps)(Role)
}
