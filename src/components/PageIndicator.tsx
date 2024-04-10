import { KimhaeQuestions } from '../consts/questions'

interface Props {
  page: number
}

export function PageIndicator({ page }: Props) {
  return (
    <div>
      {page} / {KimhaeQuestions.length}
    </div>
  )
}
