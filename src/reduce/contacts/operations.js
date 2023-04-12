import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
 try {
    const response = await axios.get("/contacts");
 
   return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addCont = createAsyncThunk(
  "contacts/addCont",
  async (cont, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", cont );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCont = createAsyncThunk(
  "contacts/deleteCont",
  async (contId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

