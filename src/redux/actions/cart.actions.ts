import { Product } from "../../types"


export const addToCart = (product: Product) => {
  return {
    type: "ADD_TO_CART",
    payload: product
  }
}

export const removeFromCart = (product: Product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product
  }
}



export const adjustQty = (product: Product) => {
  return {
    type: "ADJUST_QTY",
    payload: product
  }
}
