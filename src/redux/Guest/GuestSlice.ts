import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Guest } from '../../models';

export interface GuestState {
    guest: Guest;
}

const initialState: GuestState = {
    guest: null
}

export const guestSlice = createSlice({
    name: 'guest',
    initialState,
    reducers: {
        setGuest: (state, action: PayloadAction<Guest>) => {
            state.guest = action.payload
        }
    },
})

export const { setGuest } = guestSlice.actions;