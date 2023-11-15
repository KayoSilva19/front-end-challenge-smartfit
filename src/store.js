import { configureStore } from '@reduxjs/toolkit'

import gymReducer from './slices/gymSearch'

export const store = configureStore({
  reducer: {
    gyms: gymReducer,
  },
})
