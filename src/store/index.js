import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from './vacanciesSlice';
import filtersReducer from './filtersSlice';

export default configureStore({
  reducer: {
    filters: filtersReducer,
    vacancies: vacanciesReducer,
  }
});
