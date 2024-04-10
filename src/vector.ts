export function add(v1: number[], v2: number[]) {
  return v1.map((x, i) => x + v2[i])
}

export function integers(n: number) {
  return Array.from(new Array(n), (_, i) => i)
}
