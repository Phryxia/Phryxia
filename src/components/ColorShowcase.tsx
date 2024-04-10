import classnames from 'classnames/bind'
import styles from './ColorShowcase.module.css'
import { useEffect, useRef, useState } from 'react'
import { EveryColors } from '../consts/everyColors'
import { getSamplesWithoutReplacement } from '../logic/random'

const cx = classnames.bind(styles)
const PERIOD = 750

interface Props {
  size: number
}

export function ColorShowcase({ size }: Props) {
  const [current, setCurrent] = useState(createNextGrid(createDefaultGrid(size)))
  const [next, setNext] = useState(createNextGrid(current))

  const nextRef = useRef(next)
  nextRef.current = next

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(nextRef.current)
      setNext(createNextGrid(nextRef.current))
    }, PERIOD)

    return () => clearInterval(id)
  }, [])

  return (
    <div className={cx('container')}>
      {current.map((row, y) => (
        <div key={y} className={cx('row')}>
          {row.map((el, x) => (
            <div
              key={x}
              className={cx('col')}
              style={{ backgroundColor: el ? el : undefined }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

function createDefaultGrid(size: number) {
  return Array.from(new Array(size), () => Array.from(new Array(size), () => ''))
}

function createNextGrid(prevGrid: string[][]) {
  const newGrid = prevGrid.map((g) => g.slice())
  let count = 0

  for (let y = 0; y < newGrid.length; ++y) {
    for (let x = 0; x < newGrid[y].length; ++x) {
      const rate = getWeight(countNeighbor(prevGrid, x, y))

      newGrid[y][x] = Math.random() < rate ? '#' : ''

      if (newGrid[y][x]) {
        count += 1
      }
    }
  }

  const samples = getSamplesWithoutReplacement(EveryColors, count)
  let i = 0

  for (let y = 0; y < newGrid.length; ++y) {
    for (let x = 0; x < newGrid[y].length; ++x) {
      if (newGrid[y][x]) {
        newGrid[y][x] = samples[i].color
        ++i
      }
    }
  }

  return newGrid
}

function countNeighbor(list: string[][], x: number, y: number) {
  let count = 0
  const height = list.length
  const width = list[0].length
  for (let v = -1; v <= 1; ++v) {
    for (let u = -1; u <= 1; ++u) {
      if (u + x < 0 || u + x >= width || v + y < 0 || v + y >= height) {
        continue
      }

      if (list[v + y][u + x]) {
        count += 1
      }
    }
  }
  return count
}

function getWeight(count: number) {
  if (count >= 4) return 0.1
  if (count === 3) return 0.2
  if (count === 2) return 0.4
  if (count === 1) return 0.1
  return 0.2
}
