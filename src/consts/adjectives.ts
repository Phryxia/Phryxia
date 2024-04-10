import { ColorAxis } from './colors'

export const Adjectives: Record<ColorAxis, Record<'forward' | 'backward', string>[]> = {
  [ColorAxis.R]: [
    { forward: '활동적이고', backward: '활동적인' },
    { forward: '활기차고', backward: '활기찬' },
    { forward: '정열적이면서', backward: '정열적인' },
  ],
  [ColorAxis.G]: [
    { forward: '자연스럽고', backward: '자연스러운' },
    { forward: '호기심많고', backward: '호기심많은' },
    { forward: '지적이고', backward: '지적인' },
  ],
  [ColorAxis.B]: [
    { forward: '차분하며', backward: '차분한' },
    { forward: '고요하면서', backward: '고요한' },
    { forward: '퓨어하고', backward: '퓨어한' },
  ],
}

export const Radiant = '찬란하고 고귀한'
export const Happy = '행복한'
export const LowAdjectives = ['신비한', '주관이 뚜렷한', '유니크한']
