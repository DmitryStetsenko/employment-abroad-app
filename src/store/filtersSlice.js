import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContentRangeHeaderValue } from './functions';

const filterUrls = {
  all: 'http://rest-api-simple.local/filter',
}

export const fetchFilters = createAsyncThunk(
  'filters/fetchFilters',
  async function(_, {rejectWithValue}) {
    try {
      const getParams = '';
      const response = await fetch(filterUrls['all'] + getParams);
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
      console.log(state.query);
      // console.log(tableName);
      state.queryStr = `&filter=${JSON.stringify(state.query)}`;
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

export const { addParams, delParam } = filtersSlice.actions;
export default filtersSlice.reducer;