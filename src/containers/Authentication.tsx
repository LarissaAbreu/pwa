import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Dependencies as Dependenciable } from '../types'
import { withDependencies } from './Dependencies'
import { compose } from 'recompose'

type State = Dependenciable
type Props = State

export const Authentication = Component => {
  function Authenticable(props) {
    const { auth, history } = props

    useEffect(() => {
      if (!auth.isAuthenticated) {
        history.push('/')
      }
    })

    return auth.isAuthenticated ? <Component {...props} /> : null
  }

  const mapStateToProps = (state): State => state

  return compose<Props, State>(
    connect<Props>(mapStateToProps),
    withDependencies
  )(Authenticable)
}
