import { signSlice, signState } from '@/redux/reducers/sign.slice'
import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

type ReducerState = {
  sign: signState
}

const rootReducers = (state: any, action: AnyAction): CombinedState<ReducerState> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return combineReducers({
        sign: signSlice.reducer
      })(state, action)
  }
}

export default rootReducers
