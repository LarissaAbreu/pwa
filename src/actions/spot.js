import { CENTER_WAS_RECORDED } from '../constants'

/**
 * @param {RecordableCenter} center
 * @returns {Function}
 */
export const recordCenter = center => {
  return dispatch => {
    dispatch({
      type: CENTER_WAS_RECORDED,
      payload: {
        latitude: center.getLatitude(),
        longitude: center.getLongitude(),
        zoom: center.getZoom()
      }
    })
  }
}
