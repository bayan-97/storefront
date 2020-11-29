import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //optional
import products from './Products';
import categories from './categories';

// combine reducers is not necessary when you only have 1 reducer

const reducers = combineReducers({ products, categories });

const store = () => {
	return createStore(reducers, composeWithDevTools());
};

export default store();
