import { ActionType } from '../ActionType'
import { Actionable } from './types'
import { Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk'
import {LandingState} from "../pages/Landing";

type SignInError = ''
type SignInSuccess = ''

export type Signed = SignInSuccess | SignInError

type Result<R> = ThunkAction<R, LandingState, undefined, Actionable<() => void>>

export const signInWithSocial = (
  firebase
): Result<void> => {
  return (dispatch: Dispatch<Actionable<Signed>>) => {
    firebase
      .login({ provider: 'facebook', type: 'popup' })
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)))
  }
}

export const signOut = firebase => {
  return (dispatch: Dispatch) => {
    firebase
      .logout()
      .then(() => dispatch(signOutSuccess()))
      .catch(() => dispatch(signOutError()))
  }
}

const signInError = (result): Actionable<SignInError> => ({
  type: ActionType.SIGN_IN_ERROR,
  payload: result
})

const signInSuccess = (result): Actionable<SignInSuccess> => ({
  type: ActionType.SIGN_IN_SUCCESS,
  payload: result
})

const signOutSuccess = (): Actionable<any> => ({
  type: ActionType.SIGN_OUT_SUCCESS,
  payload: ''
})

const signOutError = (): Actionable<any> => ({
  type: ActionType.SIGN_OUT_ERROR,
  payload: ''
})
