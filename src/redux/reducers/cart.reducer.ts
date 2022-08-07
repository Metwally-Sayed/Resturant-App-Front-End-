import { CartAction, Product } from "../../types"

// i made the initialcartState whice gonna state in the begging 

// const initialcartState = [
//   {
//     id: 0,
//     name: "",
//     description: "",
//     price: 0,
//     img: "",
//     Qty: 0

//   }]

// reducer is takes (state and action)
const handlerCartDataReducer = (state: Product[] = [], action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //im useing find method to get the product which rqual to 
      const selectedProduct = state.find(product => product.id === action.payload.id)

      //im making if to make logic to check if the product(selectedProduct) not availabel in the cart!! if not i will add it to cart and and i will change and set the qty to 1
      if (!selectedProduct) {
        return [...state, { ...action.payload, quantity: 1 }] // im spreading [...state] to take the value of the obj which i alredy got by find method in top!
      } else {
        //if the product(selectedProduct) aleady in the cart i will chande the qty(+1)
        return state.map(product => {
          //im maping to get every individual element in the state's array to see if the element id = to the product which already in the cart or no to see if it already in the cart i will add 1 to the qty 
          if (product.id === action.payload.id) {
            //here im spreading the product(element) to add the qty + 1
            return { ...product, quantity: product.quantity! + 1 }
          } else {
            return product
          }
        })


      }



    case "REMOVE_FROM_CART":
      const itemExit = state.find((item) => item.id === action.payload.id)
      if (itemExit?.quantity! >= 1) {
        return state.filter((item) => item.id !== itemExit!.id)
      } else {
        return state
      }



    case "ADJUST_QTY":
      const item = state.find((item) => item.id === action.payload.id)
      if (item?.quantity === 1) {
        return state.filter((itemx) => itemx.id !== item.id)
      } else {
        return state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity! - 1 } : item
        );
      }






    default:
      return state;
  }














}












export default handlerCartDataReducer

