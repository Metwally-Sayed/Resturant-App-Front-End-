import { Product } from "../../types"

export const getProducts = (products: Product) => {
  return {
    type: "GET_PRODUCTS",
    payload: products
  }
}





export const removeFromCart = (product: any) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: product
    }
  }
}

export const adjustQty = (productID: any, value: any) => {
  return {
    type: "ADJUST_QTY",
    payload: {
      id: productID,
      qty: value
    }
  }
}


