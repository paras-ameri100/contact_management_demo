import { combineReducers } from 'redux'
import { operationsReducer } from './contacts/reducers/operations'

export const rootReducer = combineReducers({
  operationsReducer,
})

export type RootState = ReturnType<typeof rootReducer>