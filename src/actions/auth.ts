import { Actionable } from './types'

import {
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR
} from '../constants'

export const signInWithSocial = firebase => {
  return dispatch => {
    firebase
      .login({ provider: 'facebook', type: 'popup' })
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)))
  }
}

const signInError = (error): Actionable<any> => {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  }
}

const signInSuccess = (result): Actionable<any> => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result
  }
}

export const signOut = firebase => {
  return dispatch => {
    firebase
      .logout()
      .then(() => dispatch(signOutSuccess()))
      .catch(() => dispatch(signOutError()))
  }
}

const signOutSuccess = (): Actionable<any> => {
  return {
    type: SIGN_OUT_SUCCESS,
    payload: ''
  }
}

const signOutError = (): Actionable<any> => {
  return {
    type: SIGN_OUT_ERROR,
    payload: ''
  }
}
