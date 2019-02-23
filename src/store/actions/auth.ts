import { Dispatch, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { authRef, provider, databaseRef } from '../../firebase'

import { Constants } from '../constants'
import { Actionable } from './types'
import { State as LandingState } from '../../pages/Landing'
import { State as MenuState } from '../../components/Menu'
import { AuthState } from '../reducers/auth'
import { FetchedUser } from '../../types'
import { Roles } from '../../Roles'

export type SignInError = ''
export type SignIn = AuthState | SignInError

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
  }
}

export const doSignOut = (): SignOutResult<void> => {
  return (dispatch: Dispatch<Action>) => {
    authRef
      .signOut()
      .then(() => dispatch(signOutSuccess()))
      .catch(() => dispatch(signOutError()))
  }
}

const signInError = (payload): Actionable<SignInError> => ({
  type: Constants.SIGN_IN_ERROR,
  payload
})

const signInSuccess = (payload: AuthState): Actionable<AuthState> => ({
  type: Constants.SIGN_IN_SUCCESS,
  payload
})

const signOutSuccess = (): Action => ({
  type: Constants.SIGN_OUT_SUCCESS
})

const signOutError = (): Action => ({
  type: Constants.SIGN_OUT_ERROR
})
