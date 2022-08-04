export interface AppProps {
  product?: Product
}


export interface ProductAction {
  type: string,
  payload: Product[]
}


export interface CartAction {
  type: string,
  payload: Product

}



export interface Product {
  category: Category;
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  popular: boolean;
 Qty?: number

}

export interface Category {
  id: number;
  name: string;
}

export interface AppProps {

  filterHandler?: Function
  getPizzaItem?: Function
  filterPopularHandler?: Function
}


export interface AppState {

  productsDataReducer: Product[],
  handlerCartDataReducer: Product[]
}