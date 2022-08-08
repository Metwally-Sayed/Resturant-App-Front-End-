import { Product } from "../../types"

export const getProducts = (products: Product) => {
  return {
    type: "GET_PRODUCTS",
    payload: products
  }
}









