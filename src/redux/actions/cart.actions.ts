import { Product } from "../../types"


export const addToCart = (product: Product) => {
  return {
    type: "ADD_TO_CART",
    payload: product
  }
}