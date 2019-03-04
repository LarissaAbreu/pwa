import * as React from 'react'
import * as ReactGA from 'react-ga'

import { compose } from 'recompose'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { ThemeProvider, theme } from './theme'

import Landing from './pages/Landing'

import { Analysis } from './pages/spots/Analysis'

import Main from './containers/Content'
import { Authentication } from './containers/Authentication'
import { withDependencies } from './containers/Dependencies'
import { Role } from './containers/Role'

const Composed = Component =>
  compose(
    Authentication,
    withDependencies
  )(Component)

const MainWithDependencies = Composed(Main)
const LandingWithDependencies = withDependencies(Landing)

const AnalyzeWithContainers = compose(
  Role,
  Composed
)(Analysis)

ReactGA.initialize('UA-129315279-1')

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LandingWithDependencies} />

        <MainWithDependencies>
          <Route path="/analysis" component={AnalyzeWithContainers} />
        </MainWithDependencies>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
