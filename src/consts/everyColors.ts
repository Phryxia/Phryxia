import { makeColor, makeExhaustiveSelections } from '../logic/color'
import { makeResult } from '../logic/makeResult'
import { dedup } from '../sort'
import { PlayerChoice } from './colors'
import { KimhaeQuestions } from './questions'

export const EveryColors = dedup(
  makeExhaustiveSelections({
    choices: KimhaeQuestions.map(() => [
      PlayerChoice.First,
      PlayerChoice.Second,
      PlayerChoice.Both,
      PlayerChoice.Neither,
    ]),
    result: [],
    reduce(choices) {
      const vector = makeResult(KimhaeQuestions, choices as any[])
      return {
        color: makeColor(vector),
        vector,
      }
    },
  }),
  ({ color }) => color,
)
