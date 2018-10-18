import { CENTER_WAS_RECORDED } from '../constants'

import { SpotAction } from '../actions/spot'

export type SpotState = {
  latitude?: number
  longitude?: number
  zoom?: number
}

const initialState = {}

export function spot(
  state: SpotState = initialState,
  action: SpotAction
): SpotState {
  const { type, payload } = action

  switch (type) {
    case CENTER_WAS_RECORDED:
      const { latitude, longitude, zoom } = payload
      return {
        ...state,
        latitude,
        longitude,
        zoom
      }
    default:
      return {
        ...state
      }
  }
}
