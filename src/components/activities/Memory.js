import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { memoryPics } from './memoryPictures';

import { addPoints } from '../../actions';

import './Memory.css';

const Memory = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.activeUser);

  const [memPics, setMemPics] = useState(memoryPics);
  const [selectedPics, setSelectedPics] = useState([]);
  const [successMsg, setSuccessMsg]  = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    for (let i = memPics.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [memPics[i], memPics[j]] = [memPics[j], memPics[i]];
    }
    setMemPics([...memPics]);
  }, [])

  const revealImg = (index) => {
    memPics[index].clicked = true;
    console.log(memoryPics[index]);
    setMemPics([...memPics]);
    selectedPics.push(memPics[index]);
    setSelectedPics(selectedPics);
  }

  const renderPics = () => {
    return (
      memPics.map((pic, index) => {
        console.log(pic);
        return (
          <button className="img-btn">
            <img src={pic.img} alt="Memory" onClick={() => revealImg(index)} className={pic.clicked ? "mem-img" : "transparent-mem-img"} />
          </button>
        )
      })
    )
  }

  const flipBack = (pic1, pic2) => {
    setTimeout(() => {
      memPics.map(pic => {
        if (pic.img === pic1.img || pic.img === pic2.img) {
          pic.clicked = false;
        }
      });
      setMemPics([...memPics]);
    }, 900);
  }

  const checkSelectedPics = () => {
    if (selectedPics.length === 2) {
      if (selectedPics[0].img === selectedPics[1].img) {
        dispatch(addPoints(user, 50));
        setSelectedPics([]);
        setSuccessMsg('Great job! +50 Points!')
        removeSuccessMsg();
      } else {
        flipBack(selectedPics[0], selectedPics[1]);
        setSelectedPics([]);
        setSuccessMsg('Try again!');
        removeSuccessMsg();
      }
    }
  }

  const removeSuccessMsg = () => {
    setTimeout(() => {
      setSuccessMsg('');
    }, 900);
  }

  const checkComplete = () => {
    var isComplete = true;
    memPics.forEach(pic => {
      if (!pic.clicked) {
        isComplete = false;
      }
    });

    if (isComplete && !gameOver) {
      setGameOver(true);
    }
  }

  const refreshPics = () => {
    memPics.map(pic => {
      pic.clicked = false;
      return pic;
    });

    // shuffle the pictures
    for (let i = memPics.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [memPics[i], memPics[j]] = [memPics[j], memPics[i]];
    }

    setMemPics([...memPics]);
    setGameOver(false);
  }

  const resetGame = () => {
    if (gameOver) {
      return (
        <button onClick={() => refreshPics()}>Play again!</button>
      )
    }
  }

  return (
    <div>
      <div className="mem-greeting">
        <h1>Memory Game:</h1>
        <h3>Choose the matching images!</h3>
      </div>

      <div className="outer-grid">
        {renderPics()}
      </div>
      {checkSelectedPics()}
      <div className="bottom-msg">
        <h3 className="success-msg">{successMsg}</h3>
        <h3 className="cur-pts">Current points: {user.points}</h3>
      </div>
      {checkComplete()}
      {resetGame()}
    </div>
    
  )
}

export default Memory;