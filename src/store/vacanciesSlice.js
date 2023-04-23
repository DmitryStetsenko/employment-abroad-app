import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const vacancyUrls = {
  all: 'http://rest-api-simple.local/vacancy',
}

export const fetchVacancies = createAsyncThunk(
  'vacancies/fetchVacancies',
  async function(_, {rejectWithValue}) {
    try {

      const response = await fetch(vacancyUrls['all']);
      
      if (!response.ok) {
        throw new Error('Server error!');
      }

      const data = await response.json();
      return data;

    } catch(error) {

      return rejectWithValue(error.message);

    }
  }
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState: {
    list: [],
    filters: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchVacancies.pending]: (action, payload) => {
      state.error = null;
      state.status = 'loading';
    },
    [fetchVacancies.fulfilled]: (action, payload) => {
      state.status = 'resolved';
      state.list = action.payload;
    },
    [fetchVacancies.rejected]: setError,
  }
});

export default vacanciesSlice.reducer;