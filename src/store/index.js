//all redux logic here

import {legacy_createStore as createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit';
import { DECREMENT, INCREMENT, INCREMENTBY5, TOGGLE } from './identifiers'; 
const initialState= {counter:0,showCounter:true};

// const counterSlice=  createSlice({
//     name:'counter',
//     initialState,
//     reducers:{
//         increment(state){
//             state.counter++;
//         },
//         decrement(state){
//             state.counter--;
//         },
//         increase(state,action){
//             state.counter= state.counter+ action.payload
//         },
//         toggle(state){
//             state.showCounter=!state.showCounter;
//         }
//     }
// });
const counterReducer=(state=initialState,action)=>{
    if(action.type === INCREMENT){
        return{
             counter:state.counter +1,
             showCounter:state.showCounter,
            };
    }
    if(action.type === DECREMENT){
        return {
            counter: state.counter -1,
            showCounter:state.showCounter
        };
    }
    if(action.type === INCREMENTBY5){
        return{
             counter:state.counter + action.payload,
             showCounter:state.showCounter
            };
    }
    if(action.type === TOGGLE){
        return { 
            counter:state.counter,
            showCounter: !state.showCounter,
        }
    }
    return state;
};
const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);
export default store;