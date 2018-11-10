import * as React from 'react'

import { connect } from 'react-redux'

import SpotMarker from './SpotMarker'

import { fetchLocation, Location } from '../../actions/location'
import LocationContainer from '../../containers/LocationContainer'
import { DependenciesContainerType } from '../../types'
import { ThunkDispatch } from 'redux-thunk'
import { Actionable } from '../../actions/types'
import { databaseRef } from '@ondetempico/shared/src/firebase'
import {Loader} from '@ondetempico/shared/src/components/Loader'

type Actions = {
  fetchLocation: () => void
}

type Props = Actions & DependenciesContainerType

export type State = Props

export type Dispatch = ThunkDispatch<State, undefined, Actionable<Location>>

class ListSpots extends React.Component<Props, State> {
  componentDidMount(): void {
    this.props.fetchLocation()
    this.fetchSpots()
  }

  fetchSpots = async () => {
    const spots = await databaseRef.ref('spots').once('value')

    /*ref.on('value', spots => {
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
    })*/
  }

  render(): React.ReactNode {
    // if (!this.collection.getList().length) {
    return <Loader text="Encontrando picos" />
    // }
    /*
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
    )*/
  }
}

const mapActionsToProps = (dispatch: Dispatch): Actions => ({
  fetchLocation: () => dispatch(fetchLocation())
})

const mapStateToProps = (state: State): State => state

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ListSpots)
