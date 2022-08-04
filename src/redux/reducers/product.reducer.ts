import { ProductAction } from "../../types"

const productsinitialState = [
  {
    id: 0,
    name: "",
    description: "",
    price: 0,
    img: "",
    popular: false

  }]


export const productsDataReducer = (state = productsinitialState, action: ProductAction) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload
    default:
      return state;
  }
}


