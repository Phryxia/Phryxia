import type { ColorAxis } from './consts/colors'

export interface Question {
  title: string
  choices: Choice[]
}

export interface Choice {
  type: 'image' | 'youtube'
  title: string
  mediaUrl: string
  score: ColorAxis
  objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down'
}
