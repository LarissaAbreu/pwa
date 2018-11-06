import { Actionable } from './types'
import { ActionType } from '../ActionType'
import { Coords } from '../types'

export type SpotAction = Actionable<Coords>

export const recordCenter = ({
  latitude,
  longitude,
  zoom
}: Coords): SpotAction => ({
  type: ActionType.CENTER_WAS_RECORDED,
  payload: {
    latitude,
    longitude,
    zoom
  }
})
