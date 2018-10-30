import * as React from 'react'

import { connect } from 'react-redux'

import Loader from '../../components/Loader'

import ListableSpot from '../../model/spots/ListableSpot'
import FilledForm from '../../model/spots/FilledForm'
import ListableSpotCollection from '../../model/spots/ListableSpotCollection'

import SpotMarker from './SpotMarker'

import { fetchLocation } from '../../actions/location'
import LocationContainer from '../../containers/LocationContainer'

class ListSpots extends React.Component {
  componentDidMount(): void {
    this.props.fetchLocation()
    this.fetchSpots()
  }

  fetchSpots(): void {
    const ref = this.props.firebase.database().ref('spots')

    ref.on('value', spots => {
      if (!spots.val()) {
        return
      }

      Object.values(spots.val()).forEach(spot => {
        const {
          location: { zoom, latitude, longitude },
          data
        } = spot
        const { modalities } = data

        const filledForm = FilledForm.build(
          data.name,
          modalities.street,
          modalities.longboard,
          data.hasFree,
          data.images
        )

        const listableSpot = ListableSpot.build(filledForm, {
          latitude,
          longitude,
          zoom
        })
      })
    })
  }

  render(): React.ReactNode {
    if (!this.collection.getList().length) {
      return <Loader text="Encontrando picos" />
    }

    return (
      <LocationContainer>
        {this.collection.getList().forEach(spot => {
          return (
            <SpotMarker
              key={Math.random()}
              name={spot.getData().getName()}
              isFree={spot.getData().hasFree()}
              hasStreet={spot.getData().hasStreet()}
              hasLongboard={spot.getData().hasLongboard()}
              images={spot.getData().getImages()}
              latitude={spot.getLocation().getLatitude()}
              longitude={spot.getLocation().getLongitude()}
            />
          )
        })}
      </LocationContainer>
    )
  }
}

const mapActionsToProps = dispatch => ({
  fetchLocation: () => dispatch(fetchLocation())
})

const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ListSpots)
