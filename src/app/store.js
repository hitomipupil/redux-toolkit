import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import cakeReducer from "../features/cake/cakeSlice";
import usersReducer from "../features/users/usersSlice";
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cake: cakeReducer,
        users: usersReducer,
        posts: postsReducer
    }
});

export default store;
