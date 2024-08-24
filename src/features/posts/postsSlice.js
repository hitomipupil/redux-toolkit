import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
});

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = "";
        });

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = "";
        });
    }
});

export default postsSlice.reducer;
