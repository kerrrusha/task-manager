import { createSlice } from '@reduxjs/toolkit';
import { AuthState, User } from "../../common/commonTypes";
import {RootState} from "../store";
import {getUserInfo} from "../../api/getUserInfo";

const initialState: AuthState = {
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state : AuthState) => {
            const user: User = state.user!;
            console.log(`Logging out user: ${user}`);
            state.user = null;
        },
        fetchUser: (state: AuthState) => {
            getUserInfo().then(r => {
                console.log(`redux auth slice - fetched user ${r.user}`);
                state.user = r.user;
            });
        }
    },
});

export const { logout, fetchUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
