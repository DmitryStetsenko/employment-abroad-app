import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContentRangeHeaderValue } from './../functions';
import { urls } from './../urls';

const vacancyUrls = urls.vacancy; 

export const fetchVacancyList = createAsyncThunk(
  'favVacancies/fetchVacancyList',
  async function(ids, {rejectWithValue}) {
    const queryStr = `filter={"id":[${[...ids]}]}`;

    try {
      const response = await fetch(`${vacancyUrls['base']}?${queryStr}`);
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

const setPending = (state, action) => {
  state.error = null;
  state.status = 'loading';
}
const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const favVacanciesSlice = createSlice({
  name: 'favVacancies',
  initialState: {
    data: {},
    status: null,
    error: null,
  },
  reducers: {

  },
  extraReducers: 
    (builder) => {
      // fetchVacancyList
      builder.addCase(fetchVacancyList.pending, setPending);
      builder.addCase(fetchVacancyList.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      });
      builder.addCase(fetchVacancyList.rejected, setError);
    },
});

export default favVacanciesSlice.reducer;