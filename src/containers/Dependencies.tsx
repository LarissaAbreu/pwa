import { compose } from 'recompose'
import { withRouter, RouteComponentProps } from 'react-router'
import { ComponentType } from 'react'

type Dependencies<P> = RouteComponentProps<P>

export const withDependencies = <P extends object>(
  Component: ComponentType<P>
) => compose<P, Dependencies<P>>(withRouter)(Component)
