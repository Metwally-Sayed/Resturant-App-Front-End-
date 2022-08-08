import { combineReducers } from "redux";
import { productsDataReducer } from './product.reducer';
import handlerCartDataReducer from "./cart.reducer"
import { orderReducer } from "./order.reducer";

const rootReducers = combineReducers({
  productsDataReducer,
  handlerCartDataReducer,
  orderReducer
})


export default rootReducers;

