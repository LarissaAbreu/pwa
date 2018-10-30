import { ActionType } from '../ActionType'
import { Actionable } from './types'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { State as LandingState } from '../pages/Landing'
import { MenuState } from '../pages/Menu'

type SignInError = ''
type SignInSuccess = ''

type SignOutError = ''
type SignOutSuccess = ''

export type SignIn = SignInSuccess | SignInError

export type SignOut = SignOutSuccess | SignOutError

type SignInResult<R> = ThunkAction<
  R,
  LandingState,
  undefined,
  Actionable<() => void>
>

type SignOutResult<R> = ThunkAction<
  R,
  MenuState,
  undefined,
  Actionable<() => void>
>

export const signInWithSocial = (firebase): SignInResult<void> => {
  return (dispatch: Dispatch<Actionable<SignIn>>) => {
    firebase
      .login({ provider: 'facebook', type: 'popup' })
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)))
  }
}

export const signOut = (firebase): SignOutResult<void> => {
  return (dispatch: Dispatch<Actionable<SignOut>>) => {
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

const signOutSuccess = (): Actionable<SignOutSuccess> => ({
  type: ActionType.SIGN_OUT_SUCCESS,
  payload: ''
})

const signOutError = (): Actionable<SignOutError> => ({
  type: ActionType.SIGN_OUT_ERROR,
  payload: ''
})
