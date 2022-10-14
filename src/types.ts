
export interface AppProps {
  product?: Product
  allitems?: Function
}


export interface ProductAction {
  type: string,
  payload: Product
}


export interface CartAction {
  type: string,
  payload: Product

}

interface ShowModalProps {
  text: string;
  children: React.ReactNode|React.ReactNode[];
  } 

export interface Product {
  keys: any;
  map(arg0: (selecterProduct: any) => JSX.Element): import("react").ReactNode;
  category: Category;
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  popular: boolean;
  quantity?: number

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
  handlerCartDataReducer: Product,
  quantity?: number,
  price?: number
}

export interface INITIAL_STATE {

  product?: [],
  cart?: [],
  currentItem?: []
}

