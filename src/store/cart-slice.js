import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: cart,
    initialState : {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers:{
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.item.push({itemId: newItem.Id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title});
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeitemFromCart(){}
    }
})