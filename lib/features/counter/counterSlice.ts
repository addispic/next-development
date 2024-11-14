import {createSlice,PayloadAction} from '@reduxjs/toolkit'

// reference
interface CounterReference {
    counter: number;
}

// initial state
const initialState: CounterReference = {
    counter: 0,
}

// counter slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateCounter: (state,action: PayloadAction<number>) => {
            if(action.payload > 0){
                state.counter+=1
            }else{
                state.counter-=1
            }
        },
        getInitialState: state => {
            return initialState
        }
    }
})

// exports
export const {updateCounter,getInitialState} = counterSlice.actions
export default counterSlice.reducer