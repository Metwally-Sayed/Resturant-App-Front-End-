import { createStore } from 'redux';
import { productsDataReducer } from '../redux/reducers/product.reducer';
import rootReducers from '../redux/reducers/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducers, composeWithDevTools());


