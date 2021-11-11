import React from 'react'

interface BodyProps {
  message: string
}

const MainBody = ({message}: BodyProps) => {
  return (
    <div>
      { message }
    </div>
  )
}

export default MainBody
