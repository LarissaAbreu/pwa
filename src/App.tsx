import * as React from 'react'
import * as ReactGA from 'react-ga'

import { compose } from 'recompose'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { ThemeProvider, theme } from './theme'

import Landing from './pages/Landing'

import { AnalyzeSpots } from './pages/spots/AnalyzeSpots'

import Main from './containers/Main'
import { AuthenticationContainer } from './containers/AuthenticationContainer'
import { DependenciesContainer } from './containers/DependenciesContainer'
import { RoleContainer } from './containers/RoleContainer'

const Composing = Component =>
  compose(
    AuthenticationContainer,
    DependenciesContainer
  )(Component)

const MainWithDependencies = Composing(Main)
const LandingWithDependencies = DependenciesContainer(Landing)

const AnalyzeSpotsWithContainers = compose(
  RoleContainer,
  Composing
)(AnalyzeSpots)

ReactGA.initialize('UA-129315279-1')

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LandingWithDependencies} />

        <MainWithDependencies>
          <Route path="/analyze" component={AnalyzeSpotsWithContainers} />
        </MainWithDependencies>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
