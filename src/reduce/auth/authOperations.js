import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
 
export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
  console.log(data);
 try {
    const response = await axios.post("users/signup", data);

   return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
