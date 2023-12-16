import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError, AxiosResponse} from 'axios';
import authService from './auth.service';

const initialState: {isLoading: boolean; token: string | null,userId:string} = {
  isLoading: false,
  token: null,
  userId:''
};

export const login = createAsyncThunk(
  'login',
  async (
    {
      userId,
      password,
    }: {
      userId: string;
      password: string;
    },
    thunkAPI,
  ) => {
    try {
      const data: AxiosResponse = await authService.login({
        userId,
        password,
      });
      return data;
    } catch (error) {
      const result = error as AxiosError;

      return thunkAPI.rejectWithValue(result.message);
    }
  },
);

export const signup = createAsyncThunk(
  'signup',
  async (
    {
      userName,
      email,
      name,
      password,
    }: {
      userName: string;
      password: string;
      email:string;
      name:string
    },
    thunkAPI,
  ) => {
    try {
      const data: AxiosResponse = await authService.signup({
        userName,
        name,
        email,
        password,
      });
      return data;
    } catch (error) {
      const result = error as AxiosError;

      return thunkAPI.rejectWithValue(result.message);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // clearError(state) {
    //   state.error = null;
    // },

    logout(state){
      state.token = null
      state.userId=''
      localStorage.removeItem('token')
    }
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.data.token;
      state.userId = action.payload.data.userId;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.token = initialState.token;
    });


    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
    });


  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
