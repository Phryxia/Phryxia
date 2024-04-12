import { Choice } from '../types'

interface Props {
  choice: Choice
}

export function ChoiceView({ choice }: Props) {
  return choice.type === 'image' ? (
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
  )
}
