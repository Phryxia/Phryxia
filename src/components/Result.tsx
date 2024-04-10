import classnames from 'classnames/bind'
import styles from './Result.module.css'
import { findNearestColorName } from '../logic/color'
import { makeAdjective } from '../logic/adjective'
import { useEffect, useState } from 'react'
import { ColorShowcase } from './ColorShowcase'

const cx = classnames.bind(styles)
const WAIT = 2200

interface Props {
  result: {
    color: string
    vector: number[]
  }
  onReset(): void
}

export function ResultView({ result, onReset }: Props) {
  const { color, vector } = result
  const adjectives = makeAdjective(vector).split(' ')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), WAIT)
  }, [])

  if (isLoading) {
    return (
      <div className="root">
        <div className={cx('loading')}>결과 계산중...</div>
        <div className={cx('showcase-wrapper')}>
          <ColorShowcase size={4} />
        </div>
      </div>
    )
  }

  return (
    <div className="root">
      <div className={cx('subtitle')}>당신의 색은...</div>
      <div className={cx('title')}>
        {adjectives.map((a) => (
          <span key={a}>{a}</span>
        ))}
        <span style={{ color }}>{findNearestColorName(color)}</span>
      </div>
      <div className={cx('color-cell')} style={{ backgroundColor: color }}>
        {color}
      </div>
      <p>
        사실 저는 방금 질문들의 모든 것들을 좋아한답니다.
        <br />
        저는 다양한 색채감을 느끼며 살아가고 싶어요.
        <br />
        제 색들이 당신의 마음에 드셨길 바라며,
        <br />
        남은 하루도 당신의 추억이 되기를
      </p>
      <button className={cx('button')} style={{ backgroundColor: color }} onClick={onReset}>
        다시 해보기
      </button>
    </div>
  )
}
