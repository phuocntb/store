import { createStore, combineReducers } from "redux"
import { productReducer } from "./reducers/product.reducer"
import { countReducer } from "./reducers/count.reducer"

const RootReducer = combineReducers({
    productStore: productReducer,
    countStore: countReducer
})

export const store = createStore(RootReducer)