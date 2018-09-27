import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer } from 'react-leaflet'

import RecordableCenter from '../model/spots/RecordableCenter'

import { fetchLocation } from '../actions/location'
import { recordCenter } from '../actions/spot'

import Loader from '../components/Loader'

class LocationContainer extends Component {

  componentDidMount() {
    this.props.fetchLocation()
  }

  /**
   * @todo This is not performatic
   */
  recordCenter = event => {
    const { center: [lat, lng], zoom } = event

    this.props.recordCenter(RecordableCenter.build(lat, lng, zoom))
  }

  render() {
    if (!this.props.location.coords) {
      return <Loader text="Carregando mapa" />
    }

    const { location: { coords }} = this.props

    return (
      <Map
        zoom={17}
        style={{height: 'calc(100vh - 50px)'}}
        onViewportChanged={this.recordCenter}
        center={{ lat: coords.latitude, lng: coords.longitude }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        {this.props.children}
      </Map>
    )
  }
}

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation()),
  recordCenter: center => dispatch(recordCenter(center))
})

const mapStateToProps = state => state

export default connect(mapStateToProps, mapActionsToProps)(LocationContainer)
