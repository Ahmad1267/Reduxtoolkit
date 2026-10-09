import { createSlice } from "@reduxjs/toolkit";

 export const cart = createSlice(
    {
        name : "cart",
        initialState:{
            cart : []
        }, 
        reducers:{
         addTocart:(state, reqData)=>{
            state.cart += 1
         },
            delCart:(state)=>{
                state.cart -= 1
            }
         }
        }

)
export const {addTocart, delCart} = cart.actions
export default cart.reducer