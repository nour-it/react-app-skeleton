import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  profile: any | null;
  preferences: any;
}

const initialState: UserState = {
  profile: null,
  preferences: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updatePreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
  },
})

export const { setProfile, updatePreferences } = userSlice.actions;
export default userSlice.reducer;
