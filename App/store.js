import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import shopReducer from "../Features/shop/shopSlice"
import { shopApi } from './Services/shopServices'
import { authApi } from './Services/auth'
import cartReducer from "../Features/shop/cart/cartSlice"
import authReducer from "../Features/authSlice"

export const store = configureStore({
  reducer: {
    shop:shopReducer,
    cart:cartReducer,
    auth:authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware),
  
})

setupListeners(store.dispatch)