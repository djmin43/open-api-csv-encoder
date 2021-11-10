import React, { useEffect } from 'react'
import axios from 'axios'
import { inputContainer } from '../styles/containerStyles'

interface ColorSelectProps {
  handleFontColor: (e: any) => void
}

const ColorSelect = ({handleFontColor}: ColorSelectProps) => {

  useEffect(() => {
    getColorList()
  }, [])

  const getColorList = async () => {
    const result = await axios.get('api/font-style/color-list')
    console.log(result)
  }

  return (
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
  )
}

export default ColorSelect
