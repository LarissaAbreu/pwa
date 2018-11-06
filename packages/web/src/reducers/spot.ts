import { SpotAction } from '../actions/spot'
import { ActionType } from '../ActionType'

export type SpotState = {
  latitude: number
  longitude: number
  zoom: number
}

const initialState: SpotState = {
  latitude: 0,
  longitude: 0,
  zoom: 17
}

export const spot = (
  state: SpotState = initialState,
  action: SpotAction
): SpotState => {
  const { type, payload } = action

  switch (type) {
    case ActionType.CENTER_WAS_RECORDED:
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
