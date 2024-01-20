import React, { useState } from 'react'

function EmotionBar({ emotionName }) {
  const [emotionValue, setEmotionValue] = useState(0);

  const rangeInputValue = (event) => {
    setEmotionValue(event.target.value);
  }

  return (
    <div className='emotion-bar'>
      <button>{emotionName}</button>
      <label htmlFor="emotion-value">{emotionValue}</label>
      <input type="range" onChange={rangeInputValue} id="emotion-value" name="emotion-value" min="0" max="100" />
    </div>
  )
}

export default EmotionBar