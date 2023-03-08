import { configureStore } from '@reduxjs/toolkit';
import files from './slices/Reducer'

export default configureStore({
  reducer: {
    files
  },
});