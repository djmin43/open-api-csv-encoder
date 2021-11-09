import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home: NextPage = () => {

  useEffect(() => {
    hello()
  }, [])

  const hello = async () => {
    const result = await axios.get('/api/hello')
  }

  return (
    <div>
      hello world
    </div>
  )
}

export default Home
