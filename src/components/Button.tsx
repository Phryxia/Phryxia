import cn from 'classnames'
import classNames from 'classnames/bind'
import styles from './Button.module.css'
import { PropsWithChildren, useContext, useRef, useState } from 'react'
import { LockContext, useMutex } from '../logic/useMutex'

const cx = classNames.bind(styles)

interface Props {
  className: string
  onClick(): void
}

export function SlowButton({ className, onClick, children }: PropsWithChildren<Props>) {
  const { lock, unlock } = useMutex()
  const [shake, setShake] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const ctx = useContext(LockContext)

  function handleClick() {
    if (shake || ctx.isLocked) return

    lock()
    setShake(true)

    const cb = () => {
      buttonRef.current?.removeEventListener('transitionend', cb)
      setTimeout(() => {
        onClick()
        unlock()
      }, 500)
    }
    setTimeout(() => setShake(false), 100)
    buttonRef.current?.addEventListener('transitionend', cb)
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(className, cx({ shake }, 'button'))}
    >
      {children}
    </button>
  )
}
