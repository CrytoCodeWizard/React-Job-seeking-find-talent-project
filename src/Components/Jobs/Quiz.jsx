import React from "react";
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

class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className={styles.result}>
          <h3>Assessment over, Your final score is {this.state.score} points </h3>
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
          <h1>{this.state.questions} </h1>
          <div>
          {options.map((option) => (
            <p
              key={option.id}
              className={myAnswer === option ? styles.selected : null}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          </div>
          {currentQuestion < quizData.length - 1 && (
            <button
              className={styles.button}
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (
            <button className={styles.button} onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export {Quiz};
