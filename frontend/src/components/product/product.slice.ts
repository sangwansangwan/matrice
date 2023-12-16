import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError, AxiosResponse} from 'axios';
import productService from './product.service';
import { PRODUCT } from './product.module.type';

const initialState:{isLoading:boolean,data:any} = {
  isLoading: false,
  data: [] as PRODUCT[],
};

export const product = createAsyncThunk(
  'product',
  async (
    _,
    thunkAPI,
  ) => {
    try {
      const data: AxiosResponse = await productService.product();
      return data;
    } catch (error) {
      const result = error as AxiosError;

      return thunkAPI.rejectWithValue(result.message);
    }
  },
);


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // clearError(state) {
    //   state.error = null;
    // },

    
  },

  extraReducers: (builder) => {
    builder.addCase(product.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(product.fulfilled, (state, action:any) => {
      state.isLoading = false;
      console.log(action.payload)
      state.data= action.payload.products
    });
    builder.addCase(product.rejected, (state, action) => {
      state.isLoading = false;
    });


   


  },
});

//export const {} = productSlice.actions;

export default productSlice.reducer;
