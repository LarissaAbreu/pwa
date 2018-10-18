import { CENTER_WAS_RECORDED } from '../constants'

import { Actionable } from './types'

type Coords = {
  latitude: number
  longitude: number
  zoom: number
}

export type SpotAction = Actionable<Coords>

export const recordCenter = (coords: Coords): SpotAction => {
  const { latitude, longitude, zoom } = coords

  return {
    type: CENTER_WAS_RECORDED,
    payload: {
      latitude,
      longitude,
      zoom
    }
  }
}
