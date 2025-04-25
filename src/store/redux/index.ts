import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit'

import { dbService, initDatabase } from '../../services/database'

import authSlice from './authSlice';
import themeSlice from './themeModeSlice';
import userSlice from './userSlice';

const slices = { authSlice, themeSlice, userSlice };

// Initialize database
initDatabase();

const indexedDBMiddleware: Middleware = store => next => action => {
    const result = next(action);
    const state = store.getState();

    // Sauvegarder l'état dans IndexedDB
    Object.keys(state).forEach(key => {
        dbService.set(key, state[key]);
    });

    return result;
};

const reducers = Object.entries(slices).reduce((acc, [name, slice]) => {
    acc[name] = slice;
    return acc;
}, {} as { [key: string]: any });

const store = configureStore({
    reducer: combineReducers({ ...reducers }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(indexedDBMiddleware),
    preloadedState: Object.keys(reducers).reduce(async (acc, key) => {
        const value = await dbService.get(key);
        if (value !== null) {
            acc[key] = value;
        }
        return acc;
    }, {} as any)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;