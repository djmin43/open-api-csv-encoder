import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { inputContainer } from '../styles/indexStyle'
import { FontSize } from '../pages/api/font-style/font-size'

interface FontSizeProps {
  handleFontSize: (e: any) => void,
  fontSizeList: FontSize[]
}

const ColorSelect = ({handleFontSize, fontSizeList }: FontSizeProps) => {

  return (
    <div className={inputContainer}>
      <span>font size: </span>
      {
        fontSizeList.map((item: FontSize, index) =>
          <span key={item.id}>
            <label htmlFor={item.size}>{item.size}</label>
            <input type="radio" name="choose-font-size" value={item.value} onChange={handleFontSize}/>
          </span>
        )
      }
  </div>
  )
}

export default ColorSelect
