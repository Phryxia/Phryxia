import { ColorNames } from '../consts/colors'

const R_MIN = 0x23
const R_MAX = 0xff
const G_MIN = 0x50
const G_MAX = 0xd3
const B_MIN = 0x85
const B_MAX = 0xef

export function makeColor([r, g, b]: number[]) {
  if (r >= 4 && g >= 4 && b >= 4) return '#ffffff'

  return (
    '#' +
    [
      Math.floor(map(r, 0, 4, R_MIN, R_MAX)),
      Math.floor(map(g, 0, 4, G_MIN, G_MAX)),
      Math.floor(map(b, 0, 4, B_MIN, B_MAX)),
    ]
      .map((v) => pad(v.toString(16), 2))
      .join('')
  )
}

function map(x: number, xMin: number, xMax: number, yMin: number, yMax: number) {
  return ((x - xMin) * (yMax - yMin)) / (xMax - xMin) + yMin
}

function pad(x: string, length: number) {
  if (x.length < length) {
    return '0'.repeat(length - x.length) + x
  }
  return x
}

interface CommonState<T, Acc> {
  choices: T[][]
  result: Acc[]
  reduce(choices: T[]): Acc
}

export function makeExhaustiveSelections<T, Acc>(
  common: CommonState<T, Acc>,
  selections: T[] = [],
  result: Acc[] = [],
) {
  if (selections.length >= common.choices.length) {
    result.push(common.reduce(selections))
    return result
  }

  for (const choice of common.choices[selections.length]) {
    makeExhaustiveSelections(common, [...selections, choice], result)
  }
  return result
}

export function findNearestColorName(color: string) {
  const { entry } = argmin(ColorNames, ([_, colorCode]) => colorDistance(color, colorCode))
  return entry[0]
}

function argmin<T>(list: T[], evaluate: (value: T) => number) {
  return list.reduce(
    (acc, element) => {
      const value = evaluate(element)

      if (value < acc.value) {
        return {
          value,
          entry: element,
        }
      }
      return acc
    },
    { value: Infinity, entry: undefined as T },
  )
}

function colorDistance(c1: string, c2: string) {
  const v1 = toVector(c1)
  const v2 = toVector(c2)
  return vectorDistance(v1, v2)
}

function toVector(c: string) {
  const h = c.replace('#', '')
  const r = Number.parseInt(h.slice(0, 2), 16)
  const g = Number.parseInt(h.slice(2, 4), 16)
  const b = Number.parseInt(h.slice(4), 16)
  return [r, g, b]
}

function vectorDistance(v1: number[], v2: number[]) {
  return v1.reduce((acc, x, i) => acc + (x - v2[i]) ** 2, 0)
}
