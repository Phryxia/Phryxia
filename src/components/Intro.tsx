import { KimhaeQuestions } from '../consts/questions'
import { ColorShowcase } from './ColorShowcase'
import styles from './Intro.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

interface Props {
  onStart(): void
}

export function Intro({ onStart }: Props) {
  return (
    <div className="root">
      <h1 className={cx('title')}>나의 취향은 무슨 색?</h1>
      <ColorShowcase size={5} />
      <section className={cx('descriptions')}>
        <p>
          당신의 취향을 <em>색</em>으로 표현한다면?
        </p>
        <p>
          {KimhaeQuestions.length}개의 소소한 질문들을 물어볼거에요.
          <br />
          절대적인 정답은 없으며,
          <br />
          마음 가는대로 골라보세요.
        </p>
      </section>
      <section className={cx('disclaimers')}>
        <li>
          <span className={cx('entry')}>색에 대한 해석은 사람에 따라 다를 수 있어요.</span>
        </li>
        <li>
          <span className={cx('entry')}>모든 응답은 저장 또는 전송되지 않습니다.</span>
        </li>
      </section>
      <button className={cx('start-button')} onClick={onStart}>
        시작하기
      </button>
    </div>
  )
}
