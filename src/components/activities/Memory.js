import React from 'react';
import { memPics } from './memoryPictures';

import './Memory.css';

const Memory = () => {
  
  const renderPics = () => {
    return (
      memPics.map(pic => {
        return (
          <div>
            <img src={pic} alt="Memory" className="mem-img block-img" />
          </div>
        )
      })
    )
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
    </div>
    
  )
}

export default Memory;