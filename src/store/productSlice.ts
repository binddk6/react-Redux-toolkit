import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import type {} from 'redux-thunk/extend-redux'

interface Product {
    id: string;
    title: string;
    image: string;
    price: string;
  }
  
  interface CartState {
    items: Product[];
    status:string;
  }

  const STATUS = {
    INIT:"init",
    LOADING:"loading",
    ERROR:'error',
    SUCCESS:'success'
  }
  const initialState: CartState = {
    items: [],
    status:STATUS.INIT
  };

const productSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        setProducts:(state, action:PayloadAction<Product[]>)=>{
            state.items=action.payload;
        }
        ,
        setStatus:(state,action:PayloadAction<string>)=>{
            state.status=action.payload
        }
    }

})

export const { setProducts,setStatus} = productSlice.actions;

export default productSlice.reducer;

// thunks 

export function fetchProducts(){

    return async function fetchProductThunk(dispatch:any , getState:any) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            fetch("https://fakestoreapi.com/products")
            .then((res) => res.json()).then((data)=>{
                dispatch(setProducts(data))
                dispatch(setStatus(STATUS.SUCCESS))
            })
        }
        catch{
            dispatch(setStatus(STATUS.ERROR))
        }
    }
    
} 