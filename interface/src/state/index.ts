import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { load, save } from 'redux-localstorage-simple';

import { updateVersion } from './global/actions'

const PERSISTED_KEYS: string[] = ['user', 'transactions'];

// to-do
// I think we only need multicall for the boilerplate



// const store = configureStore({
//   reducer: {
//     multicall,
//   },
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: true }), save({ states: PERSISTED_KEYS, debounce: 1000 })],
//   preloadedState: load({ states: PERSISTED_KEYS }),
// });

// store.dispatch(updateVersion())

// setupListeners(store.dispatch)

// export default store

// export type AppState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch