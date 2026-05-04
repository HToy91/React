import { configureStore, Action } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

// An example slice reducer function shat shows how a Redux reducer works inside.
// We'll replace this soon with real app logic
// *** Removed ***
// function counterReducer(state: CounterState = { value: 0 }, action: Action) {
//   switch (action.type) {
//     // Handle actions here
//     default: {
//       return state;
//     }
//   }
// }

import postsReducer from '@/features/posts/postsSlice'
import usersReducer from '@/features/users/usersSlice'
export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    // Declare that `state.coutner` will be updated by the `counterReducer` function
    // *** Removed ***
    // counter: counterReducer

    posts: postsReducer,
    users: usersReducer,
  }
})

// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispactch
// Same for the `RootState` type
export type RootState = returnType<typeof store.getState>