import * as Redux from 'redux'
import { Constants } from '../constants'

export interface Actionable<P> extends Redux.Action {
  type: Constants
  payload: P
}
