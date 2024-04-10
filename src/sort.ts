export function dedup<T>(s: T[], key: (value: T) => string) {
  const dup: Record<string, boolean> = {}

  return s.filter((v) => {
    const k = key(v)
    if (dup[k]) {
      return false
    }
    dup[k] = true
    return v
  })
}
