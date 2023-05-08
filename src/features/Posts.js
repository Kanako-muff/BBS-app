import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyData";

export const postSlice = createSlice({
    name: "posts",
    initialState: { value: PostsData },
    reducers: {
        addPost: (state, action) => {
            state.value.push(action.payload);
        },
        deletePost: (state, action) => {
            state.value = state.value.filter((post) => post.id !==  action.payload.id);
            // ↑削除するときは基本的にfilter関数を使う。
            // 今見ているpost.idと一致していないものだけ吐かせる...というロジック。
        }
    },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;