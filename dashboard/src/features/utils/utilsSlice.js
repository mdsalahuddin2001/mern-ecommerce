import { createSlice } from '@reduxjs/toolkit';

// persist isDarkMode from local storage
const isDarkModeFromStorage = localStorage.getItem('isDarkMode');
const isDarkMode = isDarkModeFromStorage
  ? JSON.parse(isDarkModeFromStorage)
  : false;

// initial state
const initialState = {
  isSidebarOpen: true,
  isDarkMode: isDarkMode,
};

// utils slice
const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // save to localStorage on mode change
      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
    },
  },
});

export const { toggleSidebar, toggleDarkMode } = utilsSlice.actions;
export default utilsSlice.reducer;
