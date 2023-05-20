import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContentRangeHeaderValue } from './../functions';
import { urls } from './../urls';

const vacancyUrls = urls.vacancy; 

export const fetchVacancies = createAsyncThunk(
  'vacancies/fetchVacancies',
  async function(_, {rejectWithValue, getState}) {
    try {
      const { queryStr } = getState().filters;
      const getParams = `?sort=["id", "DESC"]&join${queryStr}`;

      const response = await fetch(vacancyUrls.base + getParams);
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

export const fetchSingleVacancy = createAsyncThunk(
  'vacancies/fetchSingleVacancy',
  async function(id, {rejectWithValue}) {
    try {
      // const response = await fetch(vacancyUrls['base'] + '/' + id + 'full');
      const response = await fetch(`${vacancyUrls['base']}/${id}/full`);

      if (!response.ok) {
        throw new Error('Server error!');
      }

      const body = await response.json();
      return body;

    } catch(error) {

      return rejectWithValue(error.message);
    }
  }
);

export const fetchVacancyList = createAsyncThunk(
  'vacancies/fetchVacancyList',
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

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState: {
    data: {},
    singleData: {},
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: 
    (builder) => {
      // fetchVacancies
      builder.addCase(fetchVacancies.pending, setPending);
      builder.addCase(fetchVacancies.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      });
      builder.addCase(fetchVacancies.rejected, setError);
      // fetchSingleVacancy
      builder.addCase(fetchSingleVacancy.pending, setPending);
      builder.addCase(fetchSingleVacancy.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.singleData = action.payload;
      });
      builder.addCase(fetchSingleVacancy.rejected, setError);
      // fetchVacancyList
      builder.addCase(fetchVacancyList.pending, setPending);
      builder.addCase(fetchVacancyList.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      });
      builder.addCase(fetchVacancyList.rejected, setError);
    },
});

export default vacanciesSlice.reducer;