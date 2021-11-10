import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { inputContainer } from '../styles/indexStyle'
import { Color } from '../pages/api/font-style/color-list'

interface ColorSelectProps {
  handleFontColor: (e: any) => void
  colorList: Color[] 
}

const ColorSelect = ({handleFontColor, colorList }: ColorSelectProps) => {

  return (
    <div className={inputContainer}>
      <span>font color: </span>
      {
        colorList.map((item: Color, index) =>
          <span key={item.id}>
            <label htmlFor={item.color}>{item.color}</label>
            <input type="radio" name="choose-font-color" value={item.value} onChange={handleFontColor}/>
          </span>
        )
      }
  </div>
  )
}

export default ColorSelect
