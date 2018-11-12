import * as React from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer } from 'react-leaflet'
import { ThunkDispatch } from 'redux-thunk'

import { fetchLocation } from '../actions/location'
import { recordCenter } from '../actions/spot'

import { Loader } from '../components/Loader'
import { Actionable } from '../actions/types'
import { Coords } from '../types'

interface State {
  geolocation: Coords
}

type Actions = {
  fetchLocation: () => void
  recordCenter: (center: Coords) => void
}

interface Props extends State, Actions, React.HTMLAttributes<{}> {}

export type Dispatch = ThunkDispatch<State, undefined, Actionable<any>>

class LocationContainer extends React.Component<Props, State> {
  componentDidMount(): void {
    this.props.fetchLocation()
  }

  /**
   * @todo It's performatic?
   */
  recordCenter = (event): void => {
    const {
      center: [latitude, longitude],
      zoom
    } = event

    this.props.recordCenter({ latitude, zoom, longitude })
  }

  render(): React.ReactNode {
    const { geolocation } = this.props
    const { latitude, longitude, zoom } = geolocation

    if (!latitude) {
      return <Loader text="Carregando mapa" />
    }

    return (
      <Map
        zoom={zoom}
        style={{ height: 'calc(100vh - 50px)' }}
        onViewportChanged={this.recordCenter}
        center={{ lat: latitude, lng: longitude }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {this.props.children}
      </Map>
    )
  }
}

const mapActionsToProps = (dispatch: Dispatch): Actions => ({
  fetchLocation: () => dispatch(fetchLocation()),
  recordCenter: (center: Coords) => dispatch(recordCenter(center))
})

const mapStateToProps = (state: State): State => state

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LocationContainer)
