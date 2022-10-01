import './App.css';
import { useState } from 'react'
import questions from './questions.js'

function App() {
  const [questionIndex, setQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);
  
  const processAnswer = (answerIndex) =>{
    if(questions[questionIndex].answerOptions[answerIndex].isCorrect === true) {
      setScore(prevScore => prevScore + 1);
      setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
    }
    else{
      setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
    }
  }

  const restart = () =>{
    setScore(0);
    setQuestionIndex(1);
  }

  return (
		<div className='container'>

			{questionIndex >= questions.length ? 
      (
        <>
          <div className='score-section'>You scored {score} out of {questions.length}</div>
          <button className="restart-button" onClick={()=>restart()}>Restart</button>
        </>
      ) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {questionIndex}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[questionIndex].questionText}</div>
					</div>

					<div className='answer-section'>
						<button className='answer-button' onClick={()=>processAnswer(0)}>{questions[questionIndex].answerOptions[0].answerText}</button>
						<button className='answer-button' onClick={()=>processAnswer(1)}>{questions[questionIndex].answerOptions[1].answerText}</button>
						<button className='answer-button' onClick={()=>processAnswer(2)}>{questions[questionIndex].answerOptions[2].answerText}</button>
						<button className='answer-button' onClick={()=>processAnswer(3)}>{questions[questionIndex].answerOptions[3].answerText}</button>
					</div>
				</>
			)}

		</div>
	);

}

export default App;
