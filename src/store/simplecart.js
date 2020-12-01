import superagent from 'superagent';

const initialState = {
	products: [
		{
			_id: '5f1a5f861910080017657ed7',
			name: 'TV',
			category: 'electronics',
			inStock: 4,
			price: 699,
			__v: 0
		},
		{
			_id: '5f1a51f71910080017657ed3',
			name: 'Monitor',
			category: 'electronics',
			inStock: 983,
			price: 100.99,
			__v: 0
		},
		{
			_id: '5f1a51ff1910080017657ed4',
			name: 'Mouse',
			category: 'electronics',
			inStock: 984,
			price: 100.99,
			__v: 0
		},
		{
			_id: '5f1a5faf1910080017657ed8',
			name: 'Calzones',
			category: 'food',
			inStock: 985,
			price: 100.1,
			__v: 0
		},
		{
			_id: '5f1a51f01910080017657ed2',
			name: '1TB USB',
			category: 'electronics',
			inStock: 979,
			price: 100.99,
			__v: 0
		},
		{
			_id: '5f1a5f761910080017657ed6',
			name: 'Apples',
			category: 'food',
			inStock: 940,
			price: 100.1,
			__v: 0
		},
		{
			_id: '5f1a52031910080017657ed5',
			name: 'Keyboard',
			category: 'electronics',
			inStock: 992,
			price: 100.99,
			__v: 0
		}
	],
	cartLists: [],
	count: 0
};
const api = 'http://api-js401.herokuapp.com/api/v1/products';
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	const { type, payload } = action;

	console.log('in produrrrct ACTION???22', action, state);
	let count;
	// console.log('maleeeeerrk', payload);

	switch (type) {
		case 'ADD':
			// let productName = payload;
			count = state.count + 1;
			console.log('maleeeeegrrk', state, payload);

			let cartLists = [];
			cartLists.push(payload);

			state.cartLists.forEach((element) => {
				cartLists.push(element);
			});

			// console.log('nn', catorgyName, prodectsDepCatogry);
			// console.log('DISPLAY PRODS', productsToDisplay);
			return { count, cartLists };

		default:
			return state;
	}
};

// export const addtocart = (name) => {
// 	console.log('vvv', name);
// 	return {
// 		type: 'ADD',
// 		payload: name
// 	};
// };
export const getRemoteData3 = (id) => {
	return (dispatch) => {
		return superagent.get(`${api}/${id}`).then((response) => {
			// Delay this action by one second

			dispatch(getAction3(response.body));
		});
	};
};

const getAction3 = (payload) => {
	console.log('paaa', payload);
	return {
		type: 'ADD',
		payload: payload
	};
};
