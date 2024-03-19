import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Todo'; 


const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;