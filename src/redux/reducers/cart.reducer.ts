import { CartAction } from "../../types"


const initialcartState = [
  {
    id: 0,
    name: "",
    description: "",
    price: 0,
    img: "",
    Qty: 0

  }]

const handlerCartDataReducer = (state = initialcartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const selectedProduct = state.find(product => product.id === action.payload.id)

      if (!selectedProduct) {
        return [...state, {...action.payload, Qty: 1 }]
      } else {
        return state.map(product => {
          if (product.id === action.payload.id) {
            return {...product, Qty: product.Qty + 1}
          } else {
            return product
          }
        })
      }






    default:
      return state;
  }








  // case "REMOVE_FROM_CART":
  //   return state = state.filter((x) => {
  //     return x.id !== action.payload.id
  //   })


}


export default handlerCartDataReducer

