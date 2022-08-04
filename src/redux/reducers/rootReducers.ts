import { combineReducers } from "redux";
import { productsDataReducer } from './product.reducer';
import handlerCartDataReducer from "./cart.reducer"
// import { removeFromCart } from "../actions/actions";
// import { adjustQty } from "../actions/actions";

const rootReducers = combineReducers({
  productsDataReducer,
  handlerCartDataReducer,
})


export default rootReducers;

