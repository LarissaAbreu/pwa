import { SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS } from '../constants'

export type AuthState = {
  authenticated: boolean
  isAdmin: boolean
  id?: string
}

const initialState = {
  authenticated: false,
  isAdmin: false,
  id: null
}

export function auth(
  state: AuthState = initialState,
  { type, payload }
): AuthState {
  switch (type) {
    case SIGN_IN_SUCCESS:
      const { user, profile } = payload

      return {
        ...state,
        isAdmin: profile.role === 'admin',
        authenticated: !!user,
        id: user.uid
      }

    case SIGN_OUT_SUCCESS:
      return initialState

    default:
      return state
  }
}
