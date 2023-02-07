import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: string;
    title: string;
    image: string;
    price: string;
  }
  
  interface CartState {
    items: Product[];
  }
  
  const initialState: CartState = {
    items: []
  };

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action: PayloadAction<Product>)=>{
            state.items.push(action.payload)
        },
        removeFromCart:(state,action: PayloadAction<string>)=>{
             let temp =state.items.filter((item)=>
             {
              return item.id!==action.payload
             })
             state.items=temp
        }
    }

})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;