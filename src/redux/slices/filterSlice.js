import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
}

const filetrSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryId = action.payload
      console.log(action)
    },
  },
})

export const { setCategory } = filetrSlice.actions
export default filetrSlice.reducer