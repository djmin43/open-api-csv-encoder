import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { inputContainer, appBody, controlPanel } from '../styles/indexStyle'
import ColorSelect from '../components/ColorSelect'
import FontSizeSelect from '../components/FontSizeSelect'
import axios from 'axios'
import MainBody from '../components/MainBody'
import { v4 as uuidv4 } from 'uuid'

const Home: NextPage = ({ colorList, fontSizeList }: any) => {

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

  const addComponent = () => {
    const newId = uuidv4()
    const newComponent = {
      id: newId,
    }
    const newComponentList = [...componentList, newComponent]
    setComponentList(newComponentList)
    console.log(componentList)
  }

  const [componentList, setComponentList] = useState([
    {
      id: 'asdjfasdf'
    }
  ])

  return (
    <div className={appBody}>
      <h1 style={{ ...designObject }}>
        {componentList.map(component =>
          <MainBody key={component.id} message={message} />
          )}
      </h1>
      <div className={controlPanel}>
        <span>control panel</span>
        <div className={inputContainer}>
          <button onClick={addComponent}>add container</button>
        </div>
        <div className={inputContainer}>
          <input type="text" value={message} onChange={handleText} />
        </div>
          <ColorSelect handleFontColor={handleFontColor} colorList={colorList} />
        <div className={inputContainer}>
          <FontSizeSelect handleFontSize={handleFontSize} fontSizeList={fontSizeList} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const colorList = await axios.get('http://localhost:3000/api/font-style/color-list')
  const fontSizeList = await axios.get('http://localhost:3000/api/font-style/font-size')

  return {
    props: {
      colorList: colorList.data,
      fontSizeList: fontSizeList.data
    },
  }
}
export default Home
