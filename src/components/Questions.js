import React, { useState } from 'react'
import Start from './Start'
import { questions } from '../questions'

const Questions = () => {
  const [start, setStart] = useState(false)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  //Submit answer function
  const submitAnswer = (correct) => {
    if (correct) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  //reset all
  const reset = () => {
    setShowScore(false)
    setCurrentQuestion(0)
    setScore(0)
    setStart(!start)
  }

  //Start Button
  if (!start) {
    return <Start start={start} setStart={setStart} />
  }

  return (
    <div className='container h-100'>
      <div className='row justify-content-center h-100'>
        <div className='col-sm-8 mx-auto '>
          <div className='card my-card'>
            {showScore ? (
              <div className='show-score'>
                <p>
                  Your score is {score}
                  <span>/{questions.length}</span>
                </p>
                <button className='try-again' onClick={reset}>
                  Try again
                </button>
              </div>
            ) : (
              <div className='question-flex'>
                <div className='question-count'>
                  <h2>
                    Question {currentQuestion + 1}
                    <span>/{questions.length}</span>
                  </h2>

                  <p className='text-question ml-3'>
                    {questions[currentQuestion].questionText}
                  </p>
                  <hr className='line' />
                </div>
                <div className='answers'>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption, index) => {
                      return (
                        <button
                          className='answer-btn ml-3'
                          key={index}
                          onClick={() => submitAnswer(answerOption.isCorrect)}
                        >
                          {answerOption.choices}
                        </button>
                      )
                    }
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
