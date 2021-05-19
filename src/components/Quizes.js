import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Quizes = () => {
	const { questions } = useSelector((state) => state);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const dispatch = useDispatch();
	if (questions.length !== 0)
		console.log(questions[currentQuestion].correct_answer);

	const shuffleAnswer = () => {
		let options = [];
		for (
			let i = 0;
			i < questions[currentQuestion].incorrect_answers.length;
			i++
		) {
			options.push(questions[currentQuestion].incorrect_answers[i]);
		}
		options.push(questions[currentQuestion].correct_answer);
		return options.sort(() => Math.random() - 0.5);
	};

	const handleAnswerOptionClick = (e) => {
		if (e.target.textContent === questions[currentQuestion].correct_answer) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const reset = () => {
		dispatch({ type: 'CLEAR_QUIZ' });
	};
	return (
		<>
			{showScore ? (
				<div className="score-section">
					You scored {score} out of {questions.length}
					<Link to="/">
						<button onClick={reset}>Take Quiz Again</button>
					</Link>
				</div>
			) : (
				<>
					{questions.length !== 0 ? (
						<>
							<div className="question-section">
								<div className="question-count">
									<span>Question {currentQuestion + 1}</span>/{questions.length}
								</div>
								<div className="question-text">
									{questions[currentQuestion].question}
								</div>
							</div>
							<div className="answer-section">
								{shuffleAnswer().map((answerOption) => (
									<button onClick={handleAnswerOptionClick}>
										{answerOption}
									</button>
								))}
							</div>
						</>
					) : (
						''
					)}
				</>
			)}
		</>
	);
};
export default Quizes;
