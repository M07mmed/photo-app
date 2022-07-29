import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

export default function work() {
  return (
    <div>
      <Hero heading='My Work' message='This is some of recent traveling the world.' />
      <Portfolio />
    </div>
  )
}
