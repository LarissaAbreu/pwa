import { Actionable } from './types'
import {ActionType} from "../ActionType";

type Coords = {
  latitude: number
  longitude: number
  zoom: number
}

export type SpotAction = Actionable<Coords>

export const recordCenter = (coords: Coords): SpotAction => {
  const { latitude, longitude, zoom } = coords

  return {
    type: ActionType.CENTER_WAS_RECORDED,
    payload: {
      latitude,
      longitude,
      zoom
    }
  }
}
