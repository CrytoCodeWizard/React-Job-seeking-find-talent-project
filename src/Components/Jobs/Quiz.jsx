import React, { useEffect, useState } from "react";
import styles from "./quiz.module.css"
import {Timer} from "./Timer"
const quizData = [
  {
    id: 0,
    question: `Node.js is________Language.`,
    options: [`Server Side`, `Client Side`, `Both`],
    answer: `Server Side`
  },
  {
    id: 1,
    question: `How Node.js modules are available externally?`,
    options: [`module.spread`, `module.expose`, `module.exports`],
    answer: `module.exports`
  },
  {
    id: 2,
    question: `Duplication of data is called________.`,
    options: [`Consistency`, `Redundancy`, `Inconsistency`],
    answer: `Redundancy`
  },
  {
    id: 3,
    question: `Which method returns the current working directory of the process?`,
    options: [`process.cwd();`, `cwd();`, `pwd();`],
    answer: `cwd();`
  },
  {
    id: 4,
    question: `Which of the following will help to maintain unique record in the table?`,
    options: [`Foreign Key`, `Composite Key`, `Primary Key`],
    answer: `Primary Key`
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [questions, setQuestions] = useState('');
  const [answer, setAnswer] = useState('');

  const loadQuizData = () => {
    setQuestions(quizData[currentQuestion].question);
    setAnswer(quizData[currentQuestion].answer);
    setOptions(quizData[currentQuestion].options);
  };

  useEffect(() => {
    loadQuizData();
  }, [currentQuestion])
  
  const nextQuestionHandler = () => {

    if (myAnswer === answer) {
      setScore(score + 1);
    }

    setCurrentQuestion(prev=>prev+1);
    console.log(currentQuestion);
  };

  const checkAnswer = (answer) => {
    setMyAnswer(answer);
    setDisabled(false);
  };

  const finishHandler = () => {
    if (currentQuestion === quizData.length - 1) {
      setIsEnd(true);
    }
    if (myAnswer === answer) {
      setScore(score + 1);
    }
  }

  if (isEnd) {
    return (
      <div className={styles.result}>
        <h3>Assessment over, Your final score is {score} points </h3>
        <div>
          The correct answers for the questions are-
          <ol>
            {quizData.map((item, index) => (
              <li className={styles.li}  key={index}>{item.answer}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.app}>
        <div>
        <span>{`Questions ${currentQuestion + 1}  out of ${quizData.length}`}</span>
        <Timer></Timer>
        </div>
        <h1>{questions} </h1>
        <div>
        {options.map((option,index) => (
          <p
            key={index}
            className={myAnswer === option ? styles.selected : null}
            onClick={() => checkAnswer(option)}
          >
            {option}
          </p>
        ))}
        </div>
        {currentQuestion < quizData.length - 1 && (
          <button
            className={styles.button}
            disabled={disabled}
            onClick={nextQuestionHandler}
          >
            Next
          </button>
        )}
        
        {currentQuestion === quizData.length - 1 && (
          <button className={styles.button} onClick={finishHandler}>
            Finish
          </button>
        )}
      </div>
    );
  }
}

export {Quiz};
