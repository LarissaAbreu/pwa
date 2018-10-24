import {ActionType} from "../ActionType";

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
    case ActionType.SIGN_IN_SUCCESS:
      const { user, profile } = payload

      return {
        ...state,
        isAdmin: profile.role === 'admin',
        authenticated: !!user,
        id: user.uid
      }

    case ActionType.SIGN_OUT_SUCCESS:
      return initialState

    default:
      return state
  }
}
