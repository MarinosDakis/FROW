import { configureStore } from '@reduxjs/toolkit';
import frowReducer from './frowSlice.js';

export default configureStore({
    reducer: {
        frowCounter: frowReducer,
    },
})