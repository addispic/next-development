"use client"
// hooks
import {useAppSelector, useAppDispatch} from '../lib/hooks'
// slices
// counter
import {updateCounter} from '../lib/features/counter/counterSlice'

export default function Counter(){
    // value
    const value = useAppSelector((state)=>state.counter)
    // hooks
    const dispatch = useAppDispatch()

    return (
      <main>
        <div className="p-16 flex items-center gap-5">
          <button onClick={()=>{
            dispatch(updateCounter(-1))
          }} className="px-3 py-1.5 bg-gray-600 text-white transition-colors ease-in-out duration-150 hover:bg-gray-500 rounded-md">
            decrease
          </button>
          <h1 className="text-5xl font-black w-[200px] text-center border-b border-neutral-300">{value.counter}</h1>
          <button onClick={()=>{
            dispatch(updateCounter(1))
          }} className="px-3 py-1.5 bg-gray-600 text-white transition-colors ease-in-out duration-150 hover:bg-gray-500 rounded-md">
            increase
          </button>
        </div>
      </main>
    );
}