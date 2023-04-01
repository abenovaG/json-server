import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = 'post'
const initialState = {
    post: 'POST WORK',
    status: '',
    error: '',

}

export const postFetch = createAsyncThunk(
    `${name}/postFetch`,
    async (_, { extra: api}) => {
        const data = await api.get('/posts')
        return data
    }
)

export const postFetchv2 = createAsyncThunk(
    `${name}/postFetchV2`,
    async (body) => {
        const data = await axios.post('/posts',{...body})
        return data
    }
)

export const patchFetch = createAsyncThunk(
    `${name}/patchFetch`,
    async (_, { extra: api }) => {
        const data = await axios.patch('/posts/1', {title: "developer"})
        // res.data.json
        return data
    }
)
export const deleteFetch = createAsyncThunk(
    `${name}/deleteFetch`,
    async (_, { extra: api }) => {
        const data = await axios.delete('/posts/1')
         // res.data.json
        return data
    }
)


export const postSlice = createSlice({
    name,
    initialState,
    reducers: {
        increment: (state, action) => {
            state.post = 'HELLO WORLD'
        },
        decrement: (state, action) => {
            state.post = 'NOT HELLO'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postFetch.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(postFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.post = action.payload
            state.status = 'success'
        })
        builder.addCase(postFetch.rejected, (state, action) => {
            console.log(action.payload)
            state.error = 'ERROR'
            state.error = 'rejected'
        })
    }
})

export const { reducer: postReducer } = postSlice
export const { actions: postActions } = postSlice