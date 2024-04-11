import { ColorAxis, PlayerChoice } from '../consts/colors'
import type { Question } from '../types'
import { add } from '../vector'

const RGBToIndex = {
  [ColorAxis.R]: 0,
  [ColorAxis.G]: 1,
  [ColorAxis.B]: 2,
}

export function makeResult(questions: Question[], choices: PlayerChoice[]) {
  return questions.reduce(
    (acc, q, i) => {
      const v = choiceToVector(q, choices[i])
      return add(acc, v)
    },
    [0, 0, 0],
  )
}

function choiceToVector(question: Question, choice: PlayerChoice) {
  const selectedIndices: number[] = []

  if (choice === PlayerChoice.First) {
    selectedIndices.push(RGBToIndex[question.choices[0].score])
  } else if (choice === PlayerChoice.Second) {
    selectedIndices.push(RGBToIndex[question.choices[1].score])
  } else if (choice === PlayerChoice.Both) {
    selectedIndices.push(RGBToIndex[question.choices[0].score])
    selectedIndices.push(RGBToIndex[question.choices[1].score])
  }

  const vector = [0, 0, 0]
  for (const selectedIndex of selectedIndices) {
    vector[selectedIndex] += 1
  }
  return vector
}
