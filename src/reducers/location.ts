import { LOCATION_NOT_FETCHED, LOCATION_FETCHED } from '../constants'

export type LocationState = {}

const initialState = {}

export function location(
  state: LocationState = initialState,
  { payload, type }
): LocationState {
  switch (type) {
    case LOCATION_FETCHED:
      const { coords } = payload
      return {
        ...state,
        coords
      }
    case LOCATION_NOT_FETCHED:
      return initialState
    default:
      return {
        ...state
      }
  }
}
