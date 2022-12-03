import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'; 
import  authReducer from './auth';

const store = configureStore({
  // All these reducers will merge into one big reducer and exposed to the store by react-redux toolkit 
    reducer: {
      counter: counterReducer, 
      auth: authReducer, 
    }
}); 

// const counterReducer = (state = initialState, action) => {
//   // if(action.type === 'increment'){
//   // Never mutate the state like this always overight with a brand new snapshot
//   //     state.counter++; // Never mutate the sate value.

//   //     return state;
//   //  }

//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggleCounter") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

export default store;
