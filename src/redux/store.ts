import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import rootReducers from '@/redux/reducers'
import logger from 'redux-logger'

const createStore = () => {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development'
  })
}

const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV === 'development'
})

const store = createStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default wrapper
