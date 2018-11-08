import { ActionType } from '../ActionType'
import { Actionable } from './types'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { State as LandingState } from '../pages/Landing'
import { MenuState } from '../pages/Menu'
import { authRef, provider, databaseRef } from '@ondetempico/shared'
import { AuthState } from '../reducers/auth'
import { FetchedUser } from '../types'
import { Roles } from '../Roles'

export type SignInError = ''

type SignOutError = ''
type SignOutSuccess = ''

export type SignIn = AuthState | SignInError

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

export const doSignInAtProvider = (): SignInResult<void> => {
  return async (dispatch: Dispatch<Actionable<SignIn>>) => {
    const {
      user
    }: firebase.auth.UserCredential = await authRef.signInWithPopup(provider)
    const { displayName, email, uid } = user

    databaseRef
      .ref(`users/${uid}`)
      .once('value')
      .then((snapshot: firebase.database.DataSnapshot) => {
        const { photoURL, role, uid }: FetchedUser = snapshot.val()

        const user: AuthState = {
          displayName,
          email,
          isAdmin: role === Roles.ADMIN,
          isAuthenticated: true,
          photoURL,
          uid
        }

        dispatch(signInSuccess(user))
      })
      .catch(result => console.log(result))
  }
}

export const signOut = (): SignOutResult<void> => {
  return (dispatch: Dispatch<Actionable<SignOut>>) => {
    authRef
      .signOut()
      .then(() => dispatch(signOutSuccess()))
      .catch(() => dispatch(signOutError()))
  }
}

const signInError = (payload): Actionable<SignInError> => ({
  type: ActionType.SIGN_IN_ERROR,
  payload
})

const signInSuccess = (payload: AuthState): Actionable<AuthState> => ({
  type: ActionType.SIGN_IN_SUCCESS,
  payload
})

const signOutSuccess = (): Actionable<SignOutSuccess> => ({
  type: ActionType.SIGN_OUT_SUCCESS,
  payload: ''
})

const signOutError = (): Actionable<SignOutError> => ({
  type: ActionType.SIGN_OUT_ERROR,
  payload: ''
})
