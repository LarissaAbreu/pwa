import {ActionType} from "../ActionType";
import {Actionable} from "./types";
import {Dispatch} from "redux";

export const fetchLocation = () => {
  const geolocation = navigator.geolocation

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'))
    }

    geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(new Error(`Error, ${error}`))
    )
  })

  return (dispatch: Dispatch) => {
    location
      .then(result => dispatch(locationFetched(result)))
      .catch(result => dispatch(locationNotFetched(result)))
  }
}

const locationFetched = (result): Actionable<any> => ({
  type: ActionType.LOCATION_FETCHED,
  payload: result
})

const locationNotFetched = (result): Actionable<any> => ({
  type: ActionType.LOCATION_NOT_FETCHED,
  payload: result
})
