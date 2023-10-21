/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface PostType {
  title: string;
  description: string;
  img: string;
  id: number;
}

const initialState = {
  posts: [] as PostType[],
  nextId: 1,
};

const postsSlice = createSlice({
  name: 'all',
  initialState,
  reducers: {
    addPost: (
      state,
      action: PayloadAction<{
        title: string;
        img: string;
        description: string;
      }>,
    ) => {
      const { title, img, description } = action.payload;
      const newPost = {
        title,
        description,
        img,
        id: state.nextId,
      };
      state.posts.push(newPost);
      state.nextId += 1;
    },

    editPost: (state, action) => {
      const { title, img, description, id } = action.payload;
      const postEdit = state.posts.find((post) => post.id === id);
      if (postEdit) {
        postEdit.title = title;
        postEdit.description = description;
        postEdit.img = img;
      }
    },

    deletePost: (state, action) => {
      const { id } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
});

export const { addPost, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
