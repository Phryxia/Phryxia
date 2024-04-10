import classnames from 'classnames/bind'
import Styles from '../styles/cell.module.css'
import { findNearestColorName, makeColor, makeExhaustiveSelections } from '../logic/color'
import { dedup } from '../sort'
import { PlayerChoice } from '../consts/colors'
import { KimhaeQuestions } from '../consts/questions'
import { makeResult } from '../makeResult'
import { makeAdjective } from '../logic/adjective'

const cx = classnames.bind(Styles)

const colors = dedup(
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

export function Debug() {
  return (
    <div className={cx('color-container')}>
      {colors.map((c) => (
        <div key={c.color} className={cx('color-row')}>
          <div
            className={cx('color-cell')}
            style={{ background: c.color, width: '20px', height: '20px' }}
          />
          <span>
            {makeAdjective(c.vector)} {findNearestColorName(c.color)}
          </span>
        </div>
      ))}
    </div>
  )
}
