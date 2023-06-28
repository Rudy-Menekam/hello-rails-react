import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_GREETING = 'hello-rails-react/greeting/GET_GREETING';
const initialState = '';

export const fetchGreeting = createAsyncThunk(GET_GREETING, async () => {
  const data = await fetch('api/message');
  const response = await data.json();
  console.log(response);
  return response;
});

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_GREETING}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;