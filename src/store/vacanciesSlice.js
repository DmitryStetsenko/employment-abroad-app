import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const vacancyUrls = {
  all: 'http://rest-api-simple.local/vacancy',
}

export const fetchVacancies = createAsyncThunk(
  'vacancies/fetchVacancies',
  async function(_, {rejectWithValue}) {
    try {
      const getParams = '?sort=["id", "DESC"]&join';
      const response = await fetch(vacancyUrls['all'] + getParams);
      
      if (!response.ok) {
        throw new Error('Server error!');
      }

      console.log(response.headers.get('Content-range'));

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
  extraReducers: 
    (builder) => {
      builder.addCase(fetchVacancies.pending, (state) => {
        state.error = null;
        state.status = 'loading';
      });
      builder.addCase(fetchVacancies.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.list = action.payload;
      });
      builder.addCase(fetchVacancies.rejected, setError);
    },
});

export default vacanciesSlice.reducer;