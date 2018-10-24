import {ActionType} from "../ActionType";

export type LocationState = {}

const initialState = {}

export function location(
  state: LocationState = initialState,
  { payload, type }
): LocationState {
  switch (type) {
    case ActionType.LOCATION_FETCHED:
      const { coords } = payload
      return {
        ...state,
        coords
      }
    case ActionType.LOCATION_NOT_FETCHED:
      return initialState
    default:
      return {
        ...state
      }
  }
}
