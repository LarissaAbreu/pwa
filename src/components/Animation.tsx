import * as React from 'react'
import posed from 'react-pose'

const animable = {
  enter: {
    x: '0%',
    delay: 100
  },
  exit: {
    x: '-100%',
    delay: 100
  }
}

export const Animation = posed.div(animable)
