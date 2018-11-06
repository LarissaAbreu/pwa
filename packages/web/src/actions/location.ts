import { Dispatch } from 'redux'

import { ActionType } from '../ActionType'
import { Actionable } from './types'
import { ThunkAction } from 'redux-thunk'

export type LocationFetched = {
  latitude: number
  longitude: number
}

export type Location = LocationFetched | string
type LocationResult<R> = ThunkAction<R, void, undefined, Actionable<() => void>>

export const fetchLocation = (): LocationResult<void> => {
  const { geolocation } = navigator

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject('Problemas ao obter a localização.')
    }

    geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(`Problemas ao obter localização, ${error}`)
    )
  })

  return (dispatch: Dispatch<Actionable<Location>>) => {
    location
      .then(({ coords }) => {
        const { longitude, latitude }: LocationFetched = coords

        dispatch(locationFetched({ latitude, longitude }))
      })
      .catch((result: string) => dispatch(locationNotFetched(result)))
  }
}

const locationFetched = (
  payload: LocationFetched
): Actionable<LocationFetched> => ({
  payload,
  type: ActionType.LOCATION_FETCHED
})

const locationNotFetched = (payload: string): Actionable<string> => ({
  payload,
  type: ActionType.LOCATION_NOT_FETCHED
})
