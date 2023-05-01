import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContentRangeHeaderValue } from './functions';

const vacancyUrls = {
  all: 'http://rest-api-simple.local/vacancy',
}

export const fetchVacancies = createAsyncThunk(
  'vacancies/fetchVacancies',
  async function(_, {rejectWithValue, getState}) {
    try {
      const { queryStr } = getState().filters;
      const getParams = `?sort=["id", "DESC"]&join${queryStr}`;

      console.log(queryStr);

      const response = await fetch(vacancyUrls['all'] + getParams);
      let contentRange;

      if (!response.ok) {
        throw new Error('Server error!');
      }

      contentRange = getContentRangeHeaderValue(
        response.headers.get('Content-range')
      );

      const body = await response.json();
      return { body, contentRange };

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
    data: {},
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
        state.data = action.payload;
      });
      builder.addCase(fetchVacancies.rejected, setError);
    },
});

export default vacanciesSlice.reducer;