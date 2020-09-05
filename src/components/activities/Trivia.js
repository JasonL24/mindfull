import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrivia, addPoints } from '../../actions';

const Trivia = () => {
  const dispatch = useDispatch();

  const question = useSelector(state => state.trivia);
  const user = useSelector(state => state.activeUser);

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
      dispatch(addPoints(user, 100))
      dispatch(getTrivia());
    } else {
      console.log("Incorrect!")
    }
  }

  const renderAnswers = () => {
    const answers = question.incorrect_answers;
    
    if (answers) {
      if (answers.length != 4) {
        answers.push(question.correct_answer);
        shuffleAnswers(answers);
      }
      
      return (
        answers.map(ans => {
          return (
            <button class="ui teal button size large" onClick={() => checkAnswer(ans)}>{atob(ans)}</button>
          );
        })
      )
    }
    
  }

  const showQuestion = () => {
    if (question.question){
      let quesText = atob(question.question);
      return quesText;
      // return question.question.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');
    }
  }

  return (
    <div>
      <h3 className="ui header center aligned">{showQuestion()}</h3>
      <ul className="ui centered middle aligned four column grid">
        {renderAnswers()}
      </ul>
      {user.points}
    </div>
  )
}

export default Trivia;