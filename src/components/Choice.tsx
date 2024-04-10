import styles from './Question.module.css'
import classnames from 'classnames/bind'
import { Choice } from '../types'

const cx = classnames.bind(styles)

interface Props {
  choice: Choice
}

export function ChoiceView({ choice }: Props) {
  return (
    <div className={cx('choice-detail')}>
      {choice.type === 'image' ? (
        <img src={choice.mediaUrl} style={{ objectFit: choice.objectFit }} />
      ) : (
        <iframe
          width="560"
          height="315"
          src={choice.mediaUrl}
          title={choice.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
      <h2>{choice.title}</h2>
    </div>
  )
}
