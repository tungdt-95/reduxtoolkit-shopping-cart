
import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: 'cart',
    initialState: {
        itemsList:[],
        totalQuan: 0,
        changed: false
    },
    reducers: {
        AddToCart(state, action) {
            state.changed = true;
            const newItem = action.payload;
            const exItem = state.itemsList.find(
                (item) => item.id === newItem.id
            );
            if (exItem) {
                exItem.quantity++;
                exItem.totalprice += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    img:newItem.img,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalprice: newItem.price,
                })
                state.totalQuan++
            }
            
        },
        RemoveFromCart(state,action) {
            state.changed = true;
            const id = action.payload;
            const exItem = state.itemsList.find((item) => item.id === id);
            if ( exItem.quantity === 1) 
            {
              state.itemsList = state.itemsList.filter((item) => item.id !== id);
              state.totalQuan--;
            } else {
             exItem.quantity--;
             exItem.totalprice -= exItem.price;
            }
         },
        
    }
})


export const cartActions = cartslice.actions;
export default cartslice;