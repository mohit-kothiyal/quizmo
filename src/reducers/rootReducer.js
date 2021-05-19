const initialState = {
	questions: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_QUIZ':
			return {
				...state,
				questions: action.payload.questions,
			};
		case 'CLEAR_QUIZ':
			return {
				...state,
				questions: [],
			};
		default:
			return { ...state };
	}
};
export default rootReducer;
