import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTrivia, addPoints } from '../../actions';
import './Trivia.css';

const Trivia = () => {
  const dispatch = useDispatch();

  const [msg, setMsg] = useState('');
  const question = useSelector(state => state.trivia);
  const user = useSelector(state => state.activeUser);

  const [wrongAnswers, setWrongAnswers] = useState(0);

  useEffect(() => {
    dispatch(getTrivia());
  }, []);

  const shuffleAnswers = (ans) => {
    for (let i = ans.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ans[i], ans[j]] = [ans[j], ans[i]];
    }
    return ans;
  }

  const checkAnswer = (ans) => {
    if (ans === question.correct_answer) {
      var pts = (100 - (wrongAnswers*25));
      dispatch(addPoints(user, pts));
      setMsg(`Correct. Great job! +${pts} points`);
      setTimeout(() => {
        setWrongAnswers(0);
        dispatch(getTrivia());
        setMsg('');
      }, 2000)
    } else {
      setWrongAnswers(wrongAnswers+1);
      setMsg('Incorrect. Try again!');
      
    }
  }

  const renderAnswers = () => {
    const answers = question.incorrect_answers;
    
    if (answers) {
      if (answers.length !== 4) {
        answers.push(question.correct_answer);
        shuffleAnswers(answers);
      }
      
      return (
        answers.map(ans => {
          return (
            <button class="answer-button" onClick={() => checkAnswer(ans)}>{atob(ans)}</button>
          );
        })
      )
    }
    
  }

  const showQuestion = () => {
    if (question.question){
      let quesText = atob(question.question);
      return quesText;
    }
  }

  const showMsg = () => {
    if (msg !== '') {
      return (
        <div>
          <h3 className={msg[0] === 'C' ? "success " : "fail " + "ui center aligned header"}>
            {msg}
          </h3>
        </div>
      )
    }   
  }

  return (
    <div className="overlay">
      <div>
        <Link to="/activities">
            <button className="finish">Finish Trivia</button>
        </Link>
      </div>
      
      <div className="points">
          <p className="points">Points: {user.points}</p>
      </div>

      <div>
        <h1 className="question">{showQuestion()}</h1>
        <ul className="ui centered middle aligned four column grid">
          {renderAnswers()}
        </ul>
      </div>
      
      <div className="message">
          {showMsg()}
      </div>
    </div>
  )
}

export default Trivia;