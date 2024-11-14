import {configureStore} from '@reduxjs/toolkit'

// reducers
import counterReducer from './features/counter/counterSlice'

// store
export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
        }
    })
}

// infer the type of make store
export type AppStore = ReturnType<typeof makeStore>
// infer the root state and app dispatch
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]