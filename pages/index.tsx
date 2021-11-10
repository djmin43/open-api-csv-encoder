import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css } from '@emotion/css'

const Home: NextPage = () => {

  const [designObject, setDesignObject] = useState({
    color: '#000000',
    fontSize: '18px'
  })

  const [message, setMessage] = useState('')

  const handleFontColor = (e: any) => {
    const newObject = {
      ...designObject,
      color: e.target.value
    }
    setDesignObject(newObject)
  }

  const handleFontSize = (e: any) => {
    const newObject = {
      ...designObject,
      fontSize: e.target.value
    }
    setDesignObject(newObject)
  }

  const handleText = (e: any) => {
    setMessage(e.target.value)
  }

  return (
    <div className={appBody}>
      <h1 style={{ ...designObject }}>
        {message}
      </h1>
      <div className={controlPanel}>
        <span>control panel</span>
        <div className={inputContainer}>
          <input type="text" value={message} onChange={handleText} />
        </div>
        <div className={inputContainer}>
          <span>font color: </span>
          <input type="radio" name="choose-font-color" value="#d32f2f" onChange={handleFontColor}/>
          <label htmlFor="red">red</label>
          <input type="radio" name="choose-font-color" value="#1976d2" onChange={handleFontColor}/>
          <label htmlFor="blue">blue</label>
          <input type="radio" name="choose-font-color" value="#2e7d32" onChange={handleFontColor}/>
          <label htmlFor="green">green</label>
          <input type="radio" name="choose-font-color" value="#9c27b0" onChange={handleFontColor}/>
          <label htmlFor="purple">purple</label>
        </div>
        <div className={inputContainer}>
          <span>font size: </span>
          <input type="radio" name="choose-font-size" value="8px" onChange={handleFontSize}/>
          <label htmlFor="extra-small">extra small</label>
          <input type="radio" name="choose-font-size" value="16px" onChange={handleFontSize}/>
          <label htmlFor="extra-small">small</label>
          <input type="radio" name="choose-font-size" value="32px" onChange={handleFontSize}/>
          <label htmlFor="extra-small">medium</label>
          <input type="radio" name="choose-font-size" value="64px" onChange={handleFontSize}/>
          <label htmlFor="extra-small">large</label>
          <input type="radio" name="choose-font-size" value="128px" onChange={handleFontSize}/>
          <label htmlFor="extra-large">extra large</label>
        </div>
      </div>
    </div>
  )
}

const appBody = css`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const controlPanel = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const inputContainer = css`
  margin: 1rem;
`

const applyButton = css`
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  margin: 1rem;
`

export default Home
