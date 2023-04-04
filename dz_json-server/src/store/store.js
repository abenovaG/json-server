import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice";
import {postReducer} from "./slices/postSlice";
import {api} from "../config/requester";


export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: {extraArgument: api}})
})