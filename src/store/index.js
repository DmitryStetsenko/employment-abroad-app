import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from './vacanciesSlice';

export default constructor({
  redusers: {
    vacancies: vacanciesReducer,
  }
});
