import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers :{
        addToCart : (state, action)=>{
            state.push(action.payload)

        },
        removeFromCart : (state, action)=>{
          const  itemState = state.filter((item)=> item.id !== action.payload);
          return itemState;
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;