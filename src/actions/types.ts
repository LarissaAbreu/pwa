import { Action } from 'redux'

export interface Actionable<P> extends Action {
  payload: P
}
