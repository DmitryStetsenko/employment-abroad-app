import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContentRangeHeaderValue } from './../functions';
import { urls } from './../urls';

const filterUrls = urls.filter; 

export const fetchFilters = createAsyncThunk(
  'filters/fetchFilters',
  async function({ exclude } = {}, {rejectWithValue}) {
    try {
      const getParams = '';
      const response = await fetch(filterUrls['all'] + getParams);
      let body, contentRange;
      
      if (!response.ok) {
        throw new Error('Server error!');
      }

      contentRange = getContentRangeHeaderValue(
        response.headers.get('Content-range')
      );

      
      body = await response.json();
      if (exclude) {
        body = body.filter(item => item.tablename !== exclude);
      }

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

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    data: {},
    status: null,
    error: null,
    query: {},
    queryStr: '',
  },
  reducers: {
    addParams(state, action) {
      const { param, tableName } = action.payload;
      state.query[tableName] = param;
      state.queryStr = `&filter=${JSON.stringify(state.query)}`;
    },
    delParam(state, action) {
      const { tableName } = action.payload;
      delete state.query[tableName];
      state.queryStr = `&filter=${JSON.stringify(state.query)}`;
    },
    clearAndSetParam(state, action) {
      const { param, tableName } = action.payload;
      state.query = {};
      state.query[tableName] = param;
      state.queryStr = `&filter=${JSON.stringify(state.query)}`;
    },
    clearFilters(state) {
      state.query = {};
      state.queryStr = '';
    },
  },
  extraReducers: 
    (builder) => {
      builder.addCase(fetchFilters.pending, (state) => {
        state.error = null;
        state.status = 'loading';
      });
      builder.addCase(fetchFilters.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      });
      builder.addCase(fetchFilters.rejected, setError);
    },
});

export const { addParams, delParam, clearFilters, clearAndSetParam } = filtersSlice.actions;
export default filtersSlice.reducer;