const initialState = {
	categories: [
		{ name: 'electronics', displayName: 'Elecronics' },
		{ name: 'food', displayName: 'Food' },
		{ name: 'clothing', displayName: 'Clothing' }
	],
	activecat: ''
};
//Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
	const { type, payload } = action;
	console.log('STATE??', state, 'Action', action, payload);
	switch (type) {
		case 'CHANGE':
			state.activecat = payload;
			let activecat = payload;
			console.log('act', activecat);
			return { ...state, activecat };
		default:
			return state;
	}
};

export const changeActive = (name) => {
	return {
		type: 'CHANGE',
		payload: name
	};
};
