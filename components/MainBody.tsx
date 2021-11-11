import React from 'react'

interface BodyProps {
  message: string,
  designObject: {},
}

const MainBody = ({ message, designObject }: BodyProps) => {
  return (
    <div style={{ ...designObject }}>
      { message }
    </div>
  )
}

export default MainBody
