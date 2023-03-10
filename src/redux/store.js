import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './slice/contactSlice';
import filterSlice from './slice/filterSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  }, 
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware().concat(logger)],
  })

export default store;