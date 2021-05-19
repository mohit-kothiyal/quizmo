import React from 'react';
import { loadQuestions } from '../actions/questionsAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Home = () => {
	const dispatch = useDispatch();
	const loadQuiz = (e) => {
		dispatch({ type: 'CLEAR_QUIZ' });
		dispatch(loadQuestions(e.target.className));
	};
	return (
		<div>
			<h2>Choose your difficulty level:</h2>
			<Link to="/quiz">
				<button className="easy" name="easy" onClick={loadQuiz}>
					Easy
				</button>
				<button className="medium" name="medium" onClick={loadQuiz}>
					Medium
				</button>
				<button className="hard" name="hard" onClick={loadQuiz}>
					Hard
				</button>
			</Link>
		</div>
	);
};

export default Home;
