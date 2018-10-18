import { compose } from 'recompose'
import { withRouter, RouteComponentProps } from 'react-router'
import { withFirebase } from 'react-redux-firebase'

type DependenciesProps = RouteComponentProps

const DependenciesContainer = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return compose<P, P & DependenciesProps>(
    withFirebase,
    withRouter
  )(Component)
}

export default DependenciesContainer
