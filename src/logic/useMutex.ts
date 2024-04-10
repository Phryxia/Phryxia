import { createContext, useCallback, useContext, useReducer } from 'react'

export const LockContext = createContext({
  isLocked: false,
})

export function useMutex() {
  const ctx = useContext(LockContext)
  const [, update] = useReducer((_: undefined, value: boolean) => {
    ctx.isLocked = value
    return undefined
  }, undefined)

  const lock = useCallback(() => {
    if (ctx.isLocked) return

    update(true)
  }, [])

  const unlock = useCallback(() => {
    update(false)
  }, [])

  return {
    lock,
    unlock,
  }
}
