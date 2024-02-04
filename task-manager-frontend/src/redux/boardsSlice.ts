import {createSlice} from "@reduxjs/toolkit";
import data from '../data.json';

const boardsSlice = createSlice({
    name: 'boards',
    initialState: data.boards,
    reducers: {
        //todo create reducers
    }
});


export default boardsSlice;
