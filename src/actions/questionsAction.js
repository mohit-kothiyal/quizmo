import axios from 'axios';
export const loadQuestions = (type) => async (dispatch) => {
	// Fetch Axios
	const questions = await axios.get(
		`https://opentdb.com/api.php?amount=10&category=18&difficulty=${type}`
	);
	console.log(questions.data.results);
	dispatch({
		type: 'FETCH_QUIZ',
		payload: {
			questions: questions.data.results,
		},
	}); //sends this object data to rootReducer
};
