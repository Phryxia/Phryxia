import type { Question } from '../types'
import { ColorAxis } from './colors'
import imgCake from '../assets/images/cake.jpg'
import imgSushi from '../assets/images/sushi.jpg'
import imgBicycle from '../assets/images/bicycle.jpg'
import imgClimbing from '../assets/images/climbing.jpg'
import imgGenshin from '../assets/images/genshin.jpg'
import imgMonument from '../assets/images/monument.webp'
import imgRB from '../assets/images/puppy-rb.webp'
import imgWB from '../assets/images/puppy-wb.webp'
import imgRomance from '../assets/images/violet.jpg'
import imgSF from '../assets/images/interstellar.jpg'

export const KimhaeQuestions: Question[] = [
  {
    title: '친구가 공짜로 음식을 사준다면?<br />(둘 다 5만원 상당)',
    choices: [
      {
        title: '달콤푹신한 딸기케이크',
        score: ColorAxis.B,
        type: 'image',
        mediaUrl: imgCake,
      },
      {
        title: '싱싱한 살살녹는 초밥',
        score: ColorAxis.R,
        type: 'image',
        mediaUrl: imgSushi,
      },
    ],
  },
  {
    title: '반드시 운동을 해야만 한다면?',
    choices: [
      {
        title: '자전거',
        score: ColorAxis.G,
        type: 'image',
        mediaUrl: imgBicycle,
      },
      {
        title: '실내 암벽등반',
        score: ColorAxis.R,
        type: 'image',
        mediaUrl: imgClimbing,
      },
    ],
  },
  {
    title: '천둥번개가 치는 날,<br />게임을 한다면?',
    choices: [
      {
        title: '한적한 오픈월드 탐험RPG',
        score: ColorAxis.B,
        type: 'image',
        mediaUrl: imgGenshin,
      },
      {
        title: '두뇌 풀가동 퍼즐게임',
        score: ColorAxis.G,
        type: 'image',
        mediaUrl: imgMonument,
      },
    ],
  },
  {
    title: '강아지에게 옷을 입힌다면?',
    choices: [
      {
        title: '센치한 검빨',
        score: ColorAxis.R,
        type: 'image',
        mediaUrl: imgRB,
        objectFit: 'contain',
      },
      {
        title: '퓨어한 흰파',
        score: ColorAxis.B,
        type: 'image',
        mediaUrl: imgWB,
        objectFit: 'contain',
      },
    ],
  },
  {
    title: '다음 중 재밌어보이는 영화장르는?',
    choices: [
      {
        title: '감성어린 로맨스 애니메이션',
        score: ColorAxis.B,
        type: 'image',
        mediaUrl: imgRomance,
      },
      {
        title: '흥미진진한 SF/판타지',
        score: ColorAxis.G,
        type: 'image',
        mediaUrl: imgSF,
      },
    ],
  },
  {
    title: '둘 중 더 마음에 드는 음악은?<br />(들어볼 수 있어요)',
    choices: [
      {
        title: '강렬한 EDM',
        score: ColorAxis.R,
        type: 'youtube',
        mediaUrl:
          'https://www.youtube-nocookie.com/embed/d5Dt7N9dFM0?si=CgTvX2plq-Ib1szk&amp;start=77',
      },
      {
        title: '몽환적인 피아노곡',
        score: ColorAxis.G,
        type: 'youtube',
        mediaUrl: 'https://www.youtube-nocookie.com/embed/twHE_3uS4Rs?si=5Cn-sl7RBfaMe3sr',
      },
    ],
  },
]
