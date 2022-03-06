import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCreatureBySlug } from '../Search/search.api';

export interface AppState {
  selectedCreature: any;
  currentCreature: any;
} 

const initialState: AppState = {
  selectedCreature: {},
  currentCreature: null
}

// this is the dispatch, this is creating both the ACTION as well as the reducer 
export const fetchCreatureBySlug = createAsyncThunk(
  'creature/fetchByIdStatus',
  async (slug:string) => {
    const response = await getCreatureBySlug(slug);
    console.log(response);
    return response;
  }
)

export const appSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    selectMonster: (state, action: PayloadAction<any>) => {
      console.log('reducer', {state, action});
      state.selectedCreature = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCreatureBySlug.fulfilled, (state, action) => {
      console.log('extraReducers', {state, action});
      state.currentCreature = action.payload.monster;
    })
  }

});

export const { selectMonster } = appSlice.actions;


export default appSlice.reducer;
