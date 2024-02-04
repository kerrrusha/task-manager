import {configureStore} from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";
import sidebarReducer from "./sidebarReducer";

const store = configureStore({
   reducer: {
       boards: boardsSlice.reducer,
       sidebar: sidebarReducer,
   }
});

export default store;
