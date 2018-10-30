import { ActionType } from '../ActionType'
import { LocationFetched } from '../actions/location'
import { Coords } from '../types'

export type LocationState = Coords

const initialState: LocationState = {
  latitude: 0,
  longitude: 0,
  zoom: 17
}

export const geolocation = (
  state: LocationState = initialState,
  { payload, type }
): LocationState => {
  switch (type) {
    case ActionType.LOCATION_FETCHED:
      const { latitude, longitude } = payload as LocationFetched

      return {
        ...state,
        latitude,
        longitude
      }

    case ActionType.LOCATION_NOT_FETCHED:
      return initialState

    default:
      return {
        ...state
      }
  }
}
