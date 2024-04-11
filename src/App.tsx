import { useMemo, useState } from 'react'
import { Intro } from './components/Intro'
import { QuestionView } from './components/Question'
import { PlayerChoice } from './consts/colors'
import { KimhaeQuestions } from './consts/questions'
import { ResultView } from './components/Result'
import { makeResult } from './logic/makeResult'
import { makeColor } from './logic/color'
// import { Debug } from './components/Debug'

function App() {
  const [page, setPage] = useState(0)
  const [responses, setResponses] = useState<PlayerChoice[]>([])

  const result = useMemo(() => {
    if (responses.length < KimhaeQuestions.length) return undefined

    const vector = makeResult(KimhaeQuestions, responses)
    return {
      color: makeColor(vector),
      vector,
    }
  }, [responses])

  function nextPage() {
    setPage(page + 1)
  }

  function handleReset() {
    setPage(0)
    setResponses([])
  }

  function makeResponse(value: PlayerChoice) {
    setResponses((response) => {
      const current = page - 1
      const newResponse = response.slice()
      newResponse[current] = value
      return newResponse
    })
  }

  function handleFirst() {
    makeResponse(PlayerChoice.First)
    nextPage()
  }

  function handleSecond() {
    makeResponse(PlayerChoice.Second)
    nextPage()
  }

  function handleBoth() {
    makeResponse(PlayerChoice.Both)
    nextPage()
  }

  function handleNeither() {
    makeResponse(PlayerChoice.Neither)
    nextPage()
  }

  return (
    <>
      {page === 0 && <Intro onStart={nextPage} />}

      {0 < page && page <= KimhaeQuestions.length && (
        <QuestionView
          page={page}
          question={KimhaeQuestions[page - 1]}
          onFirst={handleFirst}
          onSecond={handleSecond}
          onBoth={handleBoth}
          onNeither={handleNeither}
        />
      )}
      {result && (
        <>
          <ResultView result={result} onReset={handleReset} />
        </>
      )}
      {/* <Debug /> */}
    </>
  )
}

export default App
