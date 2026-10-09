import { configureStore } from "@reduxjs/toolkit";
import  counter  from "./CounterSlice";
import  cart  from "./CartSlice";


export const store = configureStore(
    {
        reducer:{
            counterStore:counter,
            // cartStore:cart
        }
    }
) 