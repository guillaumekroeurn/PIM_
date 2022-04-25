import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Quizz() {
	const questions = [
		{
			questionText: 'Pendant quelles saisons doit-on planté l’aloe vera?',
			answerOptions: [
				{ answerText: 'Printemps', isCorrect: true },
				{ answerText: 'été', isCorrect: false },
				{ answerText: 'Autonme', isCorrect: false },
				{ answerText: 'Hiver', isCorrect: false },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<NavLink to="/description" className="authPage">
                   		 <button className='auth-btn2' >Réessayer</button>
					</NavLink> 
					<NavLink to="/plantes" className="authPage">
						<button className='auth-btn' > Suivant</button>
					</NavLink>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}