import superagent from 'superagent';

const initialState = {
	products: [],
	prodectsDepCatogry: []
};
const api = 'http://api-js401.herokuapp.com/api/v1/products';
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	let prodectsDepCatogry;
	const { type, payload } = action;

	console.log('in produrrrct ACTION???22', action, state);
	// console.log('maleeeeerrk', payload);

	switch (type) {
		case 'CHANGE':
			let catorgyName = payload;
			prodectsDepCatogry = state.products.filter((product) => {
				if (product.category === catorgyName) {
					return product;
				}
			});
			// console.log('nn', catorgyName, prodectsDepCatogry);
			// console.log('DISPLAY PRODS', productsToDisplay);
			return { ...state, prodectsDepCatogry };
		case 'GETT':
			state.products = payload;

			return { ...state };
		case 'DEC':
			console.log('bbhhb', payload, state);
			prodectsDepCatogry = state.products.filter((product) => {
				if (product.name === payload.name) {
					product.inStock = payload.inStock;
					return product;
				} else if (product.category === payload.category && product.name !== payload.name) {
					return product;
				}
			});

			console.log('nn', prodectsDepCatogry);
			// console.log('DISPLAY PRODS', productsToDisplay);
			return { ...state, prodectsDepCatogry };
		default:
			return state;
	}
};

export const changeActive = (name) => {
	console.log('vvv', name);
	return {
		type: 'CHANGE',
		payload: name
	};
};
export const decremenr = (name) => {
	console.log('vvv', name);
	return {
		type: 'DEC',
		payload: name
	};
};
export const updateproducteData = (id) => {
	return (dispatch) => {
		return superagent.get(`${api}/${id}`).then((response) => {
			// Delay this action by one second
			console.log('updaterr', response);
			dispatch(updateproducteData2(response.body));
		});
	};
};
export const updateproducteData2 = (update) => {
	let up = update;
	return (dispatch) => {
		console.log('update', up);
		return superagent.put(`${api}/${update._id}`).send({ inStock: `${update.inStock - 1} ` }).then((response) => {
			// Delay this action by one second
			console.log('responsekk', response);
			dispatch(getAction2(response.body));
		});
	};
};

const getAction2 = (payload) => {
	console.log('paaa', payload);
	return {
		type: 'DEC',
		payload: payload
	};
};

export const getproducteData = () => {
	return (dispatch) => {
		return superagent.get(api).then((response) => {
			// Delay this action by one second

			dispatch(getAction1(response.body.results));
		});
	};
};

const getAction1 = (payload) => {
	console.log('paaa', payload);
	return {
		type: 'GETT',
		payload: payload
	};
};
