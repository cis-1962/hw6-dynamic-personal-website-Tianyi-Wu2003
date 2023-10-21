import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const introductionSlice = createSlice({
  name: 'introduction',
  initialState: {
    img: '',
    description: '',
  },
  reducers: {
    save: (
      state,
      action: PayloadAction<{ img: string; description: string }>,
    ) => {
      const { img, description } = action.payload;
      state.img = img;
      state.description = description;
    },
  },
});

export const { save } = introductionSlice.actions;

export default introductionSlice.reducer;
