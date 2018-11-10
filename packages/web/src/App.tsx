import * as React from 'react'
import { compose } from 'recompose'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { ThemeProvider, theme } from '@ondetempico/shared/src/theme'

import Landing from './pages/Landing'
import Preferences from './pages/Preferences'

import NewSpot from './pages/spots/new/NewSpot'
import AnalyzeSpots from './pages/spots/AnalyzeSpots'
import ListSpots from './pages/spots/ListSpots'

import Main from './containers/Main'
import AuthenticationContainer from './containers/AuthenticationContainer'
import DependenciesContainer from './containers/DependenciesContainer'
import RoleContainer from './containers/RoleContainer'

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

const NewSpotWithContainers = Composing(NewSpot)
const ListSpotsWithContainers = Composing(ListSpots)

const SettingsAuthenticated = AuthenticationContainer(Preferences)

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={LandingWithDependencies} />

        <MainWithDependencies>
          <Route path="/settings" component={SettingsAuthenticated} />
          <Route path="/spots/list" component={ListSpotsWithContainers} />
          <Route path="/spots/new" component={NewSpotWithContainers} />
          <Route path="/spots/analyze" component={AnalyzeSpotsWithContainers} />
        </MainWithDependencies>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
