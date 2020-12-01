import superagent from 'superagent';

const initialState = {
	catogery: [],
	activecat: ''
};
const api = 'http://api-js401.herokuapp.com/api/v1/categories';
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
		case 'GET':
			state.catogery = payload;
			console.log('actsssss', payload);

			return { ...state };
		default:
			return state;
	}
};

export const getRemoteData = () => {
	return (dispatch) => {
		return superagent.get(api).then((response) => {
			// Delay this action by one second

			dispatch(getAction(response.body.results));
		});
	};
};

const getAction = (payload) => {
	console.log('paaa', payload);
	return {
		type: 'GET',
		payload: payload
	};
};
