import styles from './Question.module.css'
import classnames from 'classnames/bind'
import { Question } from '../types'
import { ChoiceView } from './Choice'
import { PageIndicator } from './PageIndicator'
import { SlowButton } from './Button'
import { LockContext } from '../logic/useMutex'
import { useRef } from 'react'

const cx = classnames.bind(styles)

interface Props {
  page: number
  question: Question
  onFirst(): void
  onSecond(): void
  onBoth(): void
  onNeither(): void
}

export function QuestionView({ page, question, onFirst, onSecond, onBoth, onNeither }: Props) {
  const ctxState = useRef({ isLocked: false })
  const c1 = question.choices[0].score
  const c2 = question.choices[1].score
  const cb = [c1, c2].sort().join('')

  return (
    <div className="root">
      <h1 className={cx('title')} dangerouslySetInnerHTML={{ __html: question.title }} />
      <PageIndicator page={page} />
      <ul className={cx('choices')}>
        {question.choices.map((choice) => (
          <li key={choice.title} className={cx('choice-detail')}>
            <ChoiceView choice={choice} />
          </li>
        ))}
      </ul>

      <div className={cx('buttons')}>
        <LockContext.Provider value={ctxState.current}>
          <SlowButton onClick={onFirst} className={cx({ [c1]: true })}>
            {question.choices[0].title}
          </SlowButton>
          <SlowButton onClick={onSecond} className={cx({ [c2]: true })}>
            {question.choices[1].title}
          </SlowButton>
          <SlowButton onClick={onBoth} className={cx({ [cb]: true })}>
            둘 다 좋아
          </SlowButton>
          <SlowButton onClick={onNeither} className={cx('nah')}>
            둘 다 별로
          </SlowButton>
        </LockContext.Provider>
      </div>
    </div>
  )
}
