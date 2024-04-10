import { Adjectives, Happy, LowAdjectives, Radiant } from '../consts/adjectives'
import { ColorAxis } from '../consts/colors'

export function makeAdjective(v: number[]) {
  const general = makeGeneralAdjective(v)
  const special = makeSpecialAdjective(v)

  if (special) {
    if (special === Radiant) {
      return special
    }

    if (general) {
      return `${general}, ${special}`
    }
    return special
  }
  return general
}

function makeGeneralAdjective([r, g, b]: number[]) {
  return [
    { axis: ColorAxis.R, value: r },
    { axis: ColorAxis.G, value: g },
    { axis: ColorAxis.B, value: b },
  ]
    .filter(({ value }) => value >= 2)
    .sort((a, b) => -a.value + b.value)
    .slice(0, 2)
    .map(({ axis, value }, index, arr) => {
      const pos = arr.length === 1 ? 'backward' : index ? 'backward' : 'forward'
      return Adjectives[axis][value - 2][pos]
    })
    .join(' ')
}

function makeSpecialAdjective(v: number[]) {
  if (isRadiant(v)) {
    return Radiant
  }
  if (isHappy(v)) {
    return Happy
  }
  if (isLow(v)) {
    const sum = v.reduce((acc, x) => acc + x)
    return LowAdjectives[sum % 3]
  }
  return ''
}

function isRadiant(v: number[]) {
  return v.every((x) => x >= 4)
}

function isHappy(v: number[]) {
  return v.every((x) => x >= 3) || v.reduce((acc, x) => acc + x) >= 9
}

function isLow(v: number[]) {
  return v.every((x) => x <= 1)
}
