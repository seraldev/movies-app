import { configureStore } from '@reduxjs/toolkit';
import { guestSlice } from './Guest';

export const store = configureStore({
    reducer: {
        guest: guestSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;