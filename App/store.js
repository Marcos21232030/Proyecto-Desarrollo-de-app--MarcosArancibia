import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import shopReducer from "../Features/Shop/shopSlice"
import { shopApi } from './services/shopServices'
import cartReducer from '../Features/Shop/cart/cartSlice'


export const store = configureStore({
  reducer: {
    shop:shopReducer,
    cart: cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware),
  
})

setupListeners(store.dispatch)