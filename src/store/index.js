import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from './vacanciesSlice';

export default configureStore({
  reducer: {
    vacancies: vacanciesReducer,
  }
});
