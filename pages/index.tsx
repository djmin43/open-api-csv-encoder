import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css } from '@emotion/css'

const Home: NextPage = () => {

  const [designObject, setDesignObject] = useState({
    fontColor: '#000000'
  })

  const handleColor = (e: any) => {
    console.log(e.target.value)
    const newObject = {
      fontColor: e.target.value
    }
    setDesignObject(newObject)
  }

  return (
    <div className={appBody}>
      <h1 className={header} style={{ color: designObject.fontColor}}>
        hello world
      </h1>
      <div className={controlPanel}>
        <span>control panel</span>
        <div className={inputContainer}>
          <span>font color: </span>
          <input type="radio" name="choose-color" value="#d32f2f" onChange={handleColor}/>
          <label htmlFor="red">red</label>
          <input type="radio" name="choose-color" value="#1976d2" onChange={handleColor}/>
          <label htmlFor="blue">blue</label>
          <input type="radio" name="choose-color" value="#2e7d32" onChange={handleColor}/>
          <label htmlFor="green">green</label>
          <input type="radio" name="choose-color" value="#9c27b0" onChange={handleColor}/>
          <label htmlFor="purple">purple</label>
        </div>
        <div className={inputContainer}>
          <span>font color: </span>
          <input type="radio" name="choose-color" value="#d32f2f" onChange={handleColor}/>
          <label htmlFor="red">red</label>
          <input type="radio" name="choose-color" value="#1976d2" onChange={handleColor}/>
          <label htmlFor="blue">blue</label>
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

const header = css`
  font-size: 140px;
`

export default Home
