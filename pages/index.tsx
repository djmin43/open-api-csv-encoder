import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { inputContainer, appBody, controlPanel } from '../styles/indexStyle'
import ColorSelect from '../components/ColorSelect'
import axios from 'axios'
import { css } from '@emotion/css'



const Home: NextPage = ({ colorList }: any) => {

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
        <ColorSelect handleFontColor={handleFontColor} colorList={colorList} />
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

export async function getStaticProps() {
  const colorList = await axios.get('http://localhost:3000/api/font-style/color-list')

  return {
    props: {
      colorList: colorList.data
    },
  }
}
export default Home
