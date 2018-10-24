import * as Redux from 'redux'
import {ActionType} from "../ActionType";

export interface Actionable<P> extends Redux.Action {
  type: ActionType
  payload: P
}
