import styles from './Question.module.css'
import classnames from 'classnames/bind'
import { KimhaeQuestions } from '../consts/questions'

const cx = classnames.bind(styles)

interface Props {
  page: number
}

export function PageIndicator({ page }: Props) {
  return (
    <div className={cx('page-indicator')}>
      {page} / {KimhaeQuestions.length}
    </div>
  )
}
