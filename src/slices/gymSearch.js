import { createSlice } from '@reduxjs/toolkit'

export const gymSlice = createSlice({
  name: 'gyms',
  initialState: {
    list: [],
    filter: 'morning', // afternoon, night
    isClosed: false,
  },
  reducers: {},
})

export default gymSlice.reducer
