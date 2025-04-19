import { createSlice } from '@reduxjs/toolkit'

interface ThemeModeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeModeState = {
  mode: 'light',
}

const themeModeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
})

export const { toggleTheme, setTheme } = themeModeSlice.actions;
export default themeModeSlice.reducer;
